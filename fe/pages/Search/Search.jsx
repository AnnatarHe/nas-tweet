import React from 'react'
import dayjs from 'dayjs'

import TextField from 'material-ui/TextField';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import AddIcon from '@material-ui/icons/Add';
import Typography from 'material-ui/Typography';
import Dialog, { DialogTitle } from 'material-ui/Dialog';

import Loading from './Loading'
import SongInfo from './SongInfo'
import styles from './Search.css'
import SongForm from './SongForm'

class Search extends React.PureComponent {

  state = {
    searchText: '',
    song: null,
    loading: false,
    adding: false,
  }

  // componentDidMount() {
  //   setTimeout(()=> {
  //     this.setState({ song: {
  //       title: 'jakdf',
  //       author: 'annnatar',
  //       coverUrl: 'jsdfk',
  //       createdBy: 'Annatarhe',
  //       createdAt: Date.now()
  //     }})
  //   }, 0)
  // }

  doSearch = () => {
    console.log('doSearch')
    this.setState({ loading: true })
  }

  toTransaction = () => {
    console.log('to transaction')
    // window.open('newpage.html', '_blank');
  }

  onLoadingClose = () => {
    console.log('onClose')
  }

  onRefresh = () => {
    console.log('on refresh')
  }
  onAdd = (data) => {
    console.log('on add', data)
  }

  render() {
    const { searchText, song, loading, adding } = this.state
    return (
      <div className={styles.container}>
        <div className={styles.searchBox}>
          <TextField 
            value={searchText}
            onChange={e => { this.setState({ searchText: e.target.value.trim() })}}
            label="歌名"
            fullWidth
            className={styles.searchInput}
          />
          <div className={styles.search}>
            <Button variant="raised" color="primary" onClick={this.doSearch}>
              <Icon>search</Icon>
              Search
            </Button>
          </div>
        </div>

        {song && (!loading) && (
          <SongInfo song={song} onClick={this.toTransaction} />
        )}

        <Loading
          onClose={this.onLoadingClose}
          open={loading}
          onRefresh={this.onRefresh}
        />
        <Button
          variant="fab"
          color="primary"
          aria-label="add"
          className={styles.add}
          onClick={() => { this.setState({ adding: true })}}
        >
          <AddIcon />
        </Button>

        <SongForm
          open={adding} 
          onClose={() => {
            this.setState({ adding: false })
          }} 
          onSubmit={this.onAdd}
        />
      </div>
    )
  }
}

export default Search
