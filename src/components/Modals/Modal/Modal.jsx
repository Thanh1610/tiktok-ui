import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect, useCallback } from 'react';

import ModalBase from '../ModalBase';
import { useDebounce } from '@/hooks';
import AccountItem from '@/components/AccountItem';
import * as searchService from '@/apiServices/searchService';

const searchSuggestions = [
    { text: 'công nghệ ai là gì', isTrending: true },
    { text: 'Lửng Lơ Remix', isTrending: false },
    { text: 'ronaldo sút xa 40m reaction', isTrending: false },
    { text: 'Drama Bắc Giang Và Bắc Ninh Sáp Nhập Gây Sốt', isTrending: true },
    { text: 'hương tịt phốt dev nguyễn', isTrending: false },
    { text: 'Bắc Bling Lên Top 1 Youtube Toàn Cầu', isTrending: true },
    { text: 'javascript', isTrending: false },
    { text: 'Phạm Thoại Đã Chính Thức Bị Cắt Sóng', isTrending: false },
    { text: 'công nghệ ai là gì', isTrending: true },
    { text: 'Lửng Lơ Remix', isTrending: false },
    { text: 'ronaldo sút xa 40m reaction', isTrending: false },
    { text: 'Drama Bắc Giang Và Bắc Ninh Sáp Nhập Gây Sốt', isTrending: true },
    { text: 'hương tịt phốt dev nguyễn', isTrending: false },
    { text: 'Bắc Bling Lên Top 1 Youtube Toàn Cầu', isTrending: true },
    { text: 'javascript', isTrending: false },
    { text: 'Phạm Thoại Đã Chính Thức Bị Cắt Sóng', isTrending: false },
];

const cx = classNames.bind(styles);

function Modal({ onClose }) {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState(sessionStorage.getItem('lastSearch') || '');
    const [loading, setLoading] = useState(false);
    const searchRef = useRef();
    const debounced = useDebounce(searchValue, 500);

    const handleClearClick = useCallback(() => {
        setSearchValue('');
        setSearchResult([]);
        searchRef.current.focus();
    }, []);

    const handleChange = useCallback((e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    }, []);

    useEffect(() => {
        sessionStorage.setItem('lastSearch', searchValue);
    }, [searchValue]);

    useEffect(() => {
        if (searchRef.current) {
            searchRef.current.focus();
        }
    }, []);

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchService.search(debounced);
            setSearchResult(result);

            setLoading(false);
        };

        fetchApi(false);

        setLoading(true);
    }, [debounced]);

    return (
        <ModalBase title="Search" onClose={onClose}>
            <div className={cx('wrapper')}>
                <div className={cx('search')}>
                    <input
                        ref={searchRef}
                        value={searchValue}
                        className={cx('search-input')}
                        placeholder="Search"
                        onChange={handleChange}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClearClick}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                </div>
            </div>

            <div className={cx('search-list')}>
                <div className={cx('title')}>You may like</div>
                {searchResult.length > 0 ? (
                    <>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} onClose={onClose} />
                        ))}
                    </>
                ) : (
                    <>
                        {searchSuggestions.map((item, index) => (
                            <li key={index} className={cx('item', { trending: item.isTrending })}>
                                <h4 className={cx('item-text')}>{item.text}</h4>
                            </li>
                        ))}
                    </>
                )}
            </div>
        </ModalBase>
    );
}

export default Modal;
