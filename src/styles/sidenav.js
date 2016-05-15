export default function sidenavStyles(orientation){
  if(orientation == 'left'){
    return {
      "position": "fixed",
      "top": "0px",
      "left": "0px",
      "width": "300px",
      "height": "100%",
      "background": "white",
      "zIndex": 1000,
      "overflowY": "auto"
    }
  }
  if(orientation == 'right'){
    return {
      "position": "fixed",
      "top": "0px",
      "right": "0px",
      "width": "300px",
      "height": "100%",
      "background": "white",
      "zIndex": 1000,
      "overflowY": "auto"
    }
  }
  if(orientation == 'top'){
    return {
      "position": "fixed",
      "top": "0px",
      "left": "0px",
      "width": "100%",
      "height": "300px",
      "background": "white",
      "zIndex": 1000,
      "overflowY": "auto"
    }
  }
  if(orientation == 'bottom'){
    return {
      "position": "fixed",
      "bottom": "0px",
      "left": "0px",
      "width": "100%",
      "height": "300px",
      "background": "white",
      "zIndex": 1000,
      "overflowY": "auto"
    }
  }
  if(orientation == 'dialog'){
    return {
      "position": "fixed",
      "top": "calc(50% - 150px)",
      "left": "calc(50% - 150px)",
      "width": "300px",
      "height": "300px",
      "background": "white",
      "zIndex": 1000,
      "overflowY": "auto"
    }
  }

}
