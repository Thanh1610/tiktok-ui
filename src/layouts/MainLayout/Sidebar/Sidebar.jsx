import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router';
import config from '@/config';
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
    MoreIconActive,
} from '@/components/Icons';
import { useState } from 'react';

import images from '@/assets/images';
import { MoreIcon, SearchIcon } from '@/components/Icons';
import Menu, { MenuItem } from './Menu';
import FollowingAccounts from '@/components/FollowingAccounts';
import FooterContainer from './FooterContainer';
import Modals from '@/components/Modals';

const cx = classNames.bind(styles);

function Sidebar({ className }) {
    const [modalType, setModalType] = useState(null);

    const openModal = (type) => {
        setModalType(type);
    };
    const closeModal = () => setModalType(null);

    return (
        <div className={cx(className)}>
            <div className={cx('header')}>
                <Link to={config.routes.home} className={cx('logo-link')} onClick={() => window.location.reload()}>
                    <img src={images.logo} alt="tiktok" />
                </Link>

                <div className={cx('search-btn')} onClick={() => openModal('search')}>
                    <SearchIcon className={cx('search-icon')} />
                    <input className={cx('search-input')} type="text" placeholder="Search" />
                </div>
            </div>

            <div className={cx('wrapper-content')}>
                <Menu>
                    <MenuItem
                        title="For You"
                        to={config.routes.home}
                        icon={<HomeIcon />}
                        activeIcon={<HomeIconActive />}
                    />
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
                        asButton
                        icon={<ActivityIcon />}
                        activeIcon={<ActivityIconActive />}
                        onClick={() => openModal('activity')}
                    />
                    <MenuItem
                        title="Messages"
                        to={config.routes.messages}
                        icon={<MessagesIcon />}
                        activeIcon={<MessagesIcon />}
                        badge={3}
                    />
                    <MenuItem
                        title="LIVE"
                        to={config.routes.live}
                        icon={<LiveIcon />}
                        activeIcon={<LiveIconActive />}
                    />
                    <MenuItem title="Profile" to={`/:${'xucana'}`} avatar />
                    <MenuItem
                        title="More"
                        asButton
                        icon={<MoreIcon />}
                        activeIcon={<MoreIconActive />}
                        onClick={() => openModal('more')}
                    />
                </Menu>

                <FollowingAccounts label="Following accounts" />
                <FooterContainer />
            </div>
            <Modals isOpen={!!modalType} type={modalType} onClose={closeModal} onOpenModal={openModal} />
        </div>
    );
}

export default Sidebar;
