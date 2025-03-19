import classNames from 'classnames/bind';
import styles from './SubModal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function SubModal({ title, item, onBack }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <button className={cx('back-btn')} onClick={onBack}>
                    <FontAwesomeIcon icon={faAngleLeft} className={cx('icon')} />
                </button>
                <h2 className={cx('title')}>{title}</h2>
            </div>
            <ul className={cx('container-list')}>
                {item.map((item, index) => (
                    <li key={index} className={cx('container-item')}>
                        <div className={cx('text')}>{item}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SubModal;
