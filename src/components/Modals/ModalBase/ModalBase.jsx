import classNames from 'classnames/bind';
import styles from './ModalBase.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);
function ModalBase({ onClose, children, title }) {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
    };

    const handleAnimationEnd = () => {
        if (isClosing) {
            onClose();
        }
    };
    return (
        <div className={cx('modal', { closing: isClosing })} onAnimationEnd={handleAnimationEnd}>
            <div className={cx('header')}>
                <div className={cx('heading')}>
                    <h2 className={cx('title')}>{title}</h2>
                    <button className={cx('close-btn')} onClick={handleClose}>
                        <p className={cx('close-text')}>&times;</p>
                    </button>
                </div>
            </div>

            <div className={cx('container')}>{children}</div>
        </div>
    );
}

export default ModalBase;
