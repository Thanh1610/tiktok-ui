import { NavLink } from 'react-router';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';

const cx = classNames.bind(style);
function MenuItem({ title, to, icon, avatar, activeIcon }) {
    return (
        <NavLink to={to} className={(nav) => cx('menu-item', { active: nav.isActive })}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>
            {avatar && (
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/6e5df93a012f301f942d1dd5172c8884~tplv-tiktokx-cropcenter:720:720.jpeg?dr=14579&refresh_token=d0454d61&x-expires=1742101200&x-signature=kINrh3kKEQBoFx9qoN5t%2BYkbaGQ%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                    alt=""
                />
            )}
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

export default MenuItem;
