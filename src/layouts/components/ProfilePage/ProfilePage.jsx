import { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router';
import classNames from 'classnames/bind';
import styles from './ProfilePage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faGear, faGripVertical, faPenToSquare, faRetweet } from '@fortawesome/free-solid-svg-icons';
import { LinkIcon, ShareIcon } from '../../../components/Icons';
import { faBookmark, faHeart } from '@fortawesome/free-regular-svg-icons';

import * as videoService from '@/apiServices/videoService';
import CommentsModal from '../../../components/CommentsModal';
import ShareModal from '../../../components/ShareModal';
const cx = classNames.bind(styles);

function ProfilePage() {
    const [user, setUser] = useState(null);
    const [isOpenCommentModal, setIsOpenCommentModal] = useState(false);
    const [isOpenShareModal, setIsOpenShareModal] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const [activeSort, setActiveSort] = useState(0);
    const [shrink, setShrink] = useState(false);

    const videoRef = useRef();
    const { nickname } = useParams();
    const cleanNickname = nickname.replace(/^:/, '');

    const tabs = [
        { icon: faGripVertical, label: 'Videos' },
        { icon: faRetweet, label: 'Reposts' },
        { icon: faBookmark, label: 'Favorites' },
        { icon: faHeart, label: 'Videos' },
    ];

    const sortOptions = ['Latest', 'Popular', 'Oldest'];

    useEffect(() => {
        const checkScreenSize = () => {
            if (window.innerWidth <= 768) {
                setShrink(true);
            } else {
                setShrink(false);
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await videoService.video();

            if (users) {
                const foundUser = users.find((u) => u.nickname.toLowerCase() === cleanNickname.toLowerCase());
                setUser(foundUser || null);
            }
        };

        fetchUsers();
    }, [cleanNickname]);

    if (!user) {
        return <div className={cx('container')}>User not found!</div>;
    }

    return (
        <div className={cx('container')}>
            <div className={cx('content')}>
                <div className={cx('header')}>
                    <div className={cx('wrapper-avatar')}>
                        <img className={cx('avatar')} src={user.avatar} alt={user.nickname} />
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('name')}>
                            <div className={cx('nickname')}>{user.nickname}</div>
                            <div className={cx('username')}>{`${user.first_name} ${user.last_name}`}</div>
                        </div>

                        <div className={cx('wrapper-btn')}>
                            <button className={cx('edit-btn', 'btn', { small: shrink })}>
                                {shrink ? <FontAwesomeIcon icon={faPenToSquare} /> : 'Edit Profile'}
                            </button>
                            <button className={cx('post-btn', 'btn', { small: shrink })}>
                                {shrink ? <FontAwesomeIcon icon={faFire} /> : 'Promote Post'}
                            </button>
                            <button className={cx('setting-btn')}>
                                <FontAwesomeIcon icon={faGear} className={cx('icon-btn')} />
                            </button>
                            <button className={cx('share-btn')} onClick={() => setIsOpenShareModal(true)}>
                                <ShareIcon className={cx('icon-btn')} />
                            </button>

                            {isOpenShareModal && <ShareModal data={user} onClose={() => setIsOpenShareModal(false)} />}
                        </div>

                        <div className={cx('interact')}>
                            <div className={cx('wrapper-follow')}>
                                <div className={cx('following')}>
                                    {user.followings_count}
                                    <p className={cx('text', 'active')}>Following</p>
                                </div>

                                <div className={cx('followers')}>
                                    {user.followers_count}
                                    <p className={cx('text', 'active')}>Followers</p>
                                </div>

                                <div className={cx('like')}>
                                    {user.likes_count}
                                    <p className={cx('text')}>Likes</p>
                                </div>
                            </div>
                            {user.website_url.length > 0 ? (
                                <Link to={user.website_url} target="_blank" className={cx('text-Link')}>
                                    <LinkIcon className={cx('icon-link')} />
                                    <p>{user.website_url}</p>
                                </Link>
                            ) : (
                                <p className={cx('bio-text')}>No bio yet.</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className={cx('navbar')}>
                    <div className={cx('feedtab-list')}>
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                className={cx('feedtab-item', { active: activeTab === index })}
                                onClick={() => setActiveTab(index)}
                            >
                                <FontAwesomeIcon icon={tab.icon} />
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </div>

                    <div className={cx('sort')}>
                        {sortOptions.map((option, index) => (
                            <button
                                key={index}
                                className={cx('sort-btn', { active: activeSort === index })}
                                onClick={() => setActiveSort(index)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={cx('wrapper-video')}>
                    <div className={cx('list')}>
                        <div className={cx('item')}>
                            <div className={cx('wrapper-item')}>
                                <video
                                    ref={videoRef}
                                    className={cx('video-player')}
                                    src={user.popular_video.file_url}
                                    onClick={() => setIsOpenCommentModal(true)}
                                ></video>

                                {isOpenCommentModal && (
                                    <CommentsModal data={user} onClose={() => setIsOpenCommentModal(false)} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
