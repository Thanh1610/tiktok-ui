import classNames from 'classnames/bind';
import styles from './ShareModal.module.scss';
import { createPortal } from 'react-dom';
import {
    EmailIcon,
    EmbedIcon,
    FacebookIcon,
    LineIcon,
    LinkedInIcon,
    LinkIcon,
    PinterestIcon,
    RedditIcon,
    RepostIcon,
    SendIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsAppIcon,
} from '../Icons';
import { useState, useRef } from 'react';

const cx = classNames.bind(styles);

function ShareModal({ data, onClose }) {
    const [showToast, setShowToast] = useState(false);
    const linkRef = useRef();

    const handleCopy = () => {
        if (linkRef.current) {
            navigator.clipboard
                .writeText(linkRef.current.value)
                .then(() => {
                    setShowToast(true);
                    setTimeout(() => setShowToast(false), 2000);
                })
                .catch((err) => console.error('Copy failed', err));
        }
    };

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains(cx('overlay'))) {
            onClose();
        }
    };
    return createPortal(
        <div className={cx('overlay')} onClick={handleOverlayClick}>
            <div className={cx('container')}>
                <div className={cx('navbar')}>
                    <div className={cx('leading')}></div>
                    <h2 className={cx('title')}>Share to</h2>
                    <button className={cx('close-btn')} onClick={onClose}>
                        &times;
                    </button>
                </div>

                <div className={cx('share-group')}>
                    <div className={cx('copy-wrapper')}>
                        <div className={cx('copy')}>
                            <input
                                ref={linkRef}
                                type="text"
                                className={cx('copy-link')}
                                value={data.popular_video.file_url}
                            />
                            <div className={cx('copy-icon-wrapper')}>
                                <div className={cx('copy-icon')} onClick={handleCopy}>
                                    <LinkIcon />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx('action-list')}>
                        <div className={cx('action-item-wrapper')}>
                            <div className={cx('action-item')}>
                                <RepostIcon className={cx('action-icon')} />
                                <p className={cx('action-text')}>Repost</p>
                            </div>
                        </div>

                        <div className={cx('action-item-wrapper')}>
                            <div className={cx('action-item')}>
                                <SendIcon className={cx('action-icon')} />
                                <p className={cx('action-text')}>Send to friends</p>
                            </div>
                        </div>

                        <div className={cx('action-item-wrapper')}>
                            <div className={cx('action-item')}>
                                <EmbedIcon className={cx('action-icon')} />
                                <p className={cx('action-text')}>Embed</p>
                            </div>
                        </div>

                        <a href="#" target="_blank" className={cx('action-item-wrapper')}>
                            <div className={cx('action-item')}>
                                <FacebookIcon className={cx('action-icon')} />
                                <p className={cx('action-text')}>FaceBook</p>
                            </div>
                        </a>

                        <a href="#" target="_blank" className={cx('action-item-wrapper')}>
                            <div className={cx('action-item')}>
                                <WhatsAppIcon className={cx('action-icon')} />
                                <p className={cx('action-text')}>WhatsApp</p>
                            </div>
                        </a>

                        <a href="#" target="_blank" className={cx('action-item-wrapper')}>
                            <div className={cx('action-item')}>
                                <TwitterIcon className={cx('action-icon')} />
                                <p className={cx('action-text')}>Twitter</p>
                            </div>
                        </a>

                        <a href="#" target="_blank" className={cx('action-item-wrapper')}>
                            <div className={cx('action-item')}>
                                <LinkedInIcon className={cx('action-icon')} />
                                <p className={cx('action-text')}>LinkedIn</p>
                            </div>
                        </a>

                        <a href="#" target="_blank" className={cx('action-item-wrapper')}>
                            <div className={cx('action-item')}>
                                <RedditIcon className={cx('action-icon')} />
                                <p className={cx('action-text')}>Reddit</p>
                            </div>
                        </a>

                        <a href="#" target="_blank" className={cx('action-item-wrapper')}>
                            <div className={cx('action-item')}>
                                <TelegramIcon className={cx('action-icon')} />
                                <p className={cx('action-text')}>Telegram</p>
                            </div>
                        </a>

                        <a href="#" target="_blank" className={cx('action-item-wrapper')}>
                            <div className={cx('action-item')}>
                                <EmailIcon className={cx('action-icon')} />
                                <p className={cx('action-text')}>Email</p>
                            </div>
                        </a>

                        <a href="#" target="_blank" className={cx('action-item-wrapper')}>
                            <div className={cx('action-item')}>
                                <LineIcon className={cx('action-icon')} />
                                <p className={cx('action-text')}>Line</p>
                            </div>
                        </a>

                        <a href="#" target="_blank" className={cx('action-item-wrapper')}>
                            <div className={cx('action-item')}>
                                <PinterestIcon className={cx('action-icon')} />
                                <p className={cx('action-text')}>Pinterest</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            {showToast && <div className={cx('toast')}>Copied</div>}
        </div>,
        document.body,
    );
}

export default ShareModal;
