import { NavLink } from 'react-router';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';

const cx = classNames.bind(style);
function MenuItem({ title, to, icon, avatar, activeIcon, badge, asButton, isCollapsed, onClick }) {
    const Component = asButton ? 'div' : NavLink;

    const className = asButton ? cx('menu-item') : (nav) => cx('menu-item', { active: nav.isActive });

    return (
        <Component {...(asButton ? { onClick } : { to })} className={className}>
            <span className={cx('icon')}>
                {icon}
                {badge && <span className={cx('badge')}>{badge}</span>}
            </span>
            <span className={cx('active-icon')}>{activeIcon}</span>
            {avatar && (
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/6e5df93a012f301f942d1dd5172c8884~tplv-tiktokx-cropcenter:720:720.jpeg?dr=14579&refresh_token=4c440574&x-expires=1742306400&x-signature=9HKrqHi%2BVW%2Fl38ftgjX0SVCpAjQ%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                    alt=""
                />
            )}

            {!isCollapsed && <span className={cx('title')}>{title}</span>}
        </Component>
    );
}

export default MenuItem;
