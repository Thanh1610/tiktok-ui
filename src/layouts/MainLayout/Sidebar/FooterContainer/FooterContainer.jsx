import styles from './FooterContainer.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

const cx = classNames.bind(styles);

function FooterContainer() {
    const [openSection, setOpenSection] = useState(null);

    const handleToggle = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <footer className={cx('wrapper')}>
            {/* company */}
            <div className={cx('section')}>
                <h4 className={cx('title')} onClick={() => handleToggle('company')}>
                    Company
                </h4>
                {openSection === 'company' && (
                    <div className={cx('dropdown')}>
                        <a className={cx('dropdown-link')} href="https://www.tiktok.com/about?lang=en" target="_blank">
                            About
                        </a>
                        <a className={cx('dropdown-link')} href="https://newsroom.tiktok.com/en-us/" target="_blank">
                            Newsroom
                        </a>
                        <a
                            className={cx('dropdown-link')}
                            href="https://www.tiktok.com/contact?lang=en"
                            target="_blank"
                        >
                            Contact
                        </a>
                        <a className={cx('dropdown-link')} href="https://lifeattiktok.com/" target="_blank">
                            Careers
                        </a>
                    </div>
                )}
            </div>

            {/* program */}
            <div className={cx('section')}>
                <h4 className={cx('title')} onClick={() => handleToggle('program')}>
                    Program
                </h4>
                {openSection === 'program' && (
                    <div className={cx('dropdown')}>
                        <a className={cx('dropdown-link')} href="#">
                            TikTok for Good
                        </a>
                        <a className={cx('dropdown-link')} href="#">
                            Advertise
                        </a>
                        <a className={cx('dropdown-link')} href="#">
                            TikTok LIVE Creator Networks
                        </a>
                        <a className={cx('dropdown-link')} href="#">
                            Developers
                        </a>
                        <a className={cx('dropdown-link')} href="#">
                            Transparency
                        </a>
                        <a className={cx('dropdown-link')} href="#">
                            TikTok Rewards
                        </a>
                        <a className={cx('dropdown-link')} href="#">
                            TikTok Embeds
                        </a>
                    </div>
                )}
            </div>

            {/* Terms & Policies */}
            <div className={cx('section')}>
                <h4 className={cx('title')} onClick={() => handleToggle('terms')}>
                    Terms & Policies
                </h4>
                {openSection === 'terms' && (
                    <div className={cx('dropdown')}>
                        <a className={cx('dropdown-link')} href="#">
                            Help
                        </a>
                        <a className={cx('dropdown-link')} href="#">
                            Safety
                        </a>
                        <a className={cx('dropdown-link')} href="#">
                            Terms
                        </a>
                        <a className={cx('dropdown-link')} href="#">
                            Privacy Policy
                        </a>
                        <a className={cx('dropdown-link')} href="#">
                            Accessibility
                        </a>
                        <a className={cx('dropdown-link')} href="#">
                            Privacy Center
                        </a>
                        <a className={cx('dropdown-link')} href="#">
                            Creator Academy
                        </a>
                        <a className={cx('dropdown-link')} href="#">
                            Community Guidelines
                        </a>
                    </div>
                )}
            </div>
            <span className={cx('copyright')}>&copy; 2025 TikTok</span>
        </footer>
    );
}

export default FooterContainer;
