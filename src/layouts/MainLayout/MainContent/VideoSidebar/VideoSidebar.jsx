import classNames from 'classnames/bind';
import styles from './VideoSidebar.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import ShareModal from '@/components/ShareModal';
import {
    HeartIcon,
    HeartIconActive,
    BookMarkIconActive,
    BookMarkIcon,
    FollowIconActive,
    FollowIcon,
    ShareActiveIcon,
} from '@/components/Icons';
import CommentsModal from '@/components/CommentsModal';

const cx = classNames.bind(styles);
function VideoSidebar({ data, onCommentsModal }) {
    const [heartIcon, setHeartIcon] = useState(false);
    const [bookMarkIcon, setBookMarkIcon] = useState(false);
    const [followIcon, setFollowIcon] = useState(false);
    const [openCommentModal, setOpenCommentModal] = useState(false);
    const [shareModal, setShareModal] = useState(false);

    const handleOpenCommentsModal = () => {
        setOpenCommentModal(true);
        onCommentsModal && onCommentsModal();
    };
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

            <button className={cx('info-btn')} onClick={handleOpenCommentsModal}>
                <span className={cx('wrapper-icon')}>
                    <FontAwesomeIcon icon={faCommentDots} className={cx('icon')} />
                </span>
                <strong className={cx('count')}>{data.popular_video.comments_count}</strong>
            </button>

            <button className={cx('info-btn')} onClick={() => setBookMarkIcon(!bookMarkIcon)}>
                <span className={cx('wrapper-icon')}>{!bookMarkIcon ? <BookMarkIcon /> : <BookMarkIconActive />}</span>
                <strong className={cx('count')}>{data.popular_video.views_count}</strong>
            </button>

            <button className={cx('info-btn')} onClick={() => setShareModal(true)}>
                <span className={cx('wrapper-icon')}>
                    <ShareActiveIcon className={cx('icon')} />
                </span>
                <strong className={cx('count')}>{data.popular_video.views_count}</strong>
            </button>

            {openCommentModal && <CommentsModal data={data} onClose={() => setOpenCommentModal(false)} />}
            {shareModal && <ShareModal data={data} onClose={() => setShareModal(false)} />}
        </div>
    );
}

export default VideoSidebar;
