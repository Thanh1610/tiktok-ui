import Styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router';
import config from '@/config';

import images from '@/assets/images';
import { SearchIcon } from '@/components/Icons';
import {
    HomeIcon,
    HomeIconActive,
    ExploreIcon,
    ExploreIconActive,
    FollowingIcon,
    FollowingIconActive,
    FriendsIcon,
    FriendsIconActive,
    UploadIcon,
    ActivityIcon,
    ActivityIconActive,
    MessagesIcon,
    LiveIcon,
    LiveIconActive,
} from '@/components/Icons';
import Menu, { MenuItem } from './Menu';

const cx = classNames.bind(Styles);

function Sidebar({ className }) {
    return (
        <div className={className}>
            <div className={cx('header')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="tiktok" />
                </Link>
                <button className={cx('search-btn')}>
                    <SearchIcon className={cx('search-icon')} />
                    <input className={cx('search-input')} type="text" placeholder="Tìm kiếm..." />
                </button>
            </div>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeIconActive />} />
                <MenuItem
                    title="Explore"
                    to={config.routes.explore}
                    icon={<ExploreIcon />}
                    activeIcon={<ExploreIconActive />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<FollowingIcon />}
                    activeIcon={<FollowingIconActive />}
                />
                <MenuItem
                    title="Friends"
                    to={config.routes.friends}
                    icon={<FriendsIcon />}
                    activeIcon={<FriendsIconActive />}
                />
                <MenuItem title="Upload" to={config.routes.upload} icon={<UploadIcon />} />
                <MenuItem
                    title="Activity"
                    to={config.routes.activity}
                    icon={<ActivityIcon />}
                    activeIcon={<ActivityIconActive />}
                />
                <MenuItem
                    title="Messages"
                    to={config.routes.messages}
                    icon={<MessagesIcon />}
                    activeIcon={<MessagesIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveIconActive />} />
                <MenuItem title="Profile" to={config.routes.profile} avatar />
            </Menu>
        </div>
    );
}

export default Sidebar;
