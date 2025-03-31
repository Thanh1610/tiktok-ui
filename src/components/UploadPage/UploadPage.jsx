import classNames from 'classnames/bind';
import styles from './UploadPage.module.scss';

import UploadSidebar from './UploadSidebar';

const cx = classNames.bind(styles);
function UploadPage({ children }) {
    return (
        <div className={cx('wrapper')}>
            <UploadSidebar />
            <div className={cx('container')}>{children}</div>
        </div>
    );
}

export default UploadPage;
