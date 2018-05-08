import React from 'react'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from 'material-ui/Drawer';
import styles from './TitleBar.css'

class TitleBar extends React.PureComponent {
  state = {
    drawerVisible: false
  }

  toggleDrawer = () => {
    this.setState({ drawerVisible: !this.state.drawerVisible })
  }

  render() {
    return (
      <div>
      <AppBar position="static" color='primary'>
        <Toolbar>
          <IconButton className={''} color="inherit" aria-label="Menu">
            <MenuIcon onClick={this.toggleDrawer} />
          </IconButton>
          <Typography variant="title" color="inherit" className={styles.titleText}>
            NAS 音乐版权认证系统
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer open={this.state.drawerVisible} onClose={this.toggleDrawer}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer}
            onKeyDown={this.toggleDrawer}
          >
            hello
          </div>
        </Drawer>
      </div>
    )
  }
}

export default TitleBar
