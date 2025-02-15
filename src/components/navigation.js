import React from 'react'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation" className={styles.nav}>
    <header className={styles.navigation}>
      <a href="https://bojiangsoftware.com/develop/">
        <img className={styles.logo} src="/head_logo.png" />
      </a>
      <div className={styles.menuWrap}>
        <a href="https://bojiangsoftware.com/develop/">软件开发</a>
        <a href="https://bojiangsoftware.com/promotion/">线上推广</a>
        <a href="https://bojiangsoftware.com/ecommerce/">北美电商</a>
        <a href="https://bojiangsoftware.com/template/">客户案例</a>
        <a href="https://bojiangsoftware.com/about">关于我们</a>
        <a href="https://bojiangsoftware.com/contact/">联系我们</a>
      </div>
    </header>
  </nav>
)
