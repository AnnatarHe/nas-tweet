import React from 'react'
import dayjs from 'dayjs'
import { Neb, HttpRequest } from 'nebulas'
import NebPay from 'nebpay.js'

import TextField from 'material-ui/TextField';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Snackbar from 'material-ui/Snackbar';
import Slide from 'material-ui/transitions/Slide';
import AddIcon from '@material-ui/icons/Add';
import Typography from 'material-ui/Typography';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import { CONTRACT_ADDRESS, NAS_NET_URL } from '../../constant'
import Loading from './Loading'
import SongInfo from './SongInfo'
import styles from './Search.css'
import SongForm from './SongForm'

const nebPay = new NebPay()
const neb = new Neb()
neb.setRequest(new HttpRequest("https://testnet.nebulas.io"));

class Search extends React.PureComponent {

  state = {
    searchText: '',
    song: null,
    loading: false,
    adding: false,
    alertMsg: '',
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
    this.setState({ loading: true })
    this.serialNumber = nebPay.call(CONTRACT_ADDRESS, 0, 'get', `["${this.state.searchText}"]`, {
      callback: NAS_NET_URL,
      listener: (res) => {
        console.log(res)
        this.listener(res.txhash)
      }
    })
  }

  listener = (txhash) => {
    neb.api.getTransactionReceipt(txhash, function (err, resp) {
      console.log(resp);
      
  });
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
    nebPay.queryPayInfo(this.serialNumber)
      .then(resp => {
        const data = JSON.parse(resp)
        if (data.code !== 0) {
          this.setState({ alertMsg: data.msg })
        }
      }).catch(e => {
        console.error(e)
      })
  }
  onAdd = (data) => {
    const args = Object.values(data).reduce((result, x) => {
      result.push(x)
      return result
    }, [])
    const argsString = JSON.stringify(args)

    this.setState({ loading: true })
    this.serialNumber = nebPay.call(CONTRACT_ADDRESS, 0, 'get', argsString, {
      callback: NAS_NET_URL
    })
  }

  render() {
    const { searchText, song, loading, adding, alertMsg } = this.state
    console.log(alertMsg)
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
        <Snackbar
          open={alertMsg !== ''}
          onClose={() => { this.setState({ showAlert: '' })}}
          TransitionComponent={(p) => <Slide direction="up" {...p} />}
          autoHideDuration={3000}
          message={alertMsg}
        />
      </div>
    )
  }
}

export default Search
