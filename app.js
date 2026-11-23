if (false) {
const starterCode = {
  html: `<main class="scene">
  <header class="intro">
    <span class="kicker">A WINDOW TO SOMEWHERE</span>
    <h1>Views worth<br><em>staying for.</em></h1>
    <p>Little windows into a slower kind of living.</p>
  </header>

  <section class="gallery" aria-label="A collection of window views">
    <article class="view-card">
      <div class="window">
        <img src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1100&q=85" alt="Mountain lake at sunrise">
        <span class="window-cross vertical"></span><span class="window-cross horizontal"></span>
      </div>
      <div class="caption"><span>01 / THE ALPINE</span><strong>Somewhere, still.</strong></div>
    </article>
    <article class="view-card">
      <div class="window">
        <img src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1100&q=85" alt="Ocean waves on a quiet coast">
        <span class="window-cross vertical"></span><span class="window-cross horizontal"></span>
      </div>
      <div class="caption"><span>02 / THE COAST</span><strong>Blue, endlessly.</strong></div>
    </article>
    <article class="view-card">
      <div class="window">
        <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1100&q=85" alt="Sunlight in a forest">
        <span class="window-cross vertical"></span><span class="window-cross horizontal"></span>
      </div>
      <div class="caption"><span>03 / THE WOODS</span><strong>Let the light in.</strong></div>
    </article>
  </section>

  <footer class="controls">
    <span class="slide-count"><b id="current">01</b> <i></i> 03</span>
    <div class="arrows">
      <button class="arrow previous" aria-label="Previous view">←</button>
      <button class="arrow next" aria-label="Next view">→</button>
    </div>
    <span class="hint">SCROLL TO WANDER&nbsp; ↓</span>
  </footer>
</main>`,
  css: `* { box-sizing: border-box; }
body {
  margin: 0;
  min-height: 100vh;
  background: #e9e5da;
  color: #292e27;
  font-family: Georgia, serif;
}
.scene { max-width: 1040px; margin: 0 auto; padding: 48px 6%; }
.intro { position: relative; padding-left: 4px; }
.kicker, .caption span, .slide-count, .hint {
  font: 9px "Courier New", monospace;
  letter-spacing: .13em;
}
.kicker { color: #778070; }
h1 { margin: 15px 0 9px; font-size: clamp(40px, 6vw, 67px); line-height: .96; letter-spacing: -.055em; font-weight: 400; }
h1 em { color: #70816a; font-weight: 400; }
.intro p { margin: 0; color: #77796f; font: 12px/1.6 Arial, sans-serif; }
.gallery {
  display: grid;
  grid-auto-columns: minmax(200px, 1fr);
  grid-auto-flow: column;
  gap: 16px;
  margin-top: 32px;
  overflow-x: auto;
  padding: 4px 2px 15px;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
}
.gallery::-webkit-scrollbar { display: none; }
.view-card { min-width: 0; scroll-snap-align: center; }
.window {
  position: relative;
  height: clamp(210px, 34vw, 300px);
  overflow: hidden;
  border: 10px solid #f7f4eb;
  border-bottom-width: 16px;
  border-radius: 48% 48% 2px 2px / 17% 17% 2px 2px;
  background: #bac3b4;
  box-shadow: 0 12px 25px #35392b1c, inset 0 0 0 1px #bdb9ac;
}
.window img { width: 100%; height: 100%; display: block; object-fit: cover; transition: transform .8s cubic-bezier(.2,.7,.2,1); }
.view-card:hover .window img { transform: scale(1.07); }
.window-cross { position: absolute; z-index: 1; background: #f7f4eb; box-shadow: 0 0 3px #35392b55; }
.window-cross.vertical { top: 0; bottom: 0; left: 50%; width: 7px; transform: translateX(-50%); }
.window-cross.horizontal { top: 57%; right: 0; left: 0; height: 7px; }
.caption { display: flex; flex-direction: column; gap: 7px; padding: 13px 2px 0; }
.caption span { color: #85887c; font-size: 8px; }
.caption strong { font-size: 16px; font-weight: 400; }
.controls { display: flex; align-items: center; justify-content: space-between; margin-top: 19px; }
.slide-count { color: #888a80; }
.slide-count b { color: #343a31; font-weight: 400; }
.slide-count i { display: inline-block; width: 22px; height: 1px; margin: 0 6px 3px; background: #b5b4a9; }
.arrows { display: flex; gap: 7px; }
.arrow { width: 34px; height: 34px; border: 1px solid #c9c7bc; border-radius: 50%; background: transparent; color: #3a4037; cursor: pointer; transition: .2s; }
.arrow:hover { border-color: #687b62; background: #687b62; color: white; }
.hint { color: #8b8d82; font-size: 8px; }
@media (max-width: 680px) {
  .scene { padding-top: 35px; }
  .gallery { grid-auto-columns: minmax(72vw, 1fr); gap: 13px; }
  .window { height: 55vw; max-height: 330px; }
  .controls { margin-top: 12px; }
}`,
  js: `const gallery = document.querySelector(".gallery");
const cards = [...document.querySelectorAll(".view-card")];
const current = document.querySelector("#current");

function goToCard(direction) {
  const cardWidth = cards[0].getBoundingClientRect().width + 16;
  gallery.scrollBy({ left: cardWidth * direction, behavior: "smooth" });
}

document.querySelector(".next").addEventListener("click", () => goToCard(1));
document.querySelector(".previous").addEventListener("click", () => goToCard(-1));

gallery.addEventListener("scroll", () => {
  const index = Math.round(gallery.scrollLeft / (cards[0].offsetWidth + 16));
  current.textContent = String(Math.min(index + 1, cards.length)).padStart(2, "0");
}, { passive: true });`
};

}

