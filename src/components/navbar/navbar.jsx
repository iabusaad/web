"use client"
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'

const links = [
  {
    id: "1",
    title:"Home",
    url:"/"
  },
  {
    id: "2",
    title:"Portfolio",
    url:"/portfolio"
  },
  {
    id: "3",
    title:"Blog",
    url:"/blog"
  },
  {
    id: "4",
    title:"About",
    url:"/about"
  },
  {
    id: "5",
    title:"Contact",
    url:"/contact"
  },
  {
    id: "6",
    title:"Dashboard",
    url:"/dashboard"
  },

]

const Navbar = () => {
  
  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.logo}>Lamamia</Link>
      <div className={styles.links}>
        <DarkModeToggle/>
        {links.map((links) => (
          <Link key={links.id} href={links.url} className={styles.link} >{links.title}</Link>
        ))}
        <button
        className={styles.logout}
          onClick={() => {
          console.log("logout")
        }}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar
