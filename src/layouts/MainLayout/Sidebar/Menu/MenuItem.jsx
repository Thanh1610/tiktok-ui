import { NavLink } from 'react-router';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';

const cx = classNames.bind(style);
function MenuItem({ title, to, icon, avatar, activeIcon, badge, asButton, isCollapsed, onClick }) {
    const Component = asButton ? 'div' : NavLink;

    const className = asButton ? cx('menu-item') : (nav) => cx('menu-item', { active: nav.isActive });

    const handleClick = (e) => {
        if (to === '/' && window.location.pathname === '/') {
            e.preventDefault();
            window.location.reload();
        }
        if (onClick) onClick();
    };

    return (
        <Component {...(asButton ? { onClick } : { to, onClick: handleClick })} className={className}>
            <span className={cx('icon')}>
                {icon}
                {badge && <span className={cx('badge')}>{badge}</span>}
            </span>
            <span className={cx('active-icon')}>{activeIcon}</span>
            {avatar && (
                <img
                    className={cx('avatar')}
                    src="https://files.fullstack.edu.vn/f8-tiktok/users/4854/646231eb7a517.png"
                    alt=""
                />
            )}

            {!isCollapsed && <span className={cx('title')}>{title}</span>}
        </Component>
    );
}

export default MenuItem;
