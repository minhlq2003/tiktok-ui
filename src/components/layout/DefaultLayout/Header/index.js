import classNames from 'classnames/bind';
import styles from './Header.Module.scss';
import logo from '../../../images/header-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faEllipsisVertical, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import Tippy from '@tippyjs/react';
import { useState, useEffect } from 'react';
import { Wrapper as PopperWrapper } from '../../../Popper';
import AccountItem from '../../../AccountItem';
import Button from '../../../Button';
import Menu from '../../../Popper/Menu';

const cx = classNames.bind(styles);
function Header() {
    const [searchresult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult(['a', 'b', 'c']);
        }, 0);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={logo} alt="logo" height={40} width={130} />
                </div>
                <Tippy
                    interactive
                    render={(attrs) => (
                        <div className={cx('search result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}></h4>
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search account and video" spellCheck={false} />

                        <button className={cx('btn-clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <Tippy content="Tìm kiếm" placement="right">
                            <button className={cx('btn-search')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </Tippy>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button outline>Upload</Button>
                    <Button primary onClick={() => alert('clicked')}>
                        Log in
                    </Button>
                    <Menu>
                        <button className={cx('more-icon')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
