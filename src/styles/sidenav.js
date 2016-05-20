export default function sidenavStyles(orientation){
  if(orientation == 'left'){
    return `& .megaSidenav-block {
        position: fixed;
        top: 0px;
        left: 0px;
        width: 300px;
        height: 100%;
        background: white;
        z-index: 1000;
        overflow-y: auto;
      }`;
  }
  if(orientation == 'right'){
    return `& .megaSidenav-block {
        position: fixed;
        top: 0px;
        right: 0px;
        width: 300px;
        height: 100%;
        background: white;
        z-index: 1000;
        overflow-y: auto;
      }`;
  }
  if(orientation == 'top'){
    return `& .megaSidenav-block {
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 300px;
        background: white;
        z-index: 1000;
        overflow-y: auto;
      }`;
  }
  if(orientation == 'bottom'){
    return `& .megaSidenav-block {
        position: fixed;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 300px;
        background: white;
        z-index: 1000;
        overflow-y: auto;
      }`;
  }
  if(orientation == 'dialog'){
    return `& .megaSidenav-block {
        position: fixed;
        top: calc(50% - 150px);
        left: calc(50% - 150px);
        width: 300px;
        height: 300px;
        background: white;
        z-index: 1000;
        overflow-y: auto;
      }`;
  }
}