const posts = [
  {
    id: "pop-up-modal-movie-ticket",
    index: "01",
    category: "Pop-up",
    title: "Pop Under Modal for Movie Ticket Snippet",
    excerpt: "popup animation make web more luxury.",
    date: "23.11.2026",
    readTime: "1 phút đọc",
    image: "assets/pop-up/topic-1.jpg",
    embedUrl: "https://es-d-35092166220261125-01a2066b-71f5-76cd-acd5-0bc7a221724d.codepen.dev/",
    code: {
      html: `<body>
	<div class="hero-container">
		<div class="main-container">
			<div class="poster-container">
				<a href="#"><img src="https://i.ibb.co/ThPNnzM/blade-runner.jpg" class="poster" /></a>
			</div>
			<div class="ticket-container">
				<div class="ticket__content">
					<h4 class="ticket__movie-title">Blade Runner 2049</h4>
					<p class="ticket__movie-slogan">
						More human than human is our motto.
					</p>
					<p class="ticket__current-price">$28.00</p>
					<p class="ticket__old-price">$44.99</p>
					<button class="ticket__buy-btn">Buy now</button>
				</div>
			</div>
		</div>

		<div class="main-container">
			<div class="poster-container">
				<a href="#"><img src="https://i.ibb.co/Zd51z5c/justice-league.jpg" class="poster" /></a>
			</div>
			<div class="ticket-container">
				<div class="ticket__content">
					<h4 class="ticket__movie-title">Justice League</h4>
					<p class="ticket__movie-slogan">You can't save the world alone.</p>
					<p class="ticket__current-price">$20.75</p>
					<p class="ticket__old-price">$40.99</p>
					<button class="ticket__buy-btn">Buy now</button>
				</div>
			</div>
		</div>
	</div>
</body>`,
      css: `@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap");

* {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}

body {
	background: #457fb4;
	font-family: "Roboto", sans-serif;
	display: flex;
	height: 100vh;
}

.hero-container {
	margin: auto;
	display: flex;
}

.main-container {
	width: 270px;
	height: 540px;
	position: relative;
	margin: 0 20px;
}

.poster-container {
	width: 230px;
	position: absolute;
	top: 0;
	left: 20px;
	z-index: 9999;
}

.poster {
	width: 100%;
	box-shadow: 0 5px 20px 3px rgba(0, 0, 0, 0.6);
}

.ticket-container {
	background: #fff;
	width: 270px;
	height: 520px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 5px;
	position: absolute;
	top: 20px;
	box-shadow: 0 5px 20px 3px rgba(0, 0, 0, 0.6);
	opacity: 0;
}

.main-container:hover .ticket-container {
	opacity: 1;
	animation: bounceIn 0.6s linear;
}

@keyframes bounceIn {
	0%,
	20%,
	40%,
	60%,
	80%,
	to {
		-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
	}
	0% {
		opacity: 0;
		-webkit-transform: scale3d(0.3, 0.3, 0.3);
		transform: scale3d(0.3, 0.3, 0.3);
	}
	20% {
		-webkit-transform: scale3d(1.03, 1.03, 1.03);
		transform: scale3d(1.03, 1.03, 1.03);
	}
	40% {
		-webkit-transform: scale3d(0.9, 0.9, 0.9);
		transform: scale3d(0.9, 0.9, 0.9);
	}
	60% {
		opacity: 1;
		-webkit-transform: scale3d(1.01, 1.01, 1.01);
		transform: scale3d(1.01, 1.01, 1.01);
	}
	80% {
		-webkit-transform: scale3d(0.97, 0.97, 0.97);
		transform: scale3d(0.97, 0.97, 0.97);
	}
	to {
		opacity: 1;
		-webkit-transform: scaleX(1);
		transform: scaleX(1);
	}
}

/* @keyframes bounce {
  50% {
    opacity: 1;
    transform: scale(1.1);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
} */

.ticket__content {
	width: 100%;
	position: absolute;
	bottom: 0;
	text-align: center;
}

.ticket__movie-title {
	text-transform: uppercase;
	margin-bottom: 5px;
}

.ticket__movie-slogan {
	color: #999;
	font-size: 0.9rem;
	margin-bottom: 20px;
}

.ticket__current-price {
	color: #69c982;
	font-size: 1.4rem;
	font-weight: bold;
}

.ticket__old-price {
	color: #999;
	text-decoration: line-through;
	margin-bottom: 10px;
}

.ticket__buy-btn {
	cursor: pointer;
	width: 100%;
	background: #2f2f2f;
	color: white;
	padding: 15px 0;
	font-size: 1rem;
	font-weight: bold;
	text-transform: uppercase;
	border: 0;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
}
`,
      js: ``
    },
  },

  {
    id: "button-modal-form",
    index: "02",
    category: "Pop-up",
    title: "Button into Modal Form Snippet",
    excerpt: "Button into Modal Form Snippet",
    date: "23.11.2026",
    readTime: "1 phút đọc",
    image: "assets/pop-up/topic-2.webp",
    embedUrl: "https://codepen.io/gregh/pen/rjbmXb",
    code: {
      html: `<div class="container" id="app">
  <div class="add-product" :class="{'open': formOpen}">
    <div class="button-copy" v-show="!formOpen" @click="formOpen = true">Add Product</div>
    <form @submit="cancel()">

      <div class="form--field">
        <label>Product Title *</label>
        <input type="text" class="form--element" name="title" v-model="productData.title" placeholder="Title" required="">
      </div>
      <div class="form--container -inline">
        <div class="form--field -short">
          <label>Product Rating *</label>
          <input type="number" class="form--element" name="rating" v-model="productData.rating" placeholder="Rating" required="" min="0" max="5" step="0.5">
        </div>
        <div class="form--field -short">
          <label>Product Price *</label>
          <span class="form--price">$</span>
          <input type="text" class="form--element" name="price" v-model="productData.price" placeholder="Price" required="" min="0" max="500" pattern="\d+(\.\d{2})?">
        </div>
        <div class="form--field -short">
          <label>List Price *</label>
          <span class="form--price">$</span>
          <input type="text" class="form--element" name="list_price" v-model="productData.list_price" placeholder="List Price" required="" min="0" max="500" pattern="\d+(\.\d{2})?">
        </div>
      </div>
      <div class="form--field">
        <label class="emoji">
          Is Featured
          <input type="checkbox" name="is_featured" v-bind="productData.is_featured">
          <span></span>
        </label>
        <p class="featured-note">If Is Featured is selected the product will appear in a large card.</p>
      </div>
      <div class="form--field">
        <label>Product Description</label>
        <textarea class="form--element textarea" v-model="productData.description" placeholder="Description">                                
        </textarea>
      </div>

      <button type="submit" class="submit-button">Add Product</button>
      <div class="cancel"><span @click="cancel()">Cancel</span></div>
    </form>
  </div>
</div>`,
      css: `.container {
  background-image: linear-gradient(-128deg, rgba(255, 181, 32, 0.93) 3%, rgba(239, 39, 153, 0.93) 88%, rgba(237, 18, 171, 0.93) 100%);
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.add-product {
  &.open {  
    background-color: #FAFAFA;
    padding: 18px 32px;
    border-radius: 5px;
    width: 420px;
    height: 398px;
    cursor: default;
    form {
      opacity: 1;
      transition: opacity 0.1s ease;
      transition-delay: 0.3s;
      height: auto;
    }
  }
  transition: all 0.3s ease;
  background-color: #FFC145;
  height: 144px;
  width: 144px;
  border-radius: 72px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, .07);
  cursor: pointer;
  .button-copy {
    text-align: center;
    line-height: 144px;
    text-transform: uppercase;
    font-weight: bold;
    color: #f7f7f7;
  }
  form {
    transition: none;
    opacity: 0;
    height: 0;
    overflow: hidden;
  }
  .cancel {
    font-size: 12px;
    text-align: center;
    margin-top: 1em; 
    span {
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.submit-button {
  display: block;
  background-color: #3498DB;
  height: 40px;
  border-radius: 20px;
  line-height: 36px;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  font-size: 0.875em;
  border: none;
  font-weight: 700;
  padding: 0 34px;
  margin: 0 auto;
  img {
    position: relative;
    top: 3px;
    right: 6px;
  }
  &:hover {
    background-color: darken(#3498DB, 10%);
    cursor: pointer;
  }
}

.featured-note {
  color: #949494;
  font-size: 12px;
  margin: 4px 0px;
  line-height: 18px;
  font-style: italic;
}

form * {
  outline: none;
}

label {
  display: block;
  font-size: 14px;
  font-weight: bold;
  user-select: none;
  &.emoji {
    input {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      height: 21px;
      margin: 0;
      display: none;
      &+span:after {
        content: "😶";
        font-size: 18px;
        top: 2px;
        left: 2px;
        position: relative;
        height: 18px;
        display: inline-block;
      }
      &:checked+span:after {
        content: "😀";
      }
    }
  }
}

.form--field {
  width: 420px;
  margin: 10px 0;
  &.-short {
    width: 120px;
  }
}

.form--price {
  position: absolute;
  line-height: 38px;
  width: 16px;
  color: #C7C7C7;
  text-align: center;
  & + input {
    padding-left: 14px;
  }
}

.form--container {
  width: 420px;
  &.-inline {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: -12px;
  }
}

.form--element {
  background-color: #fff;
  border: 1px solid #ECECEC;
  border-radius: 3px;
  font-size: 14px;
  line-height: 28px;
  padding: 0 4px;
  color: #3D3D3D;
  width: 100%;
  margin: 4px 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  &:focus {
    border: 1px solid #FFC145;
    border-radius: 2px;
  }
  &:not(.texteare) {
    height: 30px;
  }
  &.textarea {
    height: 80px;
    resize: none;
  }
}


html,
body {
  height: 100%;
  margin: 0;
}

body {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  background-color: #F3F4F5;
  cursor: default;
}

a {
  text-decoration: none;
  cursor: pointer;
}

::selection {
  background-color: #F5617A;
  color: #fff;
}

::-moz-selection {
  background-color: #F5617A;
  color: #fff;
}
`,
      js: `var vue = new Vue({
  el: '#app',
  data: {
    formOpen: false,
    productData: {
      title: '',
      rating: '',
      price: '',
      list_price: '',
      is_featured: false
    }
  },
  methods: {
    resetForm: function () {
      this.productData = {
        title: '',
        rating: '',
        price: '',
        list_price: '',
        is_featured: false
      }
    },
    cancel: function() {
      this.formOpen = false;
      this.resetForm();
    }
  }
})`
    },
  },

  {
    id: "Retro-Dialog-Box-Snippet",
    index: "03",
    category: "Pop-up",
    title: "Retro Dialog Box Snippet",
    excerpt: "Retro Dialog Box Snippet",
    date: "23.11.2026",
    readTime: "1 phút đọc",
    image: "assets/pop-up/topic-3.webp",
    embedUrl: "https://codepen.io/Gthibaud/pen/MqpmXE",
    code: {
      html: `<div class="modal">
  <p class="message">Look at this fancy pop-up</p>
  <div class="options">
    <button class="btn">Yes</button>
    <button class="btn">No</button>
  </div>
</div>`,
      css: `html {
  font-size: 18px;
}
body {
  color:black;
  font-family: "Questrial", sans-serif;
  background-color: #ffec63;
  background-image: linear-gradient(
      45deg,
      #ffd966 25%,
      transparent 25%,
      transparent 75%,
      #ffd966 75%,
      #ffd966
    ),
    linear-gradient(
      -45deg,
      #ffd966 25%,
      transparent 25%,
      transparent 75%,
      #ffd966 75%,
      #ffd966
    );
  background-size: 60px 60px;
  background-position: 0 0;
  animation: slide 4s infinite linear;
}

@keyframes slide {
  from {
    background-position: 0 0;
  }

  to {
    background-position: -120px 60px;
  }
}

.modal {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 1.6rem 3rem;
  border: 3px solid black;
  border-radius: 5px;
  background: white;
  box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.2);
}
.message {
  font-size:1.1rem;
  margin-bottom: 1.6rem;
  margin-top: 0;
}
.btn {
  color:inherit;
    font-family:inherit;
  font-size: inherit;
  background: white;
  padding: 0.3rem 3.4rem;
  border: 3px solid black;
  margin-right: 2.6rem;
  box-shadow: 0 0 0 black;
  transition: all 0.2s;
}

.btn:last-child {
  margin: 0;
}

.btn:hover {
  box-shadow: 0.4rem 0.4rem 0 black;
  transform: translate(-0.4rem, -0.4rem);
}

.btn:active {
  box-shadow: 0 0 0 black;
  transform: translate(0, 0);
}

.options {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}`
    },
  },

  {
    id: "Button-to-Popup-Snippet",
    index: "04",
    category: "Pop-up",
    title: "Button to Popup Snippet",
    excerpt: "Button to Popup Snippet",
    date: "23.11.2026",
    readTime: "1 phút đọc",
    image: "assets/pop-up/topic-4.webp",
    embedUrl: "https://codepen.io/SamuelJanes/pen/gLBzjp",
    code: {
      html: `<a href="#" class='btn open-modal' data-modal="#modal1">Open Modal</a>

<div class='modal' id='modal1'>
	<div class='content'>
		<h1 class='title'>This is a modal</h1>
		<p>
				Here is some text and stuff. cool cool	
		</p>
		<a class='btn close-modal' data-modal="#modal1" href="#">K Bye</a>
	</div>	
</div>	`,
      css: `* { box-sizing: border-box; }

body {
  min-height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f3f0e8;
  font-family: 'Nunito', Arial, sans-serif;
}

.btn {
  display: inline-block;
  padding: 20px 50px;
  background: #EF233C;
  color: white;
  text-decoration: none;
  transition: 0.35s ease-in-out;
  font-weight: 700;
}

.btn:hover { background: #d91831; }

.overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  background: rgba(0, 0, 0, 0.75);
  opacity: 0;
  pointer-events: none;
  transition: 0.35s ease-in-out;
  max-height: 100vh;
  overflow-y: auto;
}

.overlay.open {
  opacity: 1;
  pointer-events: inherit;
}

.modal {
  width: min(480px, calc(100vw - 40px));
  background: white;
  text-align: center;
  padding: 40px 80px;
  box-shadow: 0 1px 10px rgba(255, 255, 255, 0.35);
  opacity: 0;
  pointer-events: none;
  transition: 0.35s ease-in-out;
  max-height: calc(100vh - 80px);
  overflow-y: auto;
}

.modal.open {
  opacity: 1;
  pointer-events: inherit;
}

.modal .content {
  transform: translate(0, -10px);
  opacity: 0;
  transition: 0.35s ease-in-out;
}

.modal.open .content {
  transform: translate(0, 0);
  opacity: 1;
}

.modal .title { margin-top: 0; }

@media (max-width: 520px) {
  .modal { padding: 30px 20px; }
  .btn { padding: 16px 30px; }
}`,
        js: `$(".modal").each( function(){
	$(this).wrap('<div class="overlay"></div>')
});

$(".open-modal").on('click', function(e){
	e.preventDefault();
	e.stopImmediatePropagation;
	
	var $this = $(this),
			modal = $($this).data("modal");
	
	$(modal).parents(".overlay").addClass("open");
	setTimeout( function(){
		$(modal).addClass("open");
	}, 350);
	
	$(document).on('click', function(e){
		var target = $(e.target);
		
		if ($(target).hasClass("overlay")){
			$(target).find(".modal").each( function(){
				$(this).removeClass("open");
			});
			setTimeout( function(){
				$(target).removeClass("open");
			}, 350);
		}
		
	});
	
});

$(".close-modal").on('click', function(e){
	e.preventDefault();
	e.stopImmediatePropagation;
	
	var $this = $(this),
			modal = $($this).data("modal");
	
	$(modal).removeClass("open");
	setTimeout( function(){	
		$(modal).parents(".overlay").removeClass("open");
	}, 350);
	
});	`
    },
  },

{
    id: "transition-animation-snippet",
    index: "05",
    category: "Pop-up",
    title: "Transition Animation Snippet",
    excerpt: "Transition Animation Snippet",
    date: "23.11.2026",
    readTime: "1 phút đọc",
    image: "assets/pop-up/topic-5.jpg",
    embedUrl: "https://codepen.io/sandstedt/pen/vKWzWE",
    code: {
      html: `<div id="bodymovin"></div>
<button id="close" name="close">×</button>
<div class="modal">
    <div class="modal__content">
        <h1>Bodymovin modal</h1>
        <p>For this animation to stretch, set the BodyMovin rendererSettings to preserveAspectRatio: 'none'.</p>
    </div>
</div>`,
      css: `@import url(https://fonts.googleapis.com/css?family=Roboto:100);
* { box-sizing: border-box; }

html, body {
    height: 100%;
}
body {
    background-color: #89E9C2;
    margin: 0px;
    overflow: hidden;
    font-family: "Roboto", sans-serif;
    font-weight: 100;
}

#bodymovin {
    width: 100%;
    height: 100%;
    display: block;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
    text-align: center;
    opacity: 1;
}

#close {
    // initial state for the close button transition
    transition: opacity 0.4s ease 0.1s, color 0.2s, transform 0.2s;
    opacity: 0;
    
    border: none;
    background: none;
    position: fixed;
    top: 1em;
    right: 1em;
    font-size: 2em;
    padding: 1em;
    cursor: pointer;
    z-index: 1;
}

// show the close button when the modal is open
.open #close {
    opacity: 1;
}
#close:focus {
    outline: none;
    transform: scale(1.1);
}

.modal {
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &__content {
        // Set the initial state for the content transition
        opacity: 0;
        transform: scale(0.8) translate3D(0,-20px,0);
        transition: opacity 0.2s, transform 0.8s cubic-bezier(.09,.52,.25,1);
        text-align: center;
        
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 1em;
    }
    h1 {
        text-transform: uppercase;
        letter-spacing: 0.4em;
    }
    p {
        max-width: 25em;
        line-height: 1.9;
    }
}

// Make the content transitions when the modal is open
.open .modal {
    &__content {
        opacity: 1;
        transform: scale(1) translate3D(0,0,0);
    }
}`,
        js: `// Declare the animation container and parameter to be used in the animation
var animContainer = document.getElementById('bodymovin');
// The animation data exported from Adobe After Effects
var animationData = {"assets":[],"v":"4.3.0","ddd":0,"layers":[{"ddd":0,"ind":0,"ty":1,"nm":"blob__yellow","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[540,540,0]},"a":{"k":[540,540,0]},"s":{"k":[{"i":{"x":[0.222,0.222,0.667],"y":[1,1,0.667]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p222_1_0p167_0p167","0p222_1_0p167_0p167","0p667_0p667_0p167_0p167"],"t":4,"s":[0,0,100],"e":[100,100,100]},{"t":15}]}},"hasMask":true,"masksProperties":[{"cl":true,"inv":false,"mode":"a","pt":{"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":4,"s":[{"i":[[26.858,-3.247],[25.249,-14.754],[-5.297,-33],[-16.249,-9.037],[-28.885,-3.379],[-21,-2.703],[-40.627,14.108],[-1.297,12],[7.283,17.874],[17.465,10.855]],"o":[[-19,2.297],[-25.249,14.754],[5.297,33],[14.667,8.157],[28.885,3.379],[21,2.703],[17.679,-6.139],[3.22,-29.802],[-8.734,-21.435],[-22.887,-14.224]],"v":[[476,432.703],[431.249,460.246],[379.703,490],[426.333,512.843],[462.115,534.621],[501,518.297],[551.321,547.139],[565.297,516],[575.717,473.126],[521.887,477.224]]}],"e":[{"i":[[145.748,0],[141.126,-140.618],[22.297,-160],[-7.41,-117.525],[-128.115,-71.621],[-127.399,0],[-141.321,102.861],[0,194.556],[64.283,87.874],[138.363,82.457]],"o":[[-214.963,0],[-141.795,141.284],[-17.361,124.581],[3.667,58.158],[116.055,64.879],[236.39,0],[145.858,-106.163],[0,-112.43],[-95.835,-131.005],[-116.724,-69.561]],"v":[[506,3.703],[219.249,247.246],[9.703,488],[92.333,749.842],[72.115,1023.621],[526,936.297],[953.321,953.139],[978.297,592],[1063.717,236.126],[768.887,177.224]]}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":21,"s":[{"i":[[145.748,0],[141.126,-140.618],[22.297,-160],[-7.41,-117.525],[-128.115,-71.621],[-127.399,0],[-141.321,102.861],[0,194.556],[64.283,87.874],[138.363,82.457]],"o":[[-214.963,0],[-141.795,141.284],[-17.361,124.581],[3.667,58.158],[116.055,64.879],[236.39,0],[145.858,-106.163],[0,-112.43],[-95.835,-131.005],[-116.724,-69.561]],"v":[[506,3.703],[219.249,247.246],[9.703,488],[92.333,749.842],[72.115,1023.621],[526,936.297],[953.321,953.139],[978.297,592],[1063.717,236.126],[768.887,177.224]]}],"e":[{"i":[[281.812,0],[0,0],[0,-256],[0,-126.158],[0,0],[-271.5,0],[0,0],[0,148.875],[0,156.126],[0,0]],"o":[[-281.812,0],[0,0],[0,256],[0,126.158],[0,0],[271.5,0],[0,0],[0,-148.875],[0,-156.126],[0,0]],"v":[[501.812,0.016],[-0.001,-0.004],[-0.297,416],[0,845.842],[0.115,1079.621],[532.5,1080.297],[1080.036,1079.997],[1080.047,652.875],[1079.967,268.126],[1080.012,-0.026]]}]},{"t":32}]},"o":{"k":100},"x":{"k":0},"nm":"Mask 1"}],"sw":1080,"sh":1080,"sc":"#f4e097","ip":4,"op":33,"st":4,"bm":0,"sr":1},{"ddd":0,"ind":1,"ty":1,"nm":"blob__white","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[540,540,0]},"a":{"k":[540,540,0]},"s":{"k":[{"i":{"x":[0.222,0.222,0.667],"y":[1,1,0.667]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p222_1_0p167_0p167","0p222_1_0p167_0p167","0p667_0p667_0p167_0p167"],"t":0,"s":[0,0,100],"e":[100,100,100]},{"t":11}]}},"hasMask":true,"masksProperties":[{"cl":true,"inv":false,"mode":"a","pt":{"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":0,"s":[{"i":[[26.858,-3.247],[25.249,-14.754],[-5.297,-33],[-16.249,-9.037],[-28.885,-3.379],[-21,-2.703],[-40.627,14.108],[-1.297,12],[7.283,17.874],[17.465,10.855]],"o":[[-19,2.297],[-25.249,14.754],[5.297,33],[14.667,8.157],[28.885,3.379],[21,2.703],[17.679,-6.139],[3.22,-29.802],[-8.734,-21.435],[-22.887,-14.224]],"v":[[476,432.703],[431.249,460.246],[379.703,490],[426.333,512.843],[462.115,534.621],[501,518.297],[551.321,547.139],[565.297,516],[575.717,473.126],[521.887,477.224]]}],"e":[{"i":[[145.748,0],[141.126,-140.618],[22.297,-160],[-7.41,-117.525],[-128.115,-71.621],[-127.399,0],[-141.321,102.861],[0,194.556],[64.283,87.874],[138.363,82.457]],"o":[[-214.963,0],[-141.795,141.284],[-17.361,124.581],[3.667,58.158],[116.055,64.879],[236.39,0],[145.858,-106.163],[0,-112.43],[-95.835,-131.005],[-116.724,-69.561]],"v":[[506,3.703],[219.249,247.246],[9.703,488],[92.333,749.842],[72.115,1023.621],[526,936.297],[953.321,953.139],[978.297,592],[1063.717,236.126],[768.887,177.224]]}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":17,"s":[{"i":[[145.748,0],[141.126,-140.618],[22.297,-160],[-7.41,-117.525],[-128.115,-71.621],[-127.399,0],[-141.321,102.861],[0,194.556],[64.283,87.874],[138.363,82.457]],"o":[[-214.963,0],[-141.795,141.284],[-17.361,124.581],[3.667,58.158],[116.055,64.879],[236.39,0],[145.858,-106.163],[0,-112.43],[-95.835,-131.005],[-116.724,-69.561]],"v":[[506,3.703],[219.249,247.246],[9.703,488],[92.333,749.842],[72.115,1023.621],[526,936.297],[953.321,953.139],[978.297,592],[1063.717,236.126],[768.887,177.224]]}],"e":[{"i":[[281.812,0],[0,0],[0,-256],[0,-126.158],[0,0],[-271.5,0],[0,0],[0,148.875],[0,156.126],[0,0]],"o":[[-281.812,0],[0,0],[0,256],[0,126.158],[0,0],[271.5,0],[0,0],[0,-148.875],[0,-156.126],[0,0]],"v":[[501.812,0.016],[-0.001,-0.004],[-0.297,416],[0,845.842],[0.115,1079.621],[532.5,1080.297],[1080.036,1079.997],[1080.047,652.875],[1079.967,268.126],[1080.012,-0.026]]}]},{"t":28}]},"o":{"k":100},"x":{"k":0},"nm":"Mask 1"}],"sw":1080,"sh":1080,"sc":"#ffffff","ip":0,"op":33,"st":0,"bm":0,"sr":1}],"ip":0,"op":33,"fr":60,"w":1080,"h":1080};
var params = {
    container: animContainer,
    renderer: 'svg',
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: { 
        preserveAspectRatio:'none'
    }
};

// Load the bodyMovin animation
var anim = bodymovin.loadAnimation(params);

// Add class to the body to use some transition on the text in CSS
var body = document.body;
var close = document.getElementById('close');
body.classList.add("open");

// bodymovin event listener for when the animation
// is complete (the animation autostarts)
// if we open the modal, then 
anim.addEventListener("complete", function() {
    if (anim.playDirection == -1) {
        // The modal is closed,
        // so we restart the animation
        // instead of having an extra trigger 
        // to open the modal again (just for demo purpose)
        anim.setDirection(1);
        anim.play();
        body.classList.remove("completed");
    } else {
        // The modal is open, which triggers the content transitions
        body.classList.add("open");
        body.classList.add("completed");
    }
});

// When clicking the cross, 
// the animation reverses to close the modal
close.addEventListener("click", function() {
    anim.setDirection(-1);
    anim.play();
    body.classList.remove("open");
})`
    },
  },

  // ----kết post code----
];
// -------end-----
const app = document.querySelector("#app");

