import sidenavAnims from './anims.js';

export default function sidenavStyles(orientation){
  let style = `
    & .megaSidenav-block {
      display: flex;
      flex-direction: column;
      position: fixed;
      background: white;
      z-index: 1000;
    }

    & .megaSidenav.open .megaSidenav-block{
      -webkit-animation: 0.3s sidenavInAnim;
		  animation: 0.3s sidenavInAnim;
    }

    & .megaSidenav.close .megaSidenav-block{
      -webkit-animation: 0.3s fadeOutLeft;
		  animation: 0.3s fadeOutLeft;
    }

    & .megaSidenav-head{
      display: flex;
      flex-direction: row;
    }

    & .megaSidenav-head .megaSidenav-title{
      margin: 0px;
      padding: 5px;
      flex: 1;
    }

    & .megaSidenav-head .megaSidenav-close{
      margin: 0px;
      padding: 5px;
      line-height: 30px;
    }

    & .megaSidenav-body{
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      flex: 1;
    }
  `;
  if(orientation == 'left'){
    style += `& .megaSidenav-block {
        top: 0px;
        left: 0px;
        width: 300px;
        height: 100%;
      }`;
  }
  if(orientation == 'right'){
    style += `& .megaSidenav-block {
        top: 0px;
        right: 0px;
        width: 300px;
        height: 100%;
      }`;
  }
  if(orientation == 'top'){
    style += `& .megaSidenav-block {
        top: 0px;
        left: 0px;
        width: 100%;
        height: 300px;
      }`;
  }
  if(orientation == 'bottom'){
    style += `& .megaSidenav-block {
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 300px;
      }`;
  }
  if(orientation == 'dialog'){
    style += `& .megaSidenav-block {
        top: calc(50% - 150px);
        left: calc(50% - 150px);
        width: 300px;
        height: 300px;
      }`;
  }

  style += sidenavAnims(orientation);

  return style;
}
