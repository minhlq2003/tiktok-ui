import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { publicRoutes } from '../../../../routes';
import Menu, { MenuItem } from './Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserGroup, faVideoCamera } from '@fortawesome/free-solid-svg-icons';
import SuggestAccount from './SuggestAccount';
import config from '../../../../config';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <FontAwesomeIcon className={cx('icon')} icon={faHome} />
                <MenuItem title="For you" to={config.routes.home} />
                <FontAwesomeIcon className={cx('icon')} icon={faUserGroup} />
                <MenuItem title="Following" to={config.routes.following} />
                <FontAwesomeIcon className={cx('icon')} icon={faVideoCamera} />
                <MenuItem title="LIVE" to={config.routes.live} />
            </Menu>
            <SuggestAccount label="Suggested accounts" />
            <SuggestAccount label="Following accounts" />
        </aside>
    );
}

export default Sidebar;
