import React from 'react'
import dayjs from 'dayjs'

import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import styles from './Search.css'

const SongInfo = ({ song, onClick }) => (
  <Card className={styles.card}>
    <CardContent className={styles.cardContent}>
      <CardMedia
        className={styles.coverUrl}
        image={song.coverUrl}
        title={styles.title}
      />
      <Typography variant="headline" component="h2">
        {song.title}
      </Typography>
      <Typography color="textSecondary">
        歌手: {song.author}
      </Typography>
      <Typography component="p">
        该条目由
        <strong className={styles.highlightInline}>{song.createdBy}</strong>
        于 
        <strong className={styles.highlightInline}>{dayjs(song.createdAt).format('YYYY MM-DD HH:mm:ss')}</strong>
        创建
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={onClick}>查看区块链交易 Hash</Button>
    </CardActions>
  </Card>
)

export default SongInfo
