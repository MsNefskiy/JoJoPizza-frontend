import styles from './Header.module.scss';
import stylesNavItem from '../NavItem/NavItem.module.scss';
import { Link } from 'react-router-dom';
import CartButton from '../CartButton/CartButton';
import NavItem from '../NavItem/NavItem';
import { navItems } from '../../core/constants/navItems';
import { useState } from 'react';
import cn from 'classnames';

const home = navItems.Home;
const aboutUs = navItems.AboutUs;

function Header() {
//   const [selected, setSelected] = useState(0);

//   const classes = cn({ [styles.itemSelected]: selected === id });

//   const onClickLink = (id: number) => {
//     setSelected(id);

//   }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <NavItem name={home.text} path={home.url}/>
            </li>
            <li>
              <Link to="/">
                <div className={styles.logo}>
                  {/* <img width={38} src="" alt="logo" /> */}
                  <div>
                    <h1>JoJo Pizza</h1>
                    {/* <p>Невероятно вкусная пицца</p> */}
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <NavItem name={aboutUs.text} path={aboutUs.url}/>
            </li>
          </ul>
        </nav>
        <CartButton />
      </div>
    </header>
  );
}

export default Header;
