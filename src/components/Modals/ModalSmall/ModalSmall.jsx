import classNames from 'classnames/bind';
import styles from './ModalSmall.module.scss';
import {
    TiktokIcon,
    SearchIcon,
    HomeIcon,
    ExploreIcon,
    FollowingIcon,
    FriendsIcon,
    UploadIcon,
    ActivityIcon,
    MessagesIcon,
    LiveIcon,
    MoreIcon,
} from '@/components/Icons';
import config from '@/config';
import { Link } from 'react-router';

const cx = classNames.bind(styles);
function ModalSmall({ onOpenModal, onClose, type }) {
    return (
        <div className={cx('modal')}>
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <TiktokIcon />
                    </Link>

                    <div
                        className={cx('search-btn')}
                        onClick={() => (type === 'search' ? onClose() : onOpenModal('search'))}
                    >
                        <div className={cx('wrapper-searchIcon')}></div>
                        <SearchIcon className={cx('search-icon')} />
                    </div>
                </div>
            </div>

            <div className={cx('content')}>
                <Link to={config.routes.home} className={cx('item-link')} onClick={onClose}>
                    <HomeIcon />
                </Link>

                <Link to={config.routes.explore} className={cx('item-link')} onClick={onClose}>
                    <ExploreIcon />
                </Link>

                <Link to={config.routes.following} className={cx('item-link')} onClick={onClose}>
                    <FollowingIcon />
                </Link>

                <Link to={config.routes.friends} className={cx('item-link')} onClick={onClose}>
                    <FriendsIcon />
                </Link>

                <Link to={config.routes.upload} className={cx('item-link')} onClick={onClose}>
                    <UploadIcon />
                </Link>

                <div
                    className={cx('item-link')}
                    onClick={() => (type === 'activity' ? onClose() : onOpenModal('activity'))}
                >
                    <ActivityIcon />
                </div>

                <Link to={config.routes.messages} className={cx('item-link')} onClick={onClose}>
                    <MessagesIcon />
                </Link>

                <Link to={config.routes.live} className={cx('item-link')} onClick={onClose}>
                    <LiveIcon />
                </Link>

                <Link to={`/:${'xucana'}`} className={cx('item-link')} onClick={onClose}>
                    <img
                        className={cx('avatar')}
                        src="https://files.fullstack.edu.vn/f8-tiktok/users/4854/646231eb7a517.png"
                        alt=""
                    />
                </Link>
                <div
                    className={cx('item-link', 'pd-8')}
                    onClick={() => (type === 'more' ? onClose() : onOpenModal('more'))}
                >
                    <MoreIcon />
                </div>
            </div>
        </div>
    );
}

export default ModalSmall;
