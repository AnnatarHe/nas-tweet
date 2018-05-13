import React from 'react'
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Dialog, { DialogTitle } from 'material-ui/Dialog';

import styles from './NotSupport.css'

const NotSupport = ({ ...others}) => (
  <Dialog aria-labelledby="simple-dialog-title" {...others}>
    <DialogTitle> 请下载插件 </DialogTitle>
      <Typography color="textSecondary" className={styles.padding}>
      NOTE: 请安装 <a target="_blank" href="https://github.com/ChengOrangeJu/WebExtensionWallet">WebExtensionWallet</a> 再使用 <strong>音乐版权链上确认系统</strong>
      </Typography>
  </Dialog>
)

export default NotSupport
