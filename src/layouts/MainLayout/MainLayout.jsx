import Styles from './MainLayout.module.scss';
import classNames from 'classnames/bind';
import { CoinIcon } from '@/components/Icons';

const cx = classNames.bind(Styles);
import SideBar from './Sidebar';

function MainLayout({ children }) {
    return (
        <div>
            <div className={cx('wrapper')}>
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
