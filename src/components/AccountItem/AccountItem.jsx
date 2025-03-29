import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';

const cx = classNames.bind(styles);
function AccountItem({ data, onClose }) {
    return (
        <Link to={`/:${data.nickname}`} className={cx('wrapper')} onClick={onClose}>
            <img className={cx('avatar')} src={data.avatar} alt={data.avatar} />
            <div className={cx('info')}>
                <h4 className={cx('nickname')}>
                    {data.nickname}
                    {data.tick && <FontAwesomeIcon icon={faCircleCheck} className={cx('icon')} />}
                </h4>

                <p className={cx('username')}>{data.full_name}</p>
            </div>
        </Link>
    );
}

export default AccountItem;
