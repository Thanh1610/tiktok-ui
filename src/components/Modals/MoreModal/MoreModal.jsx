import classNames from 'classnames/bind';
import styles from './MoreModal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import ModalBase from '../ModalBase';
import SubModal from '../SubModal';

const cx = classNames.bind(styles);
const menuItems = [
    { text: 'Get Coins', hasIcon: false },
    { text: 'Create TikTok effects', hasIcon: false },
    { text: 'Creator tools', hasIcon: true },
    { text: 'English', hasIcon: true },
    { text: 'Dark mode', hasIcon: true },
    { text: 'Settings', hasIcon: false },
    { text: 'Feedback and help', hasIcon: false },
    { text: 'Log out', hasIcon: false },
];

const subMenus = {
    'Creator tools': ['Promote post', 'View Analytics', 'LIVE Creator Hub', 'LIVE Studio'],
    English: ['English', 'Tiếng Việt', 'Italiano', 'Basa Jawa'],
    'Dark mode': ['Automatic', 'Dark mode', 'Light mode'],
};

function MoreModal({ onClose }) {
    const [subModal, setSubModal] = useState(null);

    const handleOpenSubModal = (text) => {
        if (subMenus[text]) {
            setSubModal(text);
        }
    };

    const handleCloseSubModal = () => {
        setSubModal(null);
    };
    return (
        <ModalBase title="More" onClose={onClose}>
            {!subModal ? (
                <ul className={cx('menu-list')}>
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            className={cx('item')}
                            onClick={() => {
                                if (item.hasIcon) {
                                    handleOpenSubModal(item.text);
                                }
                            }}
                        >
                            <div className={cx('item-content')}>
                                <span className={cx('text')}>{item.text}</span>
                                {item.hasIcon && <FontAwesomeIcon icon={faAngleRight} className={cx('icon')} />}
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <SubModal title={subModal} item={subMenus[subModal]} onBack={handleCloseSubModal} />
            )}
        </ModalBase>
    );
}

export default MoreModal;
