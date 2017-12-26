import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Menu from 'material-ui/svg-icons/navigation/menu'
import {Link} from 'react-router-dom'

class NavDrawer extends Component {
  state= {
    open: true
  }

  toggle = () => {
    this.setState((prevState, props) => {
      return {
        open: !prevState.open
      }
    })
  }

  render() {
    return (
      <div>
        <FloatingActionButton
        onClick={this.toggle}
        >
          <Menu/>
        </FloatingActionButton>
        <Drawer open={this.state.open}>
          <div style={{
            height: '200px',
            width: '100%',
            backgroundColor: 'salmon'
          }}>LoginContainer</div>
          <Divider/>
          <Link to={'/'}>
            <MenuItem
              primaryText={'Play'}
              onClick={this.toggle}/>
          </Link>
          <Link to={'/profile'}>
            <MenuItem
              primaryText={'Profile'}
              onClick={this.toggle}/>
          </Link>
        </Drawer>
      </div>
    );
  }
}

export default NavDrawer;
