import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Button({ to, href, onClick, primary, outline, small, medium, large, children, ...passProps }) {
    let comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        comp = Link;
    } else if (href) {
        comp = 'a';
        props.href = href;
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        medium,
        large,
    });
    return (
        <comp className={classes} {...props}>
            <span>{children}</span>
        </comp>
    );
}

export default Button;