function escapeHtml(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function homeTemplate() {
  const categories = ["Tất cả", ...new Set(posts.map(post => post.category))];
  return `
    <section class="hero" id="top">
      <div>
        <span class="eyebrow">01 — CODE LAB</span>
        <h1>Play with<br><em>real code.</em></h1>
        <p class="hero-copy">Mỗi chủ đề là một playground nhỏ. Xem code, sửa thử và chạy kết quả ngay trong trang.</p>
        <div class="hero-actions">
          <a class="primary-button" href="#topics">Khám phá bài viết ↓</a>
          <a class="outline-button" href="#about">Giới thiệu</a>
        </div>
      </div>
      <div class="hero-art" aria-hidden="true">
        <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85" alt="">
        <span class="hero-number">2026 /<br>NOTES</span>
      </div>
    </section>

    <section class="topic-section" id="topics">
      <div class="section-heading">
        <div><span class="eyebrow">02 — DANH MỤC</span><h2>Chủ đề đang quan tâm</h2></div>
        <div class="filter-list" aria-label="Lọc chủ đề">
          ${categories.map((category, index) => `<button class="filter-button ${index === 0 ? "active" : ""}" type="button" data-category="${category}">${category}</button>`).join("")}
        </div>
      </div>
      <div class="post-grid" id="latest">
        ${posts.map(post => `
          <article class="post-card" data-category="${post.category}">
            <a class="post-link" href="#post/${post.id}" aria-label="Đọc ${escapeHtml(post.title)}">
              <div class="post-image">
                <img src="${post.image}" alt="${escapeHtml(post.title)}">
                <span class="post-index">${post.index}</span>
              </div>
              <div class="post-meta"><span>${post.category}</span><span>${post.readTime}</span></div>
              <h3>${post.title}</h3>
              <p>${post.excerpt}</p>
            </a>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="about-section" id="about">
      <div class="about-copy">
        <span class="eyebrow">03 — VỀ GÓC VIẾT</span>
        <h2>Học bằng cách làm.</h2>
        <p>Đây là trang lưu trữ các thể loại element code một số sẽ được lập trình bằng AI một sốt sẽ trên trang codemyui.com hoàn toàn miễn phí (tôi tạo trang này để giảm quảng cáo của gốc).</p>
      </div>
      <div class="about-art">Stay curious —</div>
    </section>
  `;
}

function articleTemplate(post) {
  return `
    <article class="article-view">
      <div class="article-wrap">
        <a class="article-back" href="#topics">← Tất cả chủ đề</a>
        <span class="article-kicker">${post.category} / ${post.date}</span>
        <h1>${post.title}</h1>
        <p class="article-summary">${post.excerpt}</p>
        <img class="article-cover" src="${post.image}" alt="${escapeHtml(post.title)}">
        <div class="article-content">
          ${post.content.map(([tag, text]) => {
            if (tag === "p") return `<p>${text.replace(/`([^`]+)`/g, "<code>$1</code>")}</p>`;
            if (tag === "h2") return `<h2>${text}</h2>`;
            if (tag === "blockquote") return `<blockquote>${text}</blockquote>`;
            return "";
          }).join("")}
        </div>
      </div>
    </article>
  `;
}

function playgroundTemplate(post) {
  return `
    <section class="playground-view">
      <div class="playground-heading">
        <div>
          <a class="article-back" href="#topics">← Tất cả chủ đề</a>
          <span class="article-kicker">${post.category} / ${post.index}</span>
          <h1>${post.title}</h1>
        </div>
        <button class="run-button" id="run-playground" type="button"><span aria-hidden="true">▶</span> Chạy code</button>
      </div>

      <div class="workspace playground-workspace">
        <section class="editor-panel">
          <div class="editor-toolbar">
            <div class="tabs" role="tablist" aria-label="Chọn ngôn ngữ">
              <button class="tab active" type="button" role="tab" aria-selected="true" data-playground-tab="html"><span class="tab-icon html-icon">&lt;/&gt;</span> HTML</button>
              <button class="tab" type="button" role="tab" aria-selected="false" data-playground-tab="css"><span class="tab-icon css-icon">#</span> CSS</button>
              <button class="tab" type="button" role="tab" aria-selected="false" data-playground-tab="js"><span class="tab-icon js-icon">JS</span> JS</button>
            </div>
            <button class="reset-button" id="reset-playground" type="button" title="Khôi phục code mẫu">↺ <span>Reset</span></button>
          </div>
          <div class="code-area">
            ${["html", "css", "js"].map((language, index) => `
              <div class="editor-view ${index === 0 ? "active" : ""}" data-playground-view="${language}" ${index === 0 ? "" : "hidden"}>
                <div class="line-numbers" aria-hidden="true"></div>
                <textarea class="code-input" data-code="${language}" aria-label="Mã ${language.toUpperCase()}" spellcheck="false"></textarea>
              </div>
            `).join("")}
          </div>
        </section>

        <section class="preview-panel">
          <div class="preview-heading"><div><span class="eyebrow">XEM TRƯỚC</span><h2>Live <span>preview</span></h2></div></div>
          <div class="preview-toolbar"><div class="browser-dots" aria-hidden="true"><i></i><i></i><i></i></div><div class="preview-url">topic.local/${post.id}</div>${post.embedUrl ? `<a class="codepen-button" href="${post.embedUrl}" target="_blank" rel="noopener noreferrer" aria-label="Mở project trên CodePen">CodePen ↗</a>` : ""}<div class="preview-zoom" aria-label="Tỷ lệ xem trước"><button type="button" class="zoom-button active" data-zoom="1" title="Kích thước đầy đủ">1x</button><button type="button" class="zoom-button" data-zoom="0.5" title="Thu nhỏ 50%">0.5x</button><button type="button" class="zoom-button" data-zoom="0.25" title="Thu nhỏ 25%">0.25x</button></div></div>
          <div class="preview-frame"><iframe id="topic-preview" title="Kết quả code" sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe></div>
        </section>
      </div>
    </section>
  `;
}

function setupPlayground(post) {
  document.body.classList.add("playground-page");
  const starter = post.code;
  const fields = [...document.querySelectorAll("[data-code]")];
  fields.forEach(field => {
    field.value = starter[field.dataset.code];
    const view = field.closest(".editor-view");
    const numbers = view.querySelector(".line-numbers");
    const updateNumbers = () => {
      numbers.textContent = Array.from({ length: field.value.split("\n").length }, (_, i) => i + 1).join("\n");
    };
    field.addEventListener("input", updateNumbers);
    field.addEventListener("keydown", event => {
      if (event.key === "Tab") {
        event.preventDefault();
        field.setRangeText("  ", field.selectionStart, field.selectionEnd, "end");
        updateNumbers();
      }
      if ((event.ctrlKey || event.metaKey) && event.key === "Enter") runPlayground();
    });
    updateNumbers();
  });

  document.querySelectorAll("[data-playground-tab]").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll("[data-playground-tab]").forEach(item => {
        const selected = item === tab;
        item.classList.toggle("active", selected);
        item.setAttribute("aria-selected", String(selected));
      });
      document.querySelectorAll("[data-playground-view]").forEach(view => {
        const selected = view.dataset.playgroundView === tab.dataset.playgroundTab;
        view.hidden = !selected;
        view.classList.toggle("active", selected);
      });
    });
  });

  const runPlayground = () => {
    const preview = document.querySelector("#topic-preview");
    const values = Object.fromEntries(fields.map(field => [field.dataset.code, field.value]));
    let { html, css, js } = values;

    let cssForPreview = css;
    let jsForPreview = js;

    if (post.id === "transition-animation-snippet") {
      cssForPreview += `
html, body { width: 100%; height: 100%; margin: 0; }
body { display: grid; place-items: center; overflow: hidden; background: #89e9c2; font-family: Arial, sans-serif; }
#bodymovin { position: fixed; inset: 0; width: 100%; height: 100%; }
.modal { position: fixed; inset: 0; display: grid; place-items: center; pointer-events: none; }
.modal__content { width: min(420px, calc(100% - 40px)); opacity: 0; text-align: center; transform: scale(.8) translateY(-20px); transition: .8s cubic-bezier(.09,.52,.25,1); }
.modal__content h1 { margin: 0 0 12px; text-transform: uppercase; letter-spacing: .25em; }
.modal__content p { line-height: 1.8; }
.open .modal__content { opacity: 1; transform: scale(1) translateY(0); }
#close { position: fixed; z-index: 10; top: 16px; right: 16px; width: 44px; height: 44px; border: 0; background: transparent; font-size: 28px; opacity: 0; cursor: pointer; }
.open #close { opacity: 1; }
`;
      jsForPreview = jsForPreview.replace(/bodymovin\.loadAnimation/g, "lottie.loadAnimation");
      jsForPreview = `window.bodymovin = window.lottie || window.bodymovin;\n${jsForPreview}`;
    }

    cssForPreview = cssForPreview.replace(/<\/style/gi, "<\\/style");
    jsForPreview = jsForPreview.replace(/<\/script/gi, "<\\/script");

    let libraries = jsForPreview.includes("new Vue")
      ? `<script src="https://cdn.jsdelivr.net/npm/vue@2.7.16/dist/vue.min.js"></script>`
      : "";
    if (jsForPreview.includes("$(") || jsForPreview.includes("jQuery")) {
      libraries += `<script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js"></script>`;
    }
    if (post.id === "transition-animation-snippet") {
      libraries += `<script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js"></script>`;
    }
    preview.srcdoc = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width">${libraries}<style>${cssForPreview}</style></head><body>${values.html}<script>${jsForPreview}<\/script></body></html>`;
  };

  document.querySelector("#run-playground").addEventListener("click", runPlayground);
  document.querySelector("#reset-playground").addEventListener("click", () => {
    fields.forEach(field => { field.value = starter[field.dataset.code]; });
    fields.forEach(field => field.dispatchEvent(new Event("input")));
    runPlayground();
  });
  runPlayground();

  const preview = document.querySelector("#topic-preview");
  document.querySelectorAll(".zoom-button").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".zoom-button").forEach(item => item.classList.remove("active"));
      button.classList.add("active");

      const scale = Number(button.dataset.zoom);
      preview.style.transformOrigin = "top left";
      preview.style.transform = scale === 1 ? "none" : `scale(${scale})`;
      preview.style.width = `${100 / scale}%`;
      preview.style.height = `${100 / scale}%`;
      preview.parentElement.scrollTo({ top: 0, left: 0 });
    });
  });
}
function render() {
  document.body.classList.remove("playground-page");
  const match = location.hash.match(/^#post\/([\w-]+)$/);
  if (match) {
    const post = posts.find(item => item.id === match[1]);
    app.innerHTML = post ? playgroundTemplate(post) : homeTemplate();
    document.title = post ? `${post.title} — Code Notes Playground` : "Code Notes — Góc chia sẻ công nghệ";
    if (post) setupPlayground(post);
  } else {
    app.innerHTML = homeTemplate();
    document.title = "Code Notes — Góc chia sẻ công nghệ";
  }
  window.scrollTo({ top: 0, behavior: "smooth" });

  document.querySelectorAll(".filter-button").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-button").forEach(item => item.classList.remove("active"));
      button.classList.add("active");
      const category = button.dataset.category;
      document.querySelectorAll(".post-card").forEach(card => {
        card.hidden = category !== "Tất cả" && card.dataset.category !== category;
      });
    });
  });
}

