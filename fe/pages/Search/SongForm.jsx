import React from 'react'

import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

import styles from './Search.css'

class SongForm extends React.PureComponent {

  state = {
    title: '', author: '', url: '', coverUrl: ''
  }

  onAdd = () => {
    const {
      title, url, coverUrl, author
    } = this.state

    this.props.onSubmit({
      title,
      author,
      url,
      createdAt: Date.now(),
      coverUrl
    })
  }

  render() {
    const { ...others } = this.props
    const {
      title, url, coverUrl, author
    } = this.state
    return (
      <Dialog aria-labelledby="form" {...others}>
        <DialogTitle> 添加歌曲 </DialogTitle>
        <DialogContent>
          <DialogContentText>
            填入必要信息，即可加入区块链，不被篡改。
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="歌名"
            type="text"
            fullWidth
            value={title}
            onChange={e => { this.setState({ title: e.target.value.trim()})}}
          />
          <TextField
            autoFocus
            margin="dense"
            label="歌手"
            type="text"
            fullWidth
            value={author}
            onChange={e => { this.setState({ author: e.target.value.trim()})}}
          />
          <TextField
            autoFocus
            margin="dense"
            label="歌曲链接"
            type="url"
            fullWidth
            value={url}
            onChange={e => { this.setState({ url: e.target.value.trim()})}}
          />
          <TextField
            autoFocus
            margin="dense"
            label="专辑图片"
            type="url"
            fullWidth
            value={coverUrl}
            onChange={e => { this.setState({ coverUrl: e.target.value.trim()})}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onClose} color="primary">
            取消
          </Button>
          <Button onClick={this.onAdd} color="primary">
            加入
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}
export default SongForm
