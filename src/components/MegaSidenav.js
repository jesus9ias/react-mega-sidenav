import React, {Component} from 'react'
import SidenavItem from './SidenavItem'
import backdropStyles from '../styles/backdrop'
import sidenavStyles from '../styles/sidenav'
import FaClose from 'react-icons/lib/fa/close';

class MegaSidenav extends Component{

  close(){
    this.props.close();
  }

  closeByBackdrop(){
    if(this.props.closeOnBackdrop == true){
      this.props.close();
    }
  }

  render(){
    if(this.props.open == true){
      return (
        <div className="megaSidenav open">
          <div className="megaSidenav-block" style={sidenavStyles(this.props.orientation)}>
            <h2>{this.props.title}</h2>
            {
              this.props.useClose == true? <a onClick={this.close.bind(this)}><FaClose /></a> : null
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
          {
            this.props.backdrop == true ? <div className="megaSidenav-backdrop" onClick={this.closeByBackdrop.bind(this)} style={backdropStyles()}></div> : null
          }
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
