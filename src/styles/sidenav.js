import sidenavAnims from './anims.js';

export default function sidenavStyles(orientation){
  let style = `
    & .megaSidenav-block {
      position: fixed;
      background: white;
      z-index: 1000;
      overflow-y: auto;
    }

    & .megaSidenav.open .megaSidenav-block{
      -webkit-animation: 0.3s sidenavInAnim;
		  animation: 0.3s sidenavInAnim;
    }

    & .megaSidenav.close .megaSidenav-block{
      -webkit-animation: 0.3s fadeOutLeft;
		  animation: 0.3s fadeOutLeft;
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
