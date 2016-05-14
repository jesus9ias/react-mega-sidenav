import React, {Component} from 'react';
import SidenavItem from './SidenavItem';

class MegaSidenav extends Component{

  close(){
    this.props.close();
  }

  render(){
    if(this.props.open == true){
      return (
        <div className="megaSidenav open">
          <div className="megaSidenav-block">
            <h2>{this.props.title}</h2>
            {
              this.props.useClose == true? <a onClick={this.close.bind(this)}>X</a> : null
            }
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
          <div className="megaSidenav-backdrop"></div>
        </div>
      );
    }else{
      return (<div className="megaSidenav close"></div>)
    }
  }
}

MegaSidenav.defaultProps = {
  open: true,
  backdrop: true,
  items: [],
  fixed: true,
  orientation: 'left',
  useClose: true,
  closeOnBackdrop: true,
  title: '',
  toggleIcon: '',
}

export default MegaSidenav
