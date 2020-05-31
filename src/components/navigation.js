import React from 'react'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation" className={styles.nav}>
    <header className={styles.navigation}>
      <a href="https://www.bjsoftware.org/develop/">
        <img className={styles.logo} src="/logo_blue.png" />
      </a>
      <div className={styles.menuWrap}>
        <a href="https://www.bjsoftware.org/develop/">软件开发</a>
        <a href="https://www.bjsoftware.org/promotion/">品牌营销</a>
        <a href="https://www.bjsoftware.org/template/">案例展示</a>
        <a href="https://blog.bjsoftware.org/blog">博客</a>
        <a href="https://www.bjsoftware.org/contact/">联系我们</a>
      </div>
    </header>
  </nav>
)
