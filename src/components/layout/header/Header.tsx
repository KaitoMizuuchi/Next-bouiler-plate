import React from 'react';
import Link from 'next/link';

import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header_nav}>
        <ul className={styles.header_nav_list}>
          <li className={styles.header_nav_item}>
            <Link href="/" className={styles.header_nav_link}>
              Home
            </Link>
          </li>
          <li className={styles.header_nav_item}>
            <Link href="/about" className={styles.header_nav_link}>
              About
            </Link>
          </li>
          <li className={styles.header_nav_item}>
            <Link href="/calc" className={styles.header_nav_link}>
              Calc
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
