import classNames from 'classnames/bind';
import styles from './MainContent.module.scss';
import { useEffect, useState } from 'react';

import VideoSidebar from './VideoSidebar';
import Video from './Video';

const cx = classNames.bind(styles);

function MainContent() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`https://tiktok.fullstack.edu.vn/api/users/suggested?page=1&per_page=20`)
            .then((res) => res.json())
            .then((res) => setUsers(res.data));
    }, []);

    return (
        <>
            <div className={cx('list-container')}>
                {users.map((user, index) => (
                    <article className={cx('item-container')} key={index}>
                        <div className={cx('wrapper-video')}>
                            <Video data={user} />
                            <VideoSidebar data={user} />
                        </div>
                    </article>
                ))}
            </div>
        </>
    );
}

export default MainContent;
