import React from 'react'
import styles from './Layoutstyles.module.css'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
    <header className={styles.header}> AXIOS CRUD </header><br/>
    <aside className={styles.aside} > 
    <Link to='/'>HOME</Link> <br/><br/>
    <Link to='/products'>PRODUCTS</Link><br/>
    </aside><br/>
    <div className={styles.content}>
    <Outlet />
    </div>
    {/* <footer className={styles.footer}> THANK YOU </footer> */}
    </div>
  )
}

export default Layout;