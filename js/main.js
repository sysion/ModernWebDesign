(function(window){

  var toggle_menu_open = document.getElementsByClassName('toggle-menu-open')[0];
  var toggle_menu_close = document.getElementsByClassName('toggle-menu-close')[0];
  var nav = document.getElementById('nav');
  var nav_open = false;

  toggle_menu_open.addEventListener("click", function(e){
    e.preventDefault();
    navSlideIn();
  });

  toggle_menu_close.addEventListener("click", function(e){
    e.preventDefault();
    navSlideOut();
  });

  function navSlideIn(){
    //nav.style.width = "85%";

    if (!nav.classList.contains('nav-width')){
      nav.classList.add('nav-width');
      nav_open = true;
    } 
  }

  function navSlideOut(){
    //nav.style.width = "0";
    nav.classList.remove('nav-width');
    nav_open = false;
  }

  // watchResize method
  // https://gist.github.com/aarongustafson/4157402
  window.watchResize = function(callback){
    var resizing;
    callback.size = 0;
    function done(){
      var curr_size = window.innerWidth;
      clearTimeout(resizing);
      resizing = null;
      // only run on a true resize
      if (callback.size != curr_size){
        callback();
        callback.size = curr_size;
      }
    }
    window.addEventListener('resize', function(){
      if (resizing){
        clearTimeout(resizing);
        resizing = null;
      }
      resizing = setTimeout(done, 50);
    });
    // init
    callback();
  };

  // Get the active Media Query as defined in the CSS
  // Use the following format:
  // #getActiveMQ-watcher { font-family: "default"; }
  // @media only screen and (min-width:20em){ #getActiveMQ-watcher { font-family: "small"; } }
  // etc.
  window.getActiveMQ = function(){
    // Build the watcher
    var $watcher = document.createElement('div'),
      // alias getComputedStyle
      computed = window.getComputedStyle,
      // Regexp for removing quotes
      re = /['"]/g;
    
    // set upt the watcher and add it to the DOM
    $watcher.setAttribute('id', 'getActiveMQ-watcher');
    $watcher.style.display = 'none';
    document.body.appendChild($watcher);
    
    // We’ll redefine this method the first time it’s run
    // For old IE
    if ('currentStyle' in $watcher){
      window.getActiveMQ = function(){
        return $watcher.currentStyle['fontFamily'].replace(re, '');
      };
    }
    // For modern browsers
    else if (computed){
      window.getActiveMQ = function(){
        return computed($watcher, null).getPropertyValue('font-family').replace(re, '');
      };
    }
    // For everything else
    else{
      window.getActiveMQ = function(){
        return 'unknown';
      };
    }
    return window.getActiveMQ();
  };

  // ensure nav displays with 100% width if the browser window is "large"
  window.watchResize(function(){
    var current_MQ = window.getActiveMQ();

    if (current_MQ == 'large' && nav_open){
      navSlideOut();
    }

  });

  // serviceWorker code
  if (! navigator.serviceWorker.controller) {   //https or localhost required for serviceWorker
      if (navigator && navigator.serviceWorker) {
        window.addEventListener('load', () => {
          //navigator.serviceWorker.register('../sw.js').then((registration) => {
          navigator.serviceWorker.register('../ModernWebDesign/sw.js', {scope: '/ModernWebDesign/'}).then((registration) => {
            //registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
          }, function(err) {
            //registration failed
            console.log('ServiceWorker registration failed: ', err);
          });
        });
      }
  }

}(this));