import React from 'react'
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Dialog, { DialogTitle } from 'material-ui/Dialog';

import styles from './Search.css'

const Loading = ({ onRefresh, ...others}) => (
  <Dialog aria-labelledby="simple-dialog-title" {...others}>
    <DialogTitle> 加载中...</DialogTitle>
      <Typography color="textSecondary" className={styles.padding}>
        由于使用区块链存取数据，所以很难立刻得到数据。需要将这次查询写入到区块链交易中，然后才能得到结果
      </Typography>
  </Dialog>
)

export default Loading
