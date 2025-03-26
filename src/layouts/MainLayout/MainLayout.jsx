import Styles from './MainLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(Styles);
import SideBar from './Sidebar';

function MainLayout({ children }) {
    return (
        <div>
            <div className={cx('wrapper')}>
                <SideBar className={cx('sidebar')} />
                <div className={cx('main-content')}>{children}</div>
            </div>
        </div>
    );
}

export default MainLayout;
