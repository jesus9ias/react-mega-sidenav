import React, {Component} from 'react';

import InlineCss from 'react-inline-css'
import itemStyles from '../styles/items'

class SidenavItem extends Component{
  render() {
    return (
      <InlineCss stylesheet={itemStyles()}>
        <div className="megaSidenav-item" style={this.props.itemStyles}>{this.props.children}</div>
      </InlineCss>
    );
  }
}

SidenavItem.defaultProps = {
  itemStyles: {}
}

export default SidenavItem
