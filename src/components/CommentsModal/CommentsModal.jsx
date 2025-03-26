import classNames from 'classnames/bind';
import styles from './CommentsModal.module.scss';
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faMusic, faXmark, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';
import { useState, useRef } from 'react';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import {
    HeartIcon,
    HeartIconActive,
    BookMarkIconActive,
    BookMarkIcon,
    RepostIcon,
    EmbedIcon,
    SendIcon,
    FacebookIcon,
    WhatsAppIcon,
    ShareIcon,
    TwitterIcon,
    LinkedInIcon,
    RedditIcon,
    TelegramIcon,
    EmailIcon,
    LineIcon,
    PinterestIcon,
} from '@/components/Icons';

import Search from '../Search';
import MenuVideo from '@/components/MenuVideo';
import { Wrapper as ShareWrapper } from '../Popper';

const cx = classNames.bind(styles);
function CommentsModal({ data, onClose }) {
    const [display, setDisplay] = useState(false);
    const [heartIcon, setHeartIcon] = useState(false);
    const [bookMarkIcon, setBookMarkIcon] = useState(false);
    const [isFollow, setIsFollow] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [commentsActive, setCommentsActive] = useState('comments');

    const linkRef = useRef();

    const handleCopy = () => {
        if (linkRef.current) {
            navigator.clipboard
                .writeText(linkRef.current.textContent)
                .then(() => {
                    setShowToast(true);
                    setTimeout(() => setShowToast(false), 2000);
                })
                .catch((err) => console.error('Copy failed', err));
        }
    };

    return createPortal(
        <div className={cx('modal-layout')}>
            <div className={cx('modal-container')}>
                {/* video */}
                <div className={cx('modal-video')}>
                    <div className={cx('video-tool')}>
                        <button className={cx('video-btn')} onClick={onClose}>
                            <FontAwesomeIcon icon={faXmark} className={cx('video-icon')} />
                        </button>
                        <Search />
                        <MenuVideo
                            placement="bottom-end"
                            offset={[0, 26]}
                            style={{ background: 'rgba(21, 20, 20, 0.66)', color: '#fff' }}
                        >
                            <button className={cx('video-btn')}>
                                <FontAwesomeIcon icon={faEllipsis} className={cx('video-icon')} />
                            </button>
                        </MenuVideo>
                    </div>
                    <video className={cx('video-player')} src={data.popular_video.file_url} loop autoPlay controls />
                </div>

                {/* info */}
                <div className={cx('modal-info')}>
                    <div className={cx('info')}>
                        <div className={cx('wrapper-info')}>
                            <div className={cx('header')}>
                                <div className={cx('avatar-info')}>
                                    <Link to={`/@${data.nickname}`}>
                                        <img className={cx('avatar')} src={data.avatar} alt="" />
                                    </Link>
                                    <Link to={`/@${data.nickname}`} className={cx('name')}>
                                        <span className={cx('nickname')}>{data.nickname}</span>
                                        <span className={cx('username')}>{`${data.first_name} ${data.last_name}`}</span>
                                    </Link>
                                </div>

                                <button
                                    className={cx('follow-btn', { active: isFollow })}
                                    onClick={() => setIsFollow(!isFollow)}
                                >
                                    {isFollow || data.is_followed === 'true' ? 'Following' : 'Follow'}
                                </button>
                            </div>

                            <div className={cx('container')}>
                                <div className={cx('wrapper-desc')}>
                                    <span className={cx('desc', { less: display })}>
                                        {data.popular_video.description}
                                    </span>
                                    <button className={cx('desc-btn')} onClick={() => setDisplay(!display)}>
                                        {display ? 'less' : 'more'}
                                    </button>
                                </div>

                                {data.popular_video.music && (
                                    <span className={cx('music')}>
                                        <FontAwesomeIcon icon={faMusic} className={cx('music-icon')} />
                                        <p className={cx('music-name')}>{data.popular_video.music}</p>
                                    </span>
                                )}
                            </div>

                            <div className={cx('footer')}>
                                <div className={cx('wrapper')}>
                                    <div className={cx('interact')}>
                                        <button className={cx('info-btn')} onClick={() => setHeartIcon(!heartIcon)}>
                                            <span className={cx('wrapper-icon')}>
                                                {!heartIcon || data.is_liked === 'true' ? (
                                                    <HeartIcon />
                                                ) : (
                                                    <HeartIconActive />
                                                )}
                                            </span>
                                            <strong className={cx('count')}>{data.popular_video.likes_count}</strong>
                                        </button>

                                        <button className={cx('info-btn')}>
                                            <span className={cx('wrapper-icon')}>
                                                <FontAwesomeIcon icon={faCommentDots} className={cx('icon')} />
                                            </span>
                                            <strong className={cx('count')}>{data.popular_video.comments_count}</strong>
                                        </button>

                                        <button
                                            className={cx('info-btn')}
                                            onClick={() => setBookMarkIcon(!bookMarkIcon)}
                                        >
                                            <span className={cx('wrapper-icon')}>
                                                {!bookMarkIcon ? <BookMarkIcon /> : <BookMarkIconActive />}
                                            </span>
                                            <strong className={cx('count')}>{data.popular_video.views_count}</strong>
                                        </button>
                                    </div>
                                    <div className={cx('social')}>
                                        <Tippy content="Repost" placement="top" appendTo={document.body}>
                                            <div className={cx('wrapper-social-icon')}>
                                                <RepostIcon />
                                            </div>
                                        </Tippy>
                                        <Tippy content="Embed" placement="top">
                                            <div className={cx('wrapper-social-icon')}>
                                                <EmbedIcon />
                                            </div>
                                        </Tippy>
                                        <Tippy content="Send to friends" placement="top">
                                            <div className={cx('wrapper-social-icon')}>
                                                <SendIcon />
                                            </div>
                                        </Tippy>
                                        <Tippy content="Share on Facebook" placement="top">
                                            <a
                                                href="https://www.facebook.com/"
                                                className={cx('icon-link')}
                                                target="_blank"
                                            >
                                                <FacebookIcon />
                                            </a>
                                        </Tippy>
                                        <Tippy content="Share on WhatsApp" placement="top">
                                            <a
                                                href="https://web.whatsapp.com/"
                                                className={cx('icon-link')}
                                                target="_blank"
                                            >
                                                <WhatsAppIcon />
                                            </a>
                                        </Tippy>
                                        <HeadlessTippy
                                            interactive
                                            offset={[20, 10]}
                                            placement="bottom-end"
                                            render={(attrs) => (
                                                <ShareWrapper style={{ background: '#fff' }}>
                                                    <div className={cx('share-group')} tabIndex="-1" {...attrs}>
                                                        <a href="#" className={cx('icon-share-link')} target="_blank">
                                                            <TwitterIcon />
                                                            <span className={cx('share-text')}>Share on Twitter</span>
                                                        </a>

                                                        <a href="#" className={cx('icon-share-link')} target="_blank">
                                                            <LinkedInIcon />
                                                            <span className={cx('share-text')}>Share on LinkedIn</span>
                                                        </a>

                                                        <a href="#" className={cx('icon-share-link')} target="_blank">
                                                            <RedditIcon />
                                                            <span className={cx('share-text')}>Share on Reddit</span>
                                                        </a>

                                                        <a href="#" className={cx('icon-share-link')} target="_blank">
                                                            <TelegramIcon />
                                                            <span className={cx('share-text')}>Share on Telegram</span>
                                                        </a>

                                                        <a href="#" className={cx('icon-share-link')} target="_blank">
                                                            <EmailIcon />
                                                            <span className={cx('share-text')}>Share on Email</span>
                                                        </a>

                                                        <a href="#" className={cx('icon-share-link')} target="_blank">
                                                            <LineIcon />
                                                            <span className={cx('share-text')}>Share on Line</span>
                                                        </a>

                                                        <a href="#" className={cx('icon-share-link')} target="_blank">
                                                            <PinterestIcon />
                                                            <span className={cx('share-text')}>Share on Pinterest</span>
                                                        </a>
                                                    </div>
                                                </ShareWrapper>
                                            )}
                                        >
                                            <div className={cx('wrapper-social-icon')}>
                                                <ShareIcon />
                                            </div>
                                        </HeadlessTippy>
                                    </div>
                                </div>
                                <div className={cx('copy-link')}>
                                    <p ref={linkRef} className={cx('video-link')}>
                                        {data.popular_video.file_url}
                                    </p>
                                    <button className={cx('copy-btn')} onClick={handleCopy}>
                                        Copy Link
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('comments')}>
                        <div
                            className={cx('comments-video', { active: commentsActive === 'comments' })}
                            onClick={() => setCommentsActive('comments')}
                        >
                            Commments
                        </div>
                        <div
                            className={cx('creator-video', { active: commentsActive === 'creator' })}
                            onClick={() => setCommentsActive('creator')}
                        >
                            Creator videos
                        </div>
                    </div>
                    <div className={cx('border')}></div>

                    <div className={cx('user-comments')}>No comment</div>
                </div>
            </div>
            {showToast && <div className={cx('toast')}>Copied</div>}
        </div>,
        document.body,
    );
}

export default CommentsModal;
