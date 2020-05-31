import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'


export default () => (
  <nav role="navigation" className={styles.nav}>
    <header className={styles.navigation}>
      <img className={styles.logo} src="/logo_blue.png"  />
      <div className={styles.menuWrap}>
        <a href="">联系我们</a>
        <a href="">联系我们</a>
        <a href="">联系我们</a>
        <a href="">联系我们</a>
      </div>
    </header>
  </nav>
)
