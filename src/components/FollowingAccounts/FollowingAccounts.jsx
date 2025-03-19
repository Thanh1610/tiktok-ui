import styles from './FollowingAccounts.module.scss';
import classNames from 'classnames/bind';
import AccountItem from './AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import * as request from '@/utils/request';

const cx = classNames.bind(styles);
function FollowingAccounts({ label }) {
    const [accounts, setAccounts] = useState([]);
    const [accountType, setAccountType] = useState('less');

    useEffect(() => {
        const fetchAccounts = async () => {
            try {
                const res = await request.get(`users/search?q=T&type=${accountType}`);
                setAccounts(res.data);
            } catch (error) {
                console.error('Error fetching accounts:', error);
            }
        };

        fetchAccounts();
    }, [accountType]);

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            {accounts.map((account, index) => (
                <AccountItem key={index} to={`/@${account.nickname}`} data={account} />
            ))}

            <div className={cx('more-btn')}>
                <FontAwesomeIcon className={cx('more-icon')} icon={faChevronDown} />
                <p className={cx('more')} onClick={() => setAccountType('more')}>
                    See more
                </p>
            </div>
        </div>
    );
}

export default FollowingAccounts;
