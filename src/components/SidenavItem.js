import React, {Component} from 'react';

import InlineCss from 'react-inline-css'
import itemStyles from '../styles/items'

export default class SidenavItem extends Component{
  render() {
    return (
      <InlineCss stylesheet={itemStyles()}>
        <div className="megaSidenav-item">{this.props.children}</div>
      </InlineCss>
    );
  }
}
