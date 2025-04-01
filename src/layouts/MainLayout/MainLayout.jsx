import Styles from './MainLayout.module.scss';
import classNames from 'classnames/bind';
import { CoinIcon } from '@/components/Icons';
import { useState, useEffect } from 'react';

const cx = classNames.bind(Styles);
import SideBar from './Sidebar';
import ModalSmall from '@/components/Modals/ModalSmall';

function MainLayout({ children }) {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            if (window.innerWidth <= 1024) {
                setShowModal(true);
            } else {
                setShowModal(false);
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, [showModal]);
    return (
        <div>
            <div className={cx('wrapper')}>
                {showModal && <ModalSmall onClose={() => setShowModal(false)} />}
                <SideBar className={cx('sidebar')} />
                <div className={cx('main-content')}>
                    {children}
                    <button className={cx('Promotion')}>
                        <CoinIcon />
                        <p className={cx('title')}>Get Coins</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MainLayout;
