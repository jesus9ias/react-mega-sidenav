import React, {Component} from 'react'
import SidenavItem from './SidenavItem'

import FaClose from 'react-icons/lib/fa/close'

import InlineCss from 'react-inline-css'
import backdropStyles from '../styles/backdrop'
import sidenavStyles from '../styles/sidenav'

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
        <InlineCss stylesheet={sidenavStyles(this.props.orientation) + backdropStyles()}>
          <div className="megaSidenav open">
            <div className="megaSidenav-block">
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
              this.props.backdrop == true ? <div className="megaSidenav-backdrop" onClick={this.closeByBackdrop.bind(this)}></div> : null
            }
          </div>
        </InlineCss>
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
