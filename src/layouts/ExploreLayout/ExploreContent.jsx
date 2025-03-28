import classNames from 'classnames/bind';
import styles from './ExploreContent.module.scss';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router';

import Navbar from '@/components/Navbar';
import * as videoService from '@/apiServices/videoService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { VolumeMute, VolumeUpIcon } from '@/components/Icons';
import CommentsModal from '@/components/CommentsModal';

const cx = classNames.bind(styles);
function ExploreContent() {
    const [users, setUsers] = useState([]);
    const [hideNavbar, setHideNavbar] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [activeVideo, setActiveVideo] = useState(null);
    const [isOpenModal, setIsOpenModal] = useState(null);

    const contentRef = useRef(null);
    const videoRefs = useRef({});

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await videoService.video();
            setUsers(users);
        };

        fetchUsers();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (contentRef.current) {
                setHideNavbar(contentRef.current.scrollTop >= 84);
            }
        };

        const contentEl = contentRef.current;
        if (contentEl) {
            contentEl.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (contentEl) {
                contentEl.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const handleMouseEnter = useCallback(
        (id) => {
            if (activeVideo !== null && activeVideo !== id && videoRefs.current[activeVideo]) {
                videoRefs.current[activeVideo].pause();
                videoRefs.current[activeVideo].currentTime = 0;
            }

            setActiveVideo(id);

            if (videoRefs.current[id]) {
                videoRefs.current[id].play();
            }
        },
        [activeVideo],
    );

    const handleOpenModal = useCallback((id) => {
        if (videoRefs.current[id]) {
            videoRefs.current[id].pause();
            videoRefs.current[id].currentTime = 0;
        }

        setIsOpenModal(id);
    }, []);

    const handleClose = (e) => {
        e.stopPropagation();
        setIsOpenModal(null);
    };

    const handleVolumeClick = (e) => {
        e.stopPropagation();
        setIsMuted(!isMuted);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')} ref={contentRef}>
                <Navbar className={cx({ hide: hideNavbar })} />
                <div className={cx('list')}>
                    {users.map((user) => (
                        <div key={user.id} className={cx('item-wrapper')}>
                            <div className={cx('item')}>
                                <div
                                    className={cx('wrapper-video')}
                                    onMouseEnter={() => handleMouseEnter(user.id)}
                                    onClick={() => handleOpenModal(user.id)}
                                >
                                    <video
                                        ref={(el) => (videoRefs.current[user.id] = el)}
                                        className={cx('video-player')}
                                        src={user.popular_video.file_url}
                                        loop
                                        muted={isMuted}
                                    />

                                    {isOpenModal === user.id && <CommentsModal data={user} onClose={handleClose} />}

                                    <div className={cx('tools')}>
                                        <div className={cx('like')}>
                                            <FontAwesomeIcon icon={faHeart} className={cx('like-icon')} />
                                            <strong className={cx('count')}>{user.likes_count}</strong>
                                        </div>
                                        <div className={cx('volume')} onClick={handleVolumeClick}>
                                            {isMuted ? <VolumeMute /> : <VolumeUpIcon />}
                                        </div>
                                    </div>
                                </div>
                                <Link to={`/:${user.nickname}`} className={cx('info')}>
                                    <img className={cx('avatar')} src={user.avatar} alt="" />
                                    <p className={cx('name')}>{user.nickname}</p>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ExploreContent;
