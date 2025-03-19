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

                <Link to={config.routes.activity} className={cx('item-link')} onClick={onClose}>
                    <ActivityIcon />
                </Link>

                <Link to={config.routes.messages} className={cx('item-link')} onClick={onClose}>
                    <MessagesIcon />
                </Link>

                <Link to={config.routes.live} className={cx('item-link')} onClick={onClose}>
                    <LiveIcon />
                </Link>

                <Link to={config.routes.profile} className={cx('item-link')} onClick={onClose}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/6e5df93a012f301f942d1dd5172c8884~tplv-tiktokx-cropcenter:720:720.jpeg?dr=14579&refresh_token=4c440574&x-expires=1742306400&x-signature=9HKrqHi%2BVW%2Fl38ftgjX0SVCpAjQ%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                        alt=""
                    />
                </Link>
                <Link
                    className={cx('item-link', 'pd-8')}
                    onClick={() => (type === 'more' ? onClose() : onOpenModal('more'))}
                >
                    <MoreIcon />
                </Link>
            </div>
        </div>
    );
}

export default ModalSmall;
