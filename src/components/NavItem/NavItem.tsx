import { Link } from 'react-router-dom';
import styles from './NavItem.module.scss';
import cn from 'classnames';

interface NavItemProps {
  name: string;
  path: string;
  className?: string;
}

export default function NavItem({ name, path, className }: NavItemProps) {
  const classes = cn(styles.item, className);
  return (
    <Link to={path} className={classes}>
      {name}
    </Link>
  );
}
