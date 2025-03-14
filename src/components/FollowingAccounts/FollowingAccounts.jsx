import styles from './FollowingAccounts.module.scss';
import classNames from 'classnames/bind';
import AccountItem from './AccountItem';
import config from '@/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function FollowingAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            <AccountItem to={config.routes.profile} />
            <AccountItem to={config.routes.profile} />
            <AccountItem to={config.routes.profile} />
            <AccountItem to={config.routes.profile} />
            <AccountItem to={config.routes.profile} />

            <div className={cx('more-btn')}>
                <FontAwesomeIcon className={cx('more-icon')} icon={faChevronDown} />
                <p className={cx('more')}>See more</p>
            </div>
        </div>
    );
}

export default FollowingAccounts;
