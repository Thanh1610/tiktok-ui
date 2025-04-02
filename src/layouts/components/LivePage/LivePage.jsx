import classNames from 'classnames/bind';
import styles from './LivePage.module.scss';
import Navbar from '@/components/Navbar';

const cx = classNames.bind(styles);

const categories = [
    'For You',
    'Following',
    'Gaming',
    'Lifestyle',
    'Garena Free Fire',
    'Mobile Legends: Bang Bang',
    'PUBG Mobile',
    'Roblox',
    'Grand Theft Auto V',
    'Minecraft',
    'Fortnite',
    'Call of Duty: Mobile',
    'Arena of Valor',
    'Call of Duty',
];
function LivePage() {
    return (
        <div className={cx('wrapper')}>
            <Navbar className={cx('navbar')} categories={categories} />
            <h2 className={cx('content')}>no data yet</h2>
        </div>
    );
}

export default LivePage;
