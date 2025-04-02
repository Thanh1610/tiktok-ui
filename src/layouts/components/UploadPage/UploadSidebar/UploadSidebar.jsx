import classNames from 'classnames/bind';
import styles from './UploadSidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faChartLine, faPlus } from '@fortawesome/free-solid-svg-icons';
import { MusicNoteIcon, UploadBookIcon, UploadHomeIcon } from '@/components/Icons';
import { faCommentDots, faEnvelope, faFolderClosed, faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router';

const cx = classNames.bind(styles);

function UploadSidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('logo')} src="https://i.postimg.cc/SKG8qLQH/logo.png" alt="logo" />
            </div>

            <div className={cx('container')}>
                <button className={cx('upload-btn', 'disabled')}>
                    <FontAwesomeIcon icon={faPlus} />
                    <span className="title-btn">Upload</span>
                </button>

                <div className={cx('wrapper-content')}>
                    <div className="content">
                        <div className={cx('heading')}>MANAGE</div>
                        <div className={cx('list')}>
                            <div className={cx('item')}>
                                <UploadHomeIcon className={cx('icon')} />
                                <span className={cx('title')}>Home</span>
                            </div>
                            <div className={cx('item')}>
                                <FontAwesomeIcon icon={faFolderClosed} className={cx('icon')} />
                                <span className={cx('title')}>Posts</span>
                            </div>
                            <div className={cx('item')}>
                                <FontAwesomeIcon icon={faChartLine} className={cx('icon')} />
                                <span className={cx('title')}>Analytics</span>
                            </div>
                            <div className={cx('item')}>
                                <FontAwesomeIcon icon={faCommentDots} className={cx('icon')} />
                                <span className={cx('title')}>Comments</span>
                            </div>
                        </div>
                    </div>

                    <div className="content">
                        <div className={cx('heading')}>TOOLS</div>
                        <div className={cx('list')}>
                            <div className={cx('item')}>
                                <FontAwesomeIcon icon={faLightbulb} className={cx('icon')} />
                                <span className={cx('title')}>Inspirations</span>
                            </div>
                            <div className={cx('item')}>
                                <UploadBookIcon className={cx('icon')} />
                                <span className={cx('title')}>Creator Academy</span>
                            </div>
                            <div className={cx('item')}>
                                <MusicNoteIcon className={cx('icon')} />
                                <span className={cx('title')}>Unlimited sounds</span>
                            </div>
                        </div>
                    </div>

                    <div className="content">
                        <div className={cx('heading')}>OTHERS</div>
                        <div className={cx('list')}>
                            <div className={cx('item')}>
                                <FontAwesomeIcon icon={faEnvelope} className={cx('icon')} />
                                <span className={cx('title')}>Feedback</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('footer')}>
                <Link to="/" className={cx('back-link')}>
                    <FontAwesomeIcon icon={faAngleLeft} className={cx('back-icon')} />
                    <span>Back to TikTok</span>
                </Link>
            </div>
        </div>
    );
}

export default UploadSidebar;
