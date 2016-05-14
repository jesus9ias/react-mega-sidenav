import React, {Component} from 'react';

export default class SidenavItem extends Component{
  render() {
    return (<div className="megaSidenav-item">{this.props.children}</div>);
  }
}
