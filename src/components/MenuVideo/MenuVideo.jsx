import classNames from 'classnames/bind';
import styles from './MenuVideo.module.scss';
import { ScrollIcon, CaptionIcon } from '@/components/Icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCrack, faFlag } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as WrapperPoper } from '@/components/Popper';

const cx = classNames.bind(styles);
function MenuVideo({ children, placement, offset, style }) {
    return (
        <Tippy
            interactive
            delay={[0, 300]}
            placement={placement}
            offset={offset}
            render={(attrs) => (
                <WrapperPoper style={style} {...attrs}>
                    <ul className={cx('menu-modal')} tabIndex="-1">
                        <li className={cx('menu-item')}>
                            <div className={cx('wrapper-icon')}>
                                <CaptionIcon className={cx('item-icon')} />
                            </div>
                            <span className={cx('item-text')}>Caption</span>
                        </li>
                        <li className={cx('menu-item')}>
                            <div className={cx('wrapper-icon')}>
                                <ScrollIcon className={cx('item-icon')} />
                            </div>
                            <span className={cx('item-text')}>Auto scroll</span>
                            <label className={cx('switch')}>
                                <input type="checkbox" className={cx('item-btn')} />
                                <div className={cx('slider')}></div>
                            </label>
                        </li>
                        <li className={cx('menu-item')}>
                            <div className={cx('wrapper-icon')}>
                                <FontAwesomeIcon icon={faHeartCrack} className={cx('item-icon')} />
                            </div>
                            <span className={cx('item-text')}>Not interested</span>
                        </li>
                        <li className={cx('menu-item')}>
                            <div className={cx('wrapper-icon')}>
                                <FontAwesomeIcon icon={faFlag} className={cx('item-icon')} />
                            </div>
                            <span className={cx('item-text')}>Report</span>
                        </li>
                    </ul>
                </WrapperPoper>
            )}
        >
            {children}
        </Tippy>
    );
}

export default MenuVideo;
