import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import { useEffect, useRef, useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Navbar({ className, categories = [] }) {
    const [active, setActive] = useState(categories[0] || '');
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);
    const scrollRef = useRef();

    const checkScroll = useCallback(() => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setShowLeft(scrollLeft > 0);
            setShowRight(scrollLeft + clientWidth < scrollWidth);
        }
    }, []);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.2;

            scrollRef.current.scrollTo({
                left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: 'smooth',
            });

            setTimeout(checkScroll, 300);
        }
    };

    useEffect(() => {
        const listElement = scrollRef.current;

        if (!listElement) return;

        checkScroll();
        listElement.addEventListener('scroll', checkScroll);

        return () => listElement.removeEventListener('scroll', checkScroll);
    }, [checkScroll]);

    return (
        <div className={cx('wrapper', className)}>
            {showLeft && (
                <button className={cx('scroll-btn', 'left')} onClick={() => scroll('left')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faChevronLeft} />
                </button>
            )}
            <div className={cx('list')} ref={scrollRef}>
                {categories.map((category) => (
                    <button
                        key={category}
                        className={cx('item', { active: active === category })}
                        onClick={() => setActive(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {showRight && (
                <button className={cx('scroll-btn', 'right')} onClick={() => scroll('right')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faChevronRight} />
                </button>
            )}
        </div>
    );
}

export default Navbar;
