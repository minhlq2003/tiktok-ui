import classNames from 'classnames/bind';
import styles from './SuggestAccount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../../../Popper';
import AccountPreview from './AccountPreview';
import reactlogo from '../../../../images/react-logo.png';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <Tippy delay={[700, 0]} interactive placement="bottom" offset={[-20, 0]} render={renderPreview}>
            <div className={cx('account-item')}>
                <img className={cx('avatar')} src={reactlogo} alt="" />
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>quocminh</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('name')}>Quốc Minh</p>
                </div>
            </div>
        </Tippy>
    );
}

export default AccountItem;
