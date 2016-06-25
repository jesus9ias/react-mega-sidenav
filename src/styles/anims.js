export default function sidenavAnims(orientation){
  let anim = ``;
  if(orientation == 'left'){
    anim += `
    @-webkit-keyframes sidenavInAnim {
      from {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
      }
      to {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
      }
    }

    @keyframes sidenavInAnim {
      from {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
      }
      to {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
      }
    }`;
  }
  if(orientation == 'right'){
    anim += `
    @-webkit-keyframes sidenavInAnim {
      from {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
      }
      to {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
      }
    }

    @keyframes sidenavInAnim {
      from {
        opacity: 0;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
      }
      to {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
      }
    }`;
  }
  if(orientation == 'top'){
    anim += `
    @-webkit-keyframes sidenavInAnim {
      from {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
      }
      to {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
      }
    }

    @keyframes sidenavInAnim {
      from {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
      }
      to {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
      }
    }`;
  }
  if(orientation == 'bottom'){
    anim += `
    @-webkit-keyframes sidenavInAnim {
      from {
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
      }
      to {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
      }
    }

    @keyframes sidenavInAnim {
      from {
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
      }
      to {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
      }
    }`;
  }
  if(orientation == 'dialog'){
    anim += `
    @keyframes sidenavInAnim {
    	0% {
    		opacity: 0;
    		transform: scale(0.5);
      }
    	70% {
    		transform: scale(1.02);
      }
    	100% {
    		opacity: 1;
    		transform: scale(1);
      }
    }

    @-webkit-keyframes sidenavInAnim{
    	0% {
    		opacity: 0;
    		transform: scale(0.5);
      }
    	70% {
    		transform: scale(1.02);
      }
    	100% {
    		opacity: 1;
    		transform: scale(1);
      }
    }`;
  }
  return anim;
}
