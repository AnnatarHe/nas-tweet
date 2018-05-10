import React from 'react'
import { withRouter } from 'react-router'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

import Drawer from 'material-ui/Drawer';
import styles from './TitleBar.css'

@withRouter
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
          <Button color="inherit">AnnatarHe</Button>
        </Toolbar>
      </AppBar>
      <Drawer open={this.state.drawerVisible} onClose={this.toggleDrawer}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer}
            onKeyDown={this.toggleDrawer}
          >
            <List component="nav">
              <ListItem
                button
                onClick={() => {
                  this.props.router.push('/')
                }}
              >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Search" />
              </ListItem>
              <ListItem button onClick={() => { this.props.router.push('/about')}}>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
              <ListItemText primary="About" />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
    )
  }
}

export default TitleBar
