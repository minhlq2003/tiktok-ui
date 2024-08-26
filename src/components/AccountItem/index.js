import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img src="" alt="avatar" className={cx('avatar')} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span className={cx('name')}>Name</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </h4>
                <span className={cx('username')}>@username</span>
            </div>
        </div>
    );
}

export default AccountItem;
