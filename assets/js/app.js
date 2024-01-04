const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
   burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
   });
}

// Close Navbar Menu on Click Menu Links
document.querySelectorAll(".menu-link").forEach((link) => {
   link.addEventListener("click", () => {
      burgerMenu.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
   });
});

// Change Header Background on Scrolling
window.addEventListener("scroll", () => {
   if (this.scrollY >= 85) {
      headerMenu.classList.add("on-scroll");
   } else {
      headerMenu.classList.remove("on-scroll");
   }
});

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
   if (window.innerWidth > 768) {
      if (navbarMenu.classList.contains("is-active")) {
         navbarMenu.classList.remove("is-active");
      }
   }
});

//scroll bar on top
document.addEventListener('DOMContentLoaded', function () {
    window.onscroll = function () {
        updateScrollBar();
    };
});

function updateScrollBar() {
    const scrollBar = document.querySelector('.scroll-bar');
    const scrollPosition = window.scrollY;
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const percentageScrolled = (scrollPosition / totalHeight) * 100;
    scrollBar.style.width = percentageScrolled + '%';
}


// products 
var cartCount = 0,
	 buy = $('.btn'),
	 span = $('.number'),
	 cart = $('.cart'),
	 quickview = $('.quickviewContainer'),
	 quickViewBtn = $('.quickview'),
	 close = $('.quickviewContainer .close'),
	 minicart = [],
	 totalPrice = [],
	 miniCartPrice;

buy.on('click', addToCart);
quickViewBtn.on('click', quickView);
cart.on('click', showMiniCart);
close.on('click', function(){
	quickview.removeClass('active');
});

function quickView() {
	var description = $(this).parent().find('.description').text(),
		 header = $(this).parent().find('.header').text(),
		 price = $(this).find('.price'),
		 quickViewHeader = $('.quickviewContainer .headline'),
		 quickViewDescription = $('.quickviewContainer .description');
	clearTimeout(timeQuick);
		if(quickview.hasClass('active')){
			quickview.removeClass('active');
			var timeQuick = setTimeout(function(){
				quickview.addClass('active');
			}, 300);
		} else{
			quickview.addClass('active');
		}
	
	quickViewHeader.text(header);
	quickViewDescription.text(description);
}

function showMiniCart() {
	$('.mini').toggleClass('visible');
}

function addToCart() {
	var self = $(this),
		 productName = $(this).parent().find('.header').text(),
		 miniCartNames = $('.products'),
		 names = $('.names'),
		 price = $(this).parent().find('.price').text(),
		 priceInt = parseInt(price);
	
	totalPrice.push(priceInt);
	miniCartPrice = totalPrice.reduce(function(a,b){  return a+b });
	$('.miniprice').text('Total amount: ' + miniCartPrice + ",-");
	minicart.push(productName);
	lastProduct = minicart[minicart.length - 1];
	miniCartNames.text('Your cart lines: ');
	names.append('<p>' + lastProduct + '</p>');
	
	cartCount++;
	span.text(cartCount);
	clearTimeout(time);
	if(span.hasClass('update')){
		span.removeClass('update');
		span.addClass('updateQuantity');
		var time = setTimeout(function(){
			span.removeClass('updateQuantity');
			span.addClass('update');
		}, 700);
	} else{
		span.addClass('update');
	}
	if (cartCount == 1){
		cart.toggleClass('icon-basket icon-basket-loaded');
	}
	
	$(this).addClass('ok');
	var timeOk = setTimeout(function(){
		self.removeClass('ok');
	}, 1000);
}


// preloader function
document.addEventListener("DOMContentLoaded", function() {
    // Display the preloader
    var preloader = document.querySelector(".preloader");
    preloader.style.display = "flex";

    setTimeout(function() {
        preloader.style.display = "none";
    }, 1000); 
});


// logo carousel 
 // Get the container and images
 const container = document.querySelector('.continuous-slide-images');
 const images = document.querySelectorAll('.logo');

 // Calculate the total width of images
 const totalWidth = images.length * images[0].offsetWidth;

 // Clone the images and append them to the container
 images.forEach(image => {
   const clone = image.cloneNode(true);
   container.appendChild(clone);
 });

 container.style.width = totalWidth + 'px';

 // Animation function
 function startContinuousSlide() {
   container.style.transition = 'transform 10s linear infinite'; 
   container.style.transform = 'translateX(' + -totalWidth + 'px)';
 }

 // Start the continuous slide after a delay
 setTimeout(startContinuousSlide, 100);

 // Reset the transition and transform properties to restart the loop
 container.addEventListener('transitionend', function () {
   container.style.transition = 'none';
   container.style.transform = 'translateX(0)';
   setTimeout(startContinuousSlide, 100);
 });


 let productsView = document.querySelectorAll('.product')

 productsView.forEach((prod, index) => {
    prod.setAttribute('data-aos', 'fade-up');

    prod.setAttribute('data-aos-delay', `${100 * index}`);
});

let additionalSection = document.querySelectorAll('.fade-down')

additionalSection.forEach((prod, index) => {
    prod.setAttribute('data-aos', 'fade-up-right');

    prod.setAttribute('data-aos-delay', `${100 * index}`);
});

(function($) { // Begin jQuery
	$(function() { // DOM ready
	  // If a link has a dropdown, add sub menu toggle.
	  $('nav ul li a:not(:only-child)').click(function(e) {
		$(this).siblings('.nav-dropdown').toggle();
		// Close one dropdown when selecting another
		$('.nav-dropdown').not($(this).siblings()).hide();
		e.stopPropagation();
	  });
	  // Clicking away from dropdown will remove the dropdown class
	  $('html').click(function() {
		$('.nav-dropdown').hide();
	  });
	  // Toggle open and close nav styles on click
	  $('#nav-toggle').click(function() {
		$('nav ul').slideToggle();
	  });
	  // Hamburger to X toggle
	  $('#nav-toggle').on('click', function() {
		this.classList.toggle('active');
	  });
	}); // end DOM ready
  })(jQuery); // end jQuery