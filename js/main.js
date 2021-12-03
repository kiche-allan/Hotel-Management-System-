jQuery(document).ready(function($){
	//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
	var MqL = 1170;
	//move nav element position according to window width
	moveNavigation();
	$(window).on('resize', function(){
		(!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
	});

	//mobile - open lateral menu clicking on the menu icon
	$('.cd-nav-trigger').on('click', function(event){
		event.preventDefault();
		if( $('.cd-main-content').hasClass('nav-is-visible') ) {
			closeNav();
			$('.cd-overlay').removeClass('is-visible');
		} else {
			$(this).addClass('nav-is-visible');
			$('.cd-main-header').addClass('nav-is-visible');
			$('.cd-main-content').addClass('nav-is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').addClass('overflow-hidden');
			});
			toggleSearch('close');
			$('.cd-overlay').addClass('is-visible');
		}
	});

	//open search form
	$('.cd-search-trigger').on('click', function(event){
		event.preventDefault();
		toggleSearch();
		closeNav();
	});

	
	
	


	

	//submenu items - go back link
	$('.go-back').on('click', function(){
		$(this).parent('ul').addClass('is-hidden').parent('.has-children').parent('ul').removeClass('moves-out');
	});

	function closeNav() {
		$('.cd-nav-trigger').removeClass('nav-is-visible');
		$('.cd-main-header').removeClass('nav-is-visible');
		$('.cd-primary-nav').removeClass('nav-is-visible');
		$('.has-children ul').addClass('is-hidden');
		$('.has-children a').removeClass('selected');
		$('.moves-out').removeClass('moves-out');
		$('.cd-main-content').removeClass('nav-is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			$('body').removeClass('overflow-hidden');
		});
	}

	function toggleSearch(type) {
		if(type=="close") {
			//close serach 
			$('.cd-search').removeClass('is-visible');
			$('.cd-search-trigger').removeClass('search-is-visible');
			$('.cd-overlay').removeClass('search-is-visible');
		} else {
			//toggle search visibility
			$('.cd-search').toggleClass('is-visible');
			$('.cd-search-trigger').toggleClass('search-is-visible');
			$('.cd-overlay').toggleClass('search-is-visible');
			if($(window).width() > MqL && $('.cd-search').hasClass('is-visible')) $('.cd-search').find('input[type="search"]').focus();
			($('.cd-search').hasClass('is-visible')) ? $('.cd-overlay').addClass('is-visible') : $('.cd-overlay').removeClass('is-visible') ;
		}
	}

	function checkWindowWidth() {
		//check window width (scrollbar included)
		var e = window, 
            a = 'inner';
        if (!('innerWidth' in window )) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        if ( e[ a+'Width' ] >= MqL ) {
			return true;
		} else {
			return false;
		}
	}

	function moveNavigation(){
		var navigation = $('.cd-nav');
  		var desktop = checkWindowWidth();
        if ( desktop ) {
			navigation.detach();
			navigation.insertBefore('.cd-header-buttons');
		} else {
			navigation.detach();
			navigation.insertAfter('.cd-main-content');
		}
	}
});

// var slideIndex = 0;

// showSlide();

// // var timer = setInterval(showSlide, 2000);

// var slideContainer = document.getElementById('slideshow-container');
// var slideControl = document.getElementById('slide-control');

// slideContainer.onmouseover = function() {
// 	clearInterval(timer);
// }

// slideControl.onmouseover = function() {
// 	clearInterval(timer);
// }

// slideContainer.onmouseleave = function() {
// 	// timer = setInterval(showSlide, 2000);
// }

// slideControl.onmouseleave = function() {
// 	// timer = setInterval(showSlide, 2000);
// }

// function showSlide() {
// 	var i;
// 	var slides = document.getElementsByClassName('slide-item');
// 	var dots = document.getElementsByClassName('dot');
// 	for (var i = 0; i < slides.length; i++) {
// 		slides[i].style.display = 'none';
// 	}
// 	for (var i = 0; i < dots.length; i++) {
// 		dots[i].className = dots[i].className.replace(" active", "");
// 	}
// 	slideIndex++;
// 	if (slideIndex > slides.length) slideIndex = 1;
// 	slides[slideIndex-1].style.display = "block";
// 	dots[slideIndex-1].className += " active";
// }

// function chooseSlide(n) {
// 	slideIndex = n;
// 	showSlide();
// 	clearInterval(timer);
// }

// function showMenu() {
// 	var topNav = document.getElementById('topnav');
// 	if (topNav.className === "navbar") {
// 		topNav.className += " show";
// 	} else {
// 		topNav.className = "navbar";
// 	}
// }
// // back tot top

// let backToTopBtn = document.querySelector('.back-to-top')

// window.onscroll = () => {
//     if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
//         backToTopBtn.style.display = 'flex'
//     } else {
//         backToTopBtn.style.display = 'none'
//     }
// }

// // top nav menu

// let menuItems = document.getElementsByClassName('menu-item')

// Array.from(menuItems).forEach((item, index) => {
//     item.onclick = (e) => {
//         let currMenu = document.querySelector('.menu-item.active')
//         currMenu.classList.remove('active')
//         item.classList.add('active')
//     }
// })

// // food category

// let foodMenuList = document.querySelector('.food-item-wrap')

// let foodCategory = document.querySelector('.food-category')

// let categories = foodCategory.querySelectorAll('button')

// Array.from(categories).forEach((item, index) => {
//     item.onclick = (e) => {
//         let currCat = foodCategory.querySelector('button.active')
//         currCat.classList.remove('active')
//         e.target.classList.add('active')
//         foodMenuList.classList ='food-item-wrap '+ e.target.getAttribute('data-food-type')
//     }
// })

// // on scroll animation

// let scroll = window.requestAnimationFrame || function(callback) {window.setTimeout(callback, 1000/60)}

// let elToShow = document.querySelectorAll('.play-on-scroll')

// isElInViewPort = (el) => {
//     let rect = el.getBoundingClientRect()

//     return (
//         (rect.top <= 0 && rect.bottom >= 0)
//         ||
//         (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
//         ||
//         (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
//     )
// }

// loop = () => {
//     elToShow.forEach((item, index) => {
//         if (isElInViewPort(item)) {
//             item.classList.add('start')
//         } else {
//             item.classList.remove('start')
//         }
//     })

//     scroll(loop)
// }

// loop()

// // mobile nav

// let bottomNavItems = document.querySelectorAll('.mb-nav-item')

// let bottomMove = document.querySelector('.mb-move-item')

// bottomNavItems.forEach((item, index) => {
//     item.onclick = (e) => {
//         console.log('object')
//         let crrItem = document.querySelector('.mb-nav-item.active')
//         crrItem.classList.remove('active')
//         item.classList.add('active')
//         bottomMove.style.left = index * 25 + '%'
//     }
// })