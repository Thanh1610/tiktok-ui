import classNames from 'classnames/bind';
import styles from './Modals.module.scss';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

import Modal from './Modal/Modal';
import ModalSmall from './ModalSmall';
import MoreModal from './MoreModal';

const cx = classNames.bind(styles);

const MODAL_COMPONENTS = {
    search: Modal,
    more: MoreModal,
};

function Modals({ isOpen, onClose, type, onOpenModal }) {
    const [isClosing, setIsClosing] = useState(false);
    useEffect(() => {
        if (!isOpen) {
            setIsClosing(false);
            return;
        }
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsClosing(true);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        // Cleanup event
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            setIsClosing(true);
        }
    };

    const hansleAnimationEnd = () => {
        if (isClosing) {
            onClose();
        }
    };

    if (!isOpen || !MODAL_COMPONENTS[type]) return null;

    const ModalComponent = MODAL_COMPONENTS[type];

    return createPortal(
        <div
            className={cx('overlay', { closing: isClosing })}
            onClick={handleOverlayClick}
            onAnimationEnd={hansleAnimationEnd}
        >
            <div className={cx('wrapper')}>
                <ModalSmall onOpenModal={onOpenModal} onClose={onClose} type={type} />
                <ModalComponent onClose={onClose} />
            </div>
        </div>,
        document.body,
    );
}

export default Modals;
