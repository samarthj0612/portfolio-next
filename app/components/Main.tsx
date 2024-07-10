import React from 'react'
import styles from '@/styles/main.module.css'
import Image from 'next/image'
import MainImage from '@/app/assets/images/main-image.png'

const Main = () => {
  return (
    <div id='main-section' className={styles.container}>
      <div className={styles.content}>
        <div className={styles.banner_content}>
          <h3 className={styles.textUppercase}>Hello</h3>
          <h1 className={styles.textUppercase}>I am Samarth Jain</h1>
          <h5 className={styles.textUppercase}>Software Developer</h5>
          <div className="d-flex align-items-center">
            <a className={styles.primary_btn} href="#"><span>Hire Me</span></a>
            <a className={`${styles.primary_btn} ${styles.trBg}`} href="#"><span>Get CV</span></a>
          </div>
        </div>
      </div>
      <Image className={styles.image} src={MainImage} alt='Image' />
    </div>
  )
}

export default Main