window.addEventListener("hashchange", render);

document.querySelector(".menu-button").addEventListener("click", event => {
  const nav = document.querySelector(".main-nav");
  const open = nav.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", String(open));
});

posts.forEach((post, index) => {
  if (post.code) return;

  const palettes = ["#c8dd78", "#a8c7f0", "#e7a98f", "#b9a8d9", "#86c6ab", "#e1bd72"];
  post.code = {
    html: `<main class="demo">
  <span class="demo-tag">${post.category} / ${post.index}</span>
  <h1>${post.title}</h1>
  <p class="demo-copy">${post.excerpt}</p>
  <button id="action">Thử tương tác</button>
  <div class="counter">Bấm được: <strong id="count">0</strong></div>
</main>`,
    css: `* { box-sizing: border-box; }
body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #f4f1e8;
  color: #171914;
  font-family: Arial, sans-serif;
}
.demo {
  width: min(420px, calc(100% - 32px));
  padding: 38px;
  border: 1px solid #cac8bd;
  background: #fffdf7;
  box-shadow: 10px 10px 0 ${palettes[index]};
}
.demo-tag { font: 10px monospace; letter-spacing: .12em; text-transform: uppercase; }
h1 { margin: 14px 0 12px; font: 600 36px/1 Georgia, serif; }
.demo-copy { color: #696c62; line-height: 1.6; }
button { margin-top: 10px; padding: 11px 16px; border: 0; background: #171914; color: white; cursor: pointer; }
.counter { margin-top: 18px; color: #777b70; font-size: 12px; }`,
    js: `let count = 0;
const button = document.querySelector("#action");
const output = document.querySelector("#count");

button.addEventListener("click", () => {
  count += 1;
  output.textContent = String(count);
  button.textContent = count === 1 ? "Tiếp tục!" : "Thử lại lần " + (count + 1);
});`
  };
});

render();
