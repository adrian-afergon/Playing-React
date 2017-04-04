import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onTouchTap` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
class AppBarExample extends Component {
  constructor() {
    super();
      this.state = {
        styles : {
          title: {
            cursor: 'pointer',
          },
      }
    }
  }

handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

render(){
  return(
    <AppBar
      title={<span style={this.state.styles.title}>Title</span>}
      onTitleTouchTap={this.handleTouchTap}
      iconElementLeft={<IconButton><NavigationClose /></IconButton>}
      iconElementRight={<div><FlatButton label="Save" /><FlatButton label="Save" /></div>}
    />
  );
}
}

export default AppBarExample;
