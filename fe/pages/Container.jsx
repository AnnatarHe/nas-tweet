import React from 'react'
import TitleBar from '../components/TitleBar'

import styles from './Container.css'

const Container = ({ children }) => {
  return (
    <div className={styles.container}>
      <TitleBar />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default Container
