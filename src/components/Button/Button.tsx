import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';
import cn from 'classnames';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  action?: () => void;
  outlined?: boolean;
  classNames?: string
  //color: 'primary' | "secondary"
}

function Button({ children, classNames, action, outlined, ...rest }: IButtonProps) {
  const classes = cn(styles.button, {[styles.buttonOutline]: outlined}, classNames);
  return (
    <button className={classes} onClick={action} {...rest}>
      {children}
    </button>
  );
}

export default Button;
