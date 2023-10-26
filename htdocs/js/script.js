window.onload = function() {

  setTimeout(function () {
   let loader = document.querySelector('.loader');
   loader.parentNode.removeChild(loader);
  }, 50);


  function autoPlayYouTubeModal() {
    let triggerOpen = document.querySelectorAll('[data-tagVideo]');
    triggerOpen.forEach(function(element, key){
    	if(element) {
          let theModal = element.getAttribute("data-bs-target");
          let videoSRC = element.getAttribute("data-tagVideo");
          let videoSRCauto = videoSRC + "?autoplay=1";
    
          element.addEventListener('click', function() {
            document.querySelector(theModal + ' iframe').setAttribute('src', videoSRCauto);
          });
          document.querySelector(theModal + ' button.btn-close').addEventListener('click', function() {
            document.querySelector(theModal + ' iframe').setAttribute('src', '');
          });
        }
    });
  }

  document.querySelector('#videoModal').addEventListener("hidden.bs.modal", function () {
    this.querySelector('iframe').setAttribute('src', '');
   });

  autoPlayYouTubeModal();

  

  function swiperInit(el, wrap) {
    new Swiper(el, {
      loop: true,
      mousewheel: false,
      freeMode: true,
      navigation: {
        nextEl: wrap + " .swiper-button-next",
        prevEl: wrap + " .swiper-button-prev",
      },
      breakpoints: {
        320: {
          spaceBetween: 0,
          slidesPerView: 2,
        },
        992: {
          spaceBetween: 0,
          slidesPerView: 4,
        },
      },
    });
  }

  swiperInit('.mySwiper', '.projects');
  swiperInit('.mySwiper-2', '.partners');

  // menu 
  let hamburger = document.querySelector('.hamburger');
  let menuMobile = document.querySelector('.mobile-menu');
  let btnCloseMenu = document.querySelector('.mobile-menu .close-btn')
  let body = document.querySelector('body');

  
  hamburger.addEventListener('click', function() {
    if(this.classList.contains('is-active')) {
      closeMenu();
    } else {
      this.classList.add('is-active');
      menuMobile.classList.add('active');
      body.classList.add('mobile');
      createOverlay();
    }
  });

  body.addEventListener('click', function(e) {
    let eClassName = e.target.className;
    if(eClassName.length > 0) {
      eClassName = eClassName.split(' ')[0];
    } 
    
    if(eClassName == 'overlay') {
      closeMenu();
    }
  });

  btnCloseMenu.addEventListener('click', function() {
    closeMenu();
  });

  function closeMenu() {
    hamburger.classList.remove('is-active');
    menuMobile.classList.remove('active');
    body.classList.remove('mobile');
    detach(document.querySelector('.overlay'));
  }

  function detach(node) {
    return node.parentElement.removeChild(node);
  }

  function createOverlay() {
    let overlays = document.querySelectorAll('.overlay');
    if(overlays.length < 1) {
      let overlay = document.createElement("div");
      overlay.classList.add('overlay');
      body.appendChild(overlay);
    }
  }

  /* scroll */
  let btnsScroll = document.querySelectorAll('.scroll-down');
  if(btnsScroll) {
    for(let i=0;i<btnsScroll.length;i++) {
      btnsScroll[i].addEventListener('click', function(e) {
        e.preventDefault();
        let wrap = document.querySelector(this.getAttribute('href'));
        setTimeout(function() {
          wrap.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 300);
        
      });
    }
  }
  
  
 

}


