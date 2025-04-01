/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';
import { VolumeUpIcon, VolumeMute, MenuIcon } from '@/components/Icons';
import MenuVideo from '@/components/MenuVideo';
import VideoSidebar from '../VideoSidebar';

const cx = classNames.bind(styles);

function Video({ data, isMuted, mute, volume, onVolumeChange }) {
    const [isPlaying, setIsPlaying] = useState(true);
    const [showPlayIcon, setShowPlayIcon] = useState(null);
    const [showVolumeSlider, setShowVolumeSlider] = useState(false);
    const [display, setDisplay] = useState(false);
    const videoRef = useRef();

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const updateProgress = () => {
            const percent = (video.currentTime / video.duration) * 100;
            setProgress(percent);
        };

        video.addEventListener('timeupdate', updateProgress);
        return () => video.removeEventListener('timeupdate', updateProgress);
    }, []);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    videoElement.play();
                } else {
                    videoElement.pause();
                    videoElement.currentTime = 0;
                }
            },
            { threshold: 0.5 },
        );

        observer.observe(videoElement);

        return () => {
            observer.unobserve(videoElement);
        };
    }, []);

    //tăng giảm âm
    const handleVolumeChange = (e) => {
        const newVolume = e.target.value;
        onVolumeChange(newVolume);
        if (videoRef.current) {
            videoRef.current.volume = newVolume / 100;
            if (newVolume > 0 && isMuted) {
                mute(false);
            }
        }
    };

    //play/pause
    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setShowPlayIcon('play');
            } else {
                videoRef.current.play();
                setShowPlayIcon('pause');
            }
            setIsPlaying(!isPlaying);

            // Ẩn icon sau 800ms
            setTimeout(() => setShowPlayIcon(null), 800);
        }
    };

    const handlePauseVideo = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };
    return (
        <div className={cx('video')}>
            <div className={cx('video-wrapper')}>
                <video
                    ref={videoRef}
                    className={cx('video-player')}
                    src={data.popular_video.file_url}
                    loop
                    autoPlay
                    muted={isMuted}
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
                        <button className={cx('volume-btn')} onClick={mute}>
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
                    <MenuVideo placement="right-end" offset={[0, 26]} style={{ background: '#fff' }}>
                        <button className={cx('menu-btn')}>
                            <MenuIcon />
                        </button>
                    </MenuVideo>
                </div>
                <div className={cx('video-desc')}>
                    <h2 className={cx('nickname')}>{data.nickname}</h2>
                    <div className={cx('desc')}>
                        <p className={cx('desc-text', { less: display })}>{data.popular_video.description}</p>
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

                    <div className={cx('progress-bar')}>
                        <div className={cx('progress')} style={{ width: `${progress}%` }} />
                    </div>
                </div>
            </div>
            <VideoSidebar data={data} onCommentsModal={handlePauseVideo} />
        </div>
    );
}

export default Video;
