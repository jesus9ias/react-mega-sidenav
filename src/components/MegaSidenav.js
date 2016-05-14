import React, {Component} from 'react';
import SidenavItem from './SidenavItem';

export default class MegaSidenav extends Component{
  render() {
    return (
      <div className="megaSidenav">
        <div className="megaSidenav-itemList">
          {
            this.props.items.map((item, i) => {
              return <SidenavItem key={i}>{item}</SidenavItem>
            })
          }
        </div>
        <div className="megaSidenav-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
