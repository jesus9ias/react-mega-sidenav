import React, {Component} from 'react';

export default class SidenavItem extends Component{
  render() {
    return (<div>{this.props.children}</div>);
  }
}
