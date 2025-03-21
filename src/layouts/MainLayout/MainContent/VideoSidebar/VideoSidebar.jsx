import classNames from 'classnames/bind';
import styles from './VideoSidebar.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faShare } from '@fortawesome/free-solid-svg-icons';
import {
    HeartIcon,
    HeartIconActive,
    BookMarkIconActive,
    BookMarkIcon,
    FollowIconActive,
    FollowIcon,
} from '@/components/Icons';

const cx = classNames.bind(styles);
function VideoSidebar({ data }) {
    const [heartIcon, setHeartIcon] = useState(false);
    const [bookMarkIcon, setBookMarkIcon] = useState(false);
    const [followIcon, setFollowIcon] = useState(false);
    return (
        <div className={cx('video-info')}>
            <div className={cx('video-avatar')}>
                <img className={cx('avatar')} src={data.avatar} alt="" />
                <button className={cx('following')} onClick={() => setFollowIcon(!followIcon)}>
                    {!followIcon ? <FollowIcon /> : <FollowIconActive />}
                </button>
            </div>
            <button className={cx('info-btn')} onClick={() => setHeartIcon(!heartIcon)}>
                <span className={cx('wrapper-icon')}>{!heartIcon ? <HeartIcon /> : <HeartIconActive />}</span>
                <strong className={cx('count')}>{data.popular_video.likes_count}</strong>
            </button>

            <button className={cx('info-btn')}>
                <span className={cx('wrapper-icon')}>
                    <FontAwesomeIcon icon={faCommentDots} className={cx('icon')} />
                </span>
                <strong className={cx('count')}>{data.popular_video.comments_count}</strong>
            </button>

            <button className={cx('info-btn')} onClick={() => setBookMarkIcon(!bookMarkIcon)}>
                <span className={cx('wrapper-icon')}>{!bookMarkIcon ? <BookMarkIcon /> : <BookMarkIconActive />}</span>
                <strong className={cx('count')}>{data.popular_video.views_count}</strong>
            </button>

            <button className={cx('info-btn')}>
                <span className={cx('wrapper-icon')}>
                    <FontAwesomeIcon icon={faShare} className={cx('icon')} />
                </span>
                <strong className={cx('count')}>{data.popular_video.views_count}</strong>
            </button>
        </div>
    );
}

export default VideoSidebar;
