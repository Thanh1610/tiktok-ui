import classNames from 'classnames/bind';
import styles from './UploadContent.module.scss';
import { Link } from 'react-router';
import { useState } from 'react';
import { MagicIcon, UploadFileIcon } from '@/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAudioDescription, faFolderMinus, faLightbulb, faVideo } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function UploadContent() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Link className={cx('avatar-link')} to={`/:${'xucana'}`}>
                    <img
                        className={cx('avatar')}
                        src="https://files.fullstack.edu.vn/f8-tiktok/users/4854/646231eb7a517.png"
                        alt=""
                    />
                </Link>
            </div>

            <div className={cx('container')}>
                <div className={cx('content')}>
                    <div className={cx('layout')}>
                        <div className={cx('sub-layout')}>
                            <label className={cx('upload-box')}>
                                <input type="file" accept="video/*" id="fileInput" onChange={handleFileChange} hidden />
                                <div className={cx('upload-content')}>
                                    <UploadFileIcon />
                                    <p className={cx('upload-text')}>Select video to upload</p>
                                    <span className={cx('upload-subtext')}>Or drag and drop it here</span>
                                    <button
                                        className={cx('upload-button')}
                                        onClick={() => document.getElementById('fileInput').click()}
                                    >
                                        Select video
                                    </button>
                                    {selectedFile && <p className={cx('file-name')}>{selectedFile.name}</p>}
                                </div>
                            </label>
                        </div>

                        <ul className={cx('suggestion-list')}>
                            <li className={cx('sgt-item')}>
                                <div className={cx('wrapper-sgt-icon')}>
                                    <FontAwesomeIcon icon={faVideo} className={cx('sgt-icon')} />
                                </div>
                                <div className={cx('sgt-desc')}>
                                    <p className={cx('sgt-heading')}>Size and duration</p>
                                    <p className={cx('sgt-text')}>Maximum size: 30 GB, video duration: 60 minutes.</p>
                                </div>
                            </li>

                            <li className={cx('sgt-item')}>
                                <FontAwesomeIcon icon={faFolderMinus} />
                                <div className={cx('sgt-desc')}>
                                    <p className={cx('sgt-heading')}>File formats</p>
                                    <p className={cx('sgt-text')}>
                                        Recommended: “.mp4”. Other major formats are supported.
                                    </p>
                                </div>
                            </li>

                            <li className={cx('sgt-item')}>
                                <div className={cx('wrapper-sgt-icon')}>
                                    <FontAwesomeIcon icon={faAudioDescription} className={cx('sgt-icon')} />
                                </div>
                                <div className={cx('sgt-desc')}>
                                    <p className={cx('sgt-heading')}>Video resolutions</p>
                                    <p className={cx('sgt-text')}>High-resolution recommended: 1080p, 1440p, 4K.</p>
                                </div>
                            </li>

                            <li className={cx('sgt-item')}>
                                <div className={cx('wrapper-sgt-icon')}>
                                    <FontAwesomeIcon icon={faLightbulb} className={cx('sgt-icon')} />
                                </div>
                                <div className={cx('sgt-desc')}>
                                    <p className={cx('sgt-heading')}>Aspect ratios</p>
                                    <p className={cx('sgt-text')}>
                                        Recommended: 16:9 for landscape, 9:16 for vertical.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className={cx('wrapper-quality')}>
                        <div className={cx('quality')}>
                            <p className={cx('quality-heading')}>Create high quality videos on CapCut Online</p>
                            <p className={cx('quality-desc')}>
                                Automatically shorten your videos and create videos from scripts with AI-powered
                                features.
                            </p>
                        </div>

                        <div className={cx('quality-btn')}>
                            <MagicIcon />
                            Try now
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UploadContent;
