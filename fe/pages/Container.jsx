import React from 'react'
import TitleBar from '../components/TitleBar'
import NotSupport from '../components/NotSupport'
import styles from './Container.css'

const Container = ({ children }) => {
  return (
    <div className={styles.container}>
      <TitleBar />
      <div className={styles.content}>
        {children}
      </div>
      <NotSupport open={typeof webExtensionWallet === "undefined"} onClose={() => {}} />
    </div>
  )
}

export default Container
