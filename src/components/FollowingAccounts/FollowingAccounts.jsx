import styles from './FollowingAccounts.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

import AccountItem from './AccountItem';
import * as videoService from '@/apiServices/videoService';

const cx = classNames.bind(styles);
function FollowingAccounts({ label }) {
    const [users, setUsers] = useState([]);
    const [perPage, setPerPage] = useState(5);

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await videoService.video(1, perPage);
            setUsers(users);
        };

        fetchUsers();
    }, [perPage]);

    const handleSeeMore = () => {
        if (perPage < 20) {
            setPerPage((prev) => prev + 5);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            {users.map((user, index) => (
                <AccountItem key={index} to={`/:${user.nickname}`} data={user} />
            ))}

            <div className={cx('more-btn')}>
                <FontAwesomeIcon className={cx('more-icon')} icon={faChevronDown} />
                <p className={cx('more')} onClick={handleSeeMore}>
                    See more
                </p>
            </div>
        </div>
    );
}

export default FollowingAccounts;
