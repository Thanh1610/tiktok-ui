/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';
import { VolumeUpIcon, VolumeMute, MenuIcon } from '@/components/Icons';

const cx = classNames.bind(styles);

function Video({ data }) {
    const [isMuted, setIsmuted] = useState(false);
    const [volume, setVolume] = useState(50);
    const [isPlaying, setIsPlaying] = useState(true);
    const [showPlayIcon, setShowPlayIcon] = useState(null);
    const [showVolumeSlider, setShowVolumeSlider] = useState(false);
    const videoRefs = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (videoRefs.current) {
                    if (entry.isIntersecting) {
                        videoRefs.current.play();
                    } else {
                        videoRefs.current.pause();
                        videoRefs.current.currentTime = 0;
                    }
                }
            },
            { threshold: 0.5 },
        );

        if (videoRefs.current) {
            observer.observe(videoRefs.current);
        }

        return () => {
            if (videoRefs.current) {
                observer.unobserve(videoRefs.current);
            }
        };
    }, []);

    //bật tắt tiếng
    const toggleMute = () => {
        if (videoRefs.current) {
            videoRefs.current.muted = !isMuted;
            setIsmuted(!isMuted);
            setVolume(isMuted ? 50 : 0);
        }
    };

    //tăng giảm âm
    const handleVolumeChange = (e) => {
        const newVolume = e.target.value;
        setVolume(newVolume);
        if (videoRefs.current) {
            videoRefs.current.volume = newVolume / 100;
            if (newVolume === 0) {
                setIsmuted(true);
            } else {
                setIsmuted(false);
            }
        }
    };

    //play/pause
    const togglePlay = () => {
        if (videoRefs.current) {
            if (isPlaying) {
                videoRefs.current.pause();
                setShowPlayIcon('play');
            } else {
                videoRefs.current.play();
                setShowPlayIcon('pause');
            }
            setIsPlaying(!isPlaying);

            // Ẩn icon sau 800ms
            setTimeout(() => setShowPlayIcon(null), 800);
        }
    };
    return (
        <div className={cx('video')}>
            <div className={cx('video-wrapper')}>
                <video
                    ref={videoRefs}
                    className={cx('video-player')}
                    src={data.popular_video.file_url}
                    loop
                    autoPlay
                    onClick={togglePlay}
                />

                {showPlayIcon && (
                    <div className={cx('play-overlay', showPlayIcon)}>
                        <FontAwesomeIcon
                            icon={showPlayIcon === 'play' ? faPause : faPlay}
                            className={cx('play-icon')}
                        />
                    </div>
                )}

                <div className={cx('controls')}>
                    <div
                        className={cx('volume-control')}
                        onMouseEnter={() => setShowVolumeSlider(true)}
                        onMouseLeave={() => setShowVolumeSlider(false)}
                    >
                        <button className={cx('volume-btn')} onClick={toggleMute}>
                            {!isMuted ? <VolumeUpIcon /> : <VolumeMute />}
                        </button>

                        {showVolumeSlider && (
                            <div className={cx('wrapper-input')}>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    step="1"
                                    value={volume}
                                    className={cx('volume-slider')}
                                    onChange={handleVolumeChange}
                                />
                            </div>
                        )}
                    </div>
                    <button className={cx('menu-btn')}>
                        <MenuIcon />
                    </button>
                </div>
                <div className={cx('video-desc')}>
                    <h2 className={cx('nickname')}>{data.nickname}</h2>
                    <div className={cx('desc')}>
                        <p className={cx('desc-text')}>{data.popular_video.description}</p>
                        <button className={cx('desc-btn')}>more</button>
                    </div>

                    {data.popular_video.music && (
                        <span className={cx('music')}>
                            <FontAwesomeIcon icon={faMusic} className={cx('music-icon')} />
                            <p className={cx('music-name')}>{data.popular_video.music}</p>
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Video;
