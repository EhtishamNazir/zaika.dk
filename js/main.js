// Fixed Header
window.onscroll = function() {
	const docScrollTop = document.documentElement.scrollTop;
	if (window.innerWidth>991) {
		if (docScrollTop>100) {
			document.querySelector("header").classList.add("fixed");
		}
		else{
			document.querySelector("header").classList.remove("fixed");
		}
	}
}

// Navbar Links
const navbar = document.querySelector(".navbar");
a=navbar.querySelectorAll("a");

a.forEach(function(element) {
	element.addEventListener("click",function() {
		for(let i=0;i<a.length;i++){
			a[i].classList.remove("active");
		}
		this.classList.add("active");

		// Close navbar when click on link
		document.querySelector(".navbar").classList.toggle("show");
	});
});


// Hamburger Menu
const hamBurger = document.querySelector(".ham-burger");

hamBurger.addEventListener("click",function() {
	document.querySelector(".navbar").classList.toggle("show");
});
// Lightbox
const closeLightbox = document.querySelector(".close-lightbox");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");

// Close Lightbox when click outside the image
lightbox.addEventListener("click", function() {
	if (event.target != lightboxImage) {
		lightbox.classList.remove("show");
		lightbox.classList.add("hide");
	}
});

// Close Lightbox when click on close btn
closeLightbox.addEventListener("click", function() {
	lightbox.classList.add("hide");
	lightbox.classList.remove("show");
});

const gallery = document.querySelector(".portfolio-gallery");
const galleryItem = gallery.querySelectorAll(".item");

// Show Lightbox when click on plus and also change the source of lightboxImage
galleryItem.forEach(function(element) {
	element.querySelector(".fa-plus").addEventListener("click", function() {
		lightbox.classList.remove("hide");
		lightbox.classList.add("show");
		lightboxImage.src = element.querySelector("img").getAttribute("src");
	});
});

// Slider

