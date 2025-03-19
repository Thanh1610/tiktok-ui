import styles from './FollowingAccounts.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem({ to, data }) {
    return (
        <div className={cx('account-item')}>
            <Link to={to} className={cx('account-link')}>
                <img className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                <div className={cx('info')}>
                    <div className={cx('nickname')}>
                        <strong>{data.nickname}</strong>
                        {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />}
                    </div>
                    <div className={cx('user-name')}>{data.full_name}</div>
                </div>
            </Link>
        </div>
    );
}

export default AccountItem;
