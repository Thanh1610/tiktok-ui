import styles from './FollowingAccounts.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem(to) {
    return (
        <div className={cx('account-item')}>
            <Link to={to} className={cx('account-link')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/0a2255f3d250ea3862d864d5582f1edc~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=621f2d0b&x-expires=1742130000&x-signature=%2FEd9nh2YRF2w111M88mCLPkVdGo%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
                    alt=""
                />
                <div className={cx('info')}>
                    <div className={cx('nickname')}>
                        <strong>TikTok Vn</strong>
                        <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                    </div>
                    <div className={cx('user-name')}>tiktokshop_viet</div>
                </div>
            </Link>
        </div>
    );
}

export default AccountItem;
