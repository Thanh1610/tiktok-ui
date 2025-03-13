import Styles from './HeaderOnly.module.scss';
import classNames from 'classnames/bind';

import Header from '@/layouts/components/Header';

const cx = classNames.bind(Styles);

function HeaderOnly({ children }) {
    return (
        <div>
            <div className={cx('wrapper-container')}>
                <Header />
                <div className={cx('container')}>{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
