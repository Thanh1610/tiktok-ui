import classNames from 'classnames/bind';
import styles from './MainContent.module.scss';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import * as videoService from '@/apiServices/videoService';
import VideoSidebar from './VideoSidebar';
import Video from './Video';

const cx = classNames.bind(styles);

function MainContent() {
    const [users, setUsers] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const listContainerRef = useRef(null);

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await videoService.video();
            setUsers(users);
        };

        fetchUsers();
    }, []);

    const scrollToVideo = (index) => {
        if (!listContainerRef.current) return;

        const videos = listContainerRef.current.children;
        if (videos[index]) {
            videos[index].scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleNextVideo = () => {
        if (currentIndex < users.length - 1) {
            const newIndex = currentIndex + 1;
            scrollToVideo(newIndex);
            setCurrentIndex(newIndex);
        }
    };

    const handlePrevVideo = () => {
        if (currentIndex > 0) {
            const newIndex = currentIndex - 1;
            scrollToVideo(newIndex);
            setCurrentIndex(newIndex);
        }
    };

    return (
        <>
            <div className={cx('list-container')} ref={listContainerRef}>
                {users.map((user, index) => (
                    <article className={cx('item-container')} key={index}>
                        <div className={cx('wrapper-video')}>
                            <Video data={user} />
                            <VideoSidebar data={user} />
                        </div>
                    </article>
                ))}
            </div>

            <div className={cx('nav-buttons')}>
                <button className={cx('nav-btn', { disabled: currentIndex === 0 })}>
                    <FontAwesomeIcon icon={faChevronUp} className={cx('nav-icon')} onClick={handlePrevVideo} />
                </button>

                <button className={cx('nav-btn')}>
                    <FontAwesomeIcon icon={faChevronDown} className={cx('nav-icon')} onClick={handleNextVideo} />
                </button>
            </div>
        </>
    );
}

export default MainContent;
