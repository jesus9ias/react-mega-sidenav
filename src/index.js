import React, {Component} from 'react';
import SidenavItem from './components/SidenavItem';

export default class MegaSidenav extends Component{
  render() {
    return (
      <div clasName="megaSidenav">
        <div>
          {
            this.props.items.map((item, i) => {
              return <SidenavItem key={i}>{item}</SidenavItem>
            })
          }
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
