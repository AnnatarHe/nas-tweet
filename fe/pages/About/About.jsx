import React from 'react'
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import styles from './About.css'

class About extends React.PureComponent {
  render() {
    return (
      <main className={styles.container}>
          <Paper elevation={4} className={styles.paper}>
          <Typography variant="headline" component="h1">
            NAS 音乐版权认证系统
          </Typography>
          <Typography component="h3">
            Author: AnnatarHe
          </Typography>
          <Typography component="p">
            基于 NAS 的音乐版权系统。可以记录在 NAS 区块链上，不可篡改，版权保护。
          </Typography>
        </Paper>
      </main>
    )
  }
}

export default About
