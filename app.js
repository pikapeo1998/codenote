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
      js: ``
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
  max-height: calc(100vh - 80px);
  margin: auto;
  box-sizing: border-box;
  background: white;
  text-align: center;
  padding: 40px 80px;
  box-shadow: 0 1px 10px rgba(255, 255, 255, 0.35);
  opacity: 0;
  pointer-events: none;
  transition: 0.35s ease-in-out;
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
    box-sizing: border-box;
    padding: 40px;
    background: rgba(0, 0, 0, 0.75);
}

.modal__content {
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

// Load the bodymovin animation
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

  {
    id: "Social-Media-Icon-with-Popups",
    index: "06",
    category: "Pop-up",
    title: "Social Media Icons with Popups (HTML + Pure CSS Only)",
    excerpt: "Social Media Icons with Popups (HTML + Pure CSS Only)",
    date: "25.11.2026",
    readTime: "1 phút đọc",
    image: "assets/pop-up/topic-6.jpg",
    embedUrl: "https://codepen.io/abdelrhmansaid/pen/OJRNOpQ",
    code: {
      html: `<ul class="wrapper">
  <li class="icon facebook">
    <span class="tooltip">Facebook</span>
    <span><i class="fab fa-facebook-f"></i></span>
  </li>
  <li class="icon twitter">
    <span class="tooltip">Twitter</span>
    <span><i class="fab fa-twitter"></i></span>
  </li>
  <li class="icon instagram">
    <span class="tooltip">Instagram</span>
    <span><i class="fab fa-instagram"></i></span>
  </li>
  <li class="icon github">
    <span class="tooltip">Github</span>
    <span><i class="fab fa-github"></i></span>
  </li>
  <li class="icon youtube">
    <span class="tooltip">Youtube</span>
    <span><i class="fab fa-youtube"></i></span>
  </li>
</ul>`,
      css: `/*
    Auther: Abdelrhman Said
*/

@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:focus,
*:active {
  outline: none !important;
  -webkit-tap-highlight-color: transparent;
}

html,
body {
  display: grid;
  height: 100%;
  width: 100%;
  font-family: "Poppins", sans-serif;
  place-items: center;
  background: linear-gradient(315deg, #ffffff, #d7e1ec);
}

.wrapper {
  display: inline-flex;
  list-style: none;
}

.wrapper .icon {
  position: relative;
  background: #ffffff;
  border-radius: 50%;
  padding: 15px;
  margin: 10px;
  width: 50px;
  height: 50px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip {
  position: absolute;
  top: 0;
  font-size: 14px;
  background: #ffffff;
  color: #ffffff;
  padding: 5px 8px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip::before {
  position: absolute;
  content: "";
  height: 8px;
  width: 8px;
  background: #ffffff;
  bottom: -3px;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon:hover .tooltip {
  top: -45px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.wrapper .icon:hover span,
.wrapper .icon:hover .tooltip {
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

.wrapper .facebook:hover,
.wrapper .facebook:hover .tooltip,
.wrapper .facebook:hover .tooltip::before {
  background: #1877F2;
  color: #ffffff;
}

.wrapper .twitter:hover,
.wrapper .twitter:hover .tooltip,
.wrapper .twitter:hover .tooltip::before {
  background: #1DA1F2;
  color: #ffffff;
}

.wrapper .instagram:hover,
.wrapper .instagram:hover .tooltip,
.wrapper .instagram:hover .tooltip::before {
  background: #E4405F;
  color: #ffffff;
}

.wrapper .github:hover,
.wrapper .github:hover .tooltip,
.wrapper .github:hover .tooltip::before {
  background: #333333;
  color: #ffffff;
}

.wrapper .youtube:hover,
.wrapper .youtube:hover .tooltip,
.wrapper .youtube:hover .tooltip::before {
  background: #CD201F;
  color: #ffffff;
}
`,
        js: `/*`
    },
  },

  {
    id: "Colourful-Flower-Popup-Menu",
    index: "07",
    category: "Pop-up",
    title: "Colourful Flower Popup Menu (HTML + Pure CSS Only)",
    excerpt: "Colourful Flower Popup Menu (HTML + Pure CSS Only)",
    date: "25.11.2026",
    readTime: "1 phút đọc",
    image: "assets/pop-up/topic-7.jpg",
    embedUrl: "https://codepen.io/jasperlachance/pen/yOJdRr",
    code: {
      html: `<nav class="menu">
   <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open" />
   <label class="menu-open-button" for="menu-open">
    <span class="lines line-1"></span>
    <span class="lines line-2"></span>
    <span class="lines line-3"></span>
  </label>

   <a href="#" class="menu-item blue"> <i class="fa-solid fa-anchor"></i> </a>
   <a href="#" class="menu-item green"> <i class="fa-solid fa-mug-hot"></i> </a>
   <a href="#" class="menu-item red"> <i class="fa-solid fa-heart"></i> </a>
   <a href="#" class="menu-item purple"> <i class="fa-solid fa-microphone"></i> </a>
   <a href="#" class="menu-item orange"> <i class="fa-solid fa-star"></i> </a>
   <a href="#" class="menu-item lightblue"> <i class="fa-solid fa-gem"></i> </a>
</nav>`,
      css: `body {
   padding: 0;
   margin: 0;
   background: #596778;
   color: #EEEEEE;
   text-align: center;
   font-family: "Lato", sans-serif;
}


@media screen and (max-width: 700px) {
   body {
      padding: 170px 0 0 0;
      width: 100%
   }
}

a {
   color: inherit;
}

.menu-item,
.menu-open-button {
   background: #EEEEEE;
   border-radius: 100%;
   width: 80px;
   height: 80px;
   margin-left: -40px;
   position: absolute;
   color: #FFFFFF;
   text-align: center;
   line-height: 80px;
   -webkit-transform: translate3d(0, 0, 0);
   transform: translate3d(0, 0, 0);
   -webkit-transition: -webkit-transform ease-out 200ms;
   transition: -webkit-transform ease-out 200ms;
   transition: transform ease-out 200ms;
   transition: transform ease-out 200ms, -webkit-transform ease-out 200ms;
}

.menu-open {
   display: none;
}

.lines {
   width: 25px;
   height: 3px;
   background: #596778;
   display: block;
   position: absolute;
   top: 50%;
   left: 50%;
   margin-left: -12.5px;
   margin-top: -1.5px;
   -webkit-transition: -webkit-transform 200ms;
   transition: -webkit-transform 200ms;
   transition: transform 200ms;
   transition: transform 200ms, -webkit-transform 200ms;
}

.line-1 {
   -webkit-transform: translate3d(0, -8px, 0);
   transform: translate3d(0, -8px, 0);
}

.line-2 {
   -webkit-transform: translate3d(0, 0, 0);
   transform: translate3d(0, 0, 0);
}

.line-3 {
   -webkit-transform: translate3d(0, 8px, 0);
   transform: translate3d(0, 8px, 0);
}

.menu-open:checked + .menu-open-button .line-1 {
   -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
   transform: translate3d(0, 0, 0) rotate(45deg);
}

.menu-open:checked + .menu-open-button .line-2 {
   -webkit-transform: translate3d(0, 0, 0) scale(0.1, 1);
   transform: translate3d(0, 0, 0) scale(0.1, 1);
}

.menu-open:checked + .menu-open-button .line-3 {
   -webkit-transform: translate3d(0, 0, 0) rotate(-45deg);
   transform: translate3d(0, 0, 0) rotate(-45deg);
}

.menu {
   margin: auto;
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   width: 80px;
   height: 80px;
   text-align: center;
   box-sizing: border-box;
   font-size: 26px;
}


/* .menu-item {
   transition: all 0.1s ease 0s;
} */

.menu-item:hover {
   background: #EEEEEE;
   color: #3290B1;
}

.menu-item:nth-child(3) {
   -webkit-transition-duration: 180ms;
   transition-duration: 180ms;
}

.menu-item:nth-child(4) {
   -webkit-transition-duration: 180ms;
   transition-duration: 180ms;
}

.menu-item:nth-child(5) {
   -webkit-transition-duration: 180ms;
   transition-duration: 180ms;
}

.menu-item:nth-child(6) {
   -webkit-transition-duration: 180ms;
   transition-duration: 180ms;
}

.menu-item:nth-child(7) {
   -webkit-transition-duration: 180ms;
   transition-duration: 180ms;
}

.menu-item:nth-child(8) {
   -webkit-transition-duration: 180ms;
   transition-duration: 180ms;
}

.menu-item:nth-child(9) {
   -webkit-transition-duration: 180ms;
   transition-duration: 180ms;
}

.menu-open-button {
   z-index: 2;
   -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
   transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
   -webkit-transition-duration: 400ms;
   transition-duration: 400ms;
   -webkit-transform: scale(1.1, 1.1) translate3d(0, 0, 0);
   transform: scale(1.1, 1.1) translate3d(0, 0, 0);
   cursor: pointer;
   box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
}

.menu-open-button:hover {
   -webkit-transform: scale(1.2, 1.2) translate3d(0, 0, 0);
   transform: scale(1.2, 1.2) translate3d(0, 0, 0);
}

.menu-open:checked + .menu-open-button {
   -webkit-transition-timing-function: linear;
   transition-timing-function: linear;
   -webkit-transition-duration: 200ms;
   transition-duration: 200ms;
   -webkit-transform: scale(0.8, 0.8) translate3d(0, 0, 0);
   transform: scale(0.8, 0.8) translate3d(0, 0, 0);
}

.menu-open:checked ~ .menu-item {
   -webkit-transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
   transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
}

.menu-open:checked ~ .menu-item:nth-child(3) {
   transition-duration: 180ms;
   -webkit-transition-duration: 180ms;
   -webkit-transform: translate3d(0.08361px, -104.99997px, 0);
   transform: translate3d(0.08361px, -104.99997px, 0);
}

.menu-open:checked ~ .menu-item:nth-child(4) {
   transition-duration: 280ms;
   -webkit-transition-duration: 280ms;
   -webkit-transform: translate3d(90.9466px, -52.47586px, 0);
   transform: translate3d(90.9466px, -52.47586px, 0);
}

.menu-open:checked ~ .menu-item:nth-child(5) {
   transition-duration: 380ms;
   -webkit-transition-duration: 380ms;
   -webkit-transform: translate3d(90.9466px, 52.47586px, 0);
   transform: translate3d(90.9466px, 52.47586px, 0);
}

.menu-open:checked ~ .menu-item:nth-child(6) {
   transition-duration: 480ms;
   -webkit-transition-duration: 480ms;
   -webkit-transform: translate3d(0.08361px, 104.99997px, 0);
   transform: translate3d(0.08361px, 104.99997px, 0);
}

.menu-open:checked ~ .menu-item:nth-child(7) {
   transition-duration: 580ms;
   -webkit-transition-duration: 580ms;
   -webkit-transform: translate3d(-90.86291px, 52.62064px, 0);
   transform: translate3d(-90.86291px, 52.62064px, 0);
}

.menu-open:checked ~ .menu-item:nth-child(8) {
   transition-duration: 680ms;
   -webkit-transition-duration: 680ms;
   -webkit-transform: translate3d(-91.03006px, -52.33095px, 0);
   transform: translate3d(-91.03006px, -52.33095px, 0);
}

.menu-open:checked ~ .menu-item:nth-child(9) {
   transition-duration: 780ms;
   -webkit-transition-duration: 780ms;
   -webkit-transform: translate3d(-0.25084px, -104.9997px, 0);
   transform: translate3d(-0.25084px, -104.9997px, 0);
}

.blue {
   background-color: #669AE1;
   box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
   text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
}

.blue:hover {
   color: #669AE1;
   text-shadow: none;
}

.green {
   background-color: #70CC72;
   box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
   text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
}

.green:hover {
   color: #70CC72;
   text-shadow: none;
}

.red {
   background-color: #FE4365;
   box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
   text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
}

.red:hover {
   color: #FE4365;
   text-shadow: none;
}

.purple {
   background-color: #C49CDE;
   box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
   text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
}

.purple:hover {
   color: #C49CDE;
   text-shadow: none;
}

.orange {
   background-color: #FC913A;
   box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
   text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
}

.orange:hover {
   color: #FC913A;
   text-shadow: none;
}

.lightblue {
   background-color: #62C2E4;
   box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
   text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
}

.lightblue:hover {
   color: #62C2E4;
   text-shadow: none;
}

.credit {
   margin: 24px 20px 120px 0;
   text-align: right;
   color: #EEEEEE;
}

.credit a {
   padding: 8px 0;
   color: #C49CDE;
   text-decoration: none;
   transition: all 0.3s ease 0s;
}

.credit a:hover {
   text-decoration: underline;
}
`,
      js: ``
    },
  },

  {
    id: "3D-Movement-Responsive-Popup",
    index: "08",
    category: "Pop-up",
    title: "3D Movement Responsive Popup",
    excerpt: "3D Movement Responsive Popup",
    date: "25.11.2026",
    readTime: "1 phút đọc",
    image: "assets/pop-up/topic-8.jpg",
    embedUrl: "https://codepen.io/MarcMalignan/pen/OJQZdY",
    code: {
      html: `<div class="moving-zone">
    <div class="popup">
        <div class="popup-content">
            <div class="popup-text">
                I'm a new kind of <b>popup</b>.<br/>
                Move your <b>mouse</b> around !
            </div>
        </div>
    </div>
</div>`,
      css: `html, body { height: 100%; }
body {
    margin: 0;
    background: radial-gradient(#666, #222);
    overflow: hidden;
}

.moving-zone {
    position: absolute;
    top:50%; left:50%;
    width:300px; height:120px;
    margin: -60px 0 0 -150px;
    perspective: 800px;
}
.popup {
    position: absolute;
    width:300px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 20px 0 20px 0;
    cursor: pointer;
    transform-style: preserve-3d;
    background: -webkit-linear-gradient(top left, white 50%, coral 50%);
    background:    -moz-linear-gradient(top left, white 50%, coral 50%);
    background:     -ms-linear-gradient(top left, white 50%, coral 50%);
    background:      -o-linear-gradient(top left, white 50%, coral 50%);
    background:         linear-gradient(top left, white 50%, coral 50%);
}
.popup:before {
    content: '';
    position: absolute;
    left:5%; top:5%;
    width:90%; height:90%;
    border-radius: inherit;
    background: rgba(0,0,0,.1);
    box-shadow: 0 0 40px 20px rgba(0,0,0,.1);
    transform: translateZ(-100px);
}
.popup-content {
    background: #444;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 10px 0 10px 0;
}
.popup-text {
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    line-height: 30px;
    font-weight: 100;
    text-align: center;
    transform: translateZ(15px);
}
.popup-text b {
    color: coral;
    font-weight: 300;
}`,
        js: `var moveForce = 30; // max popup movement in pixels
var rotateForce = 20; // max popup rotation in deg

$(document).mousemove(function(e) {
    var docX = $(document).width();
    var docY = $(document).height();
    
    var moveX = (e.pageX - docX/2) / (docX/2) * -moveForce;
    var moveY = (e.pageY - docY/2) / (docY/2) * -moveForce;
    
    var rotateY = (e.pageX / docX * rotateForce*2) - rotateForce;
    var rotateX = -((e.pageY / docY * rotateForce*2) - rotateForce);
    
    $('.popup')
        .css('left', moveX+'px')
        .css('top', moveY+'px')
        .css('transform', 'rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)');
});`
    },
  },

  {
    id: "Magnific-Gallery",
    index: "09",
    category: "Pop-up",
    title: "Magnific Gallery",
    excerpt: "Magnific Gallery",
    date: "25.11.2026",
    readTime: "1 phút đọc",
    image: "assets/pop-up/topic-9.jpg",
    embedUrl: "https://codepen.io/mican/pen/awxmpY",
    code: {
      html: `%article.gallery
  - [1081, 1014, 267, 266, 634, 923, 682, 173, 943].each do |i|
    - height = 200 * [5,6,7,8].shuffle.first.to_i
    - width =  200 * [5,6,7,8].shuffle.first.to_i
    %a.gallery-link{:href => "https://unsplash.it/#{width}/#{height}?image=#{i}"}
      %figure.gallery-image
        %img{src: "https://unsplash.it/#{width}/#{height}?image=#{i}", width: width, height: height}
        %figcaption Photo caption
        
        
%footer#footer{role: 'contentinfo'}

  .container
    %a.logo{href: 'https://codepen.io/collection/XRoxGR', rel: 'home'} Calibration theme
    %a.copy{href: 'https://mobilemarkup.com', target: '_blank'} &copy; mobileMarkup.com`,
      css: `%gallery-image-caption
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%,-50%)
  font-size: 14px
  color: rgba(white,0)
  padding: 1em
  transition: all .2s ease
  font-weight: 600
  max-width: calc(100% - 9em)
  line-height: 1.25
  text-align: center
  box-sizing: border-box


  &:before, &:after
    content: ''
    position: absolute
    background: rgba(black,.2)
    width: 100%
    height: 100%
    padding: 1em
    transition: all .3s ease-in-out
    opacity: 0
    z-index: -1

  &:before, &:after
    right: 100%
    bottom: 100%
  &:after
    left: 100%
    top: 100%

%gallery-image-caption-visible
  color: rgba(white,1)
  text-shadow: 0 0 1px rgba(black,.2)
  transition: all .2s ease .3s
  &:before, &:after
    opacity: 1
  &:before
    right: -1.5em
    bottom: -1.5em
  &:after
    left: -1.5em
    top: -1.5em

html
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  text-rendering: optimizelegibility
    
body
  font-family: 'Montserrat', sans-serif
    
.gallery
  
  column-gap: 0
  @media (min-width: 480px)
    column-count: 2
  @media (min-width: 1260px)
    column-count: 3

.gallery-image
  position: relative
  margin: 0
  padding: 0
  &:before, &:after
    content: ''
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    border: 16px solid rgba(black,.1)
    transition: all .2s
    will-change: border
  &:after
    border-width: 0

  img
    display: block
    max-width: 100%
    height: auto
    
  html:not(.touch) &
    overflow: hidden
    figcaption
      @extend %gallery-image-caption
    &:hover
      &:before
        border-width: 16px
      &:after
        border-width: 32px
      figcaption
        @extend %gallery-image-caption-visible

  .touch &
    figcaption
      @extend %gallery-image-caption
      @extend %gallery-image-caption-visible
      top: auto
      bottom:   2em
      
.mfp-with-zoom
  .mfp-container, &.mfp-bg
    opacity: 0
    backface-visibility: hidden
    transition: all 0.3s ease-out

  &.mfp-bg
    background-color: rgba(black,.9)

  &.mfp-ready
    .mfp-container
      opacity: 1
    &.mfp-bg
      opacity: 1
  &.mfp-removing



    .mfp-container, &.mfp-bg
      opacity: 0


  // .mfp-nomargins
  img.mfp-img
    padding: 0

  .mfp-figure:after
    top: 0
    bottom: 0
  .mfp-container
    padding: 0

  .mfp-content
    overflow: hidden


  .mfp-bottom-bar
    top: auto
    bottom: 0
    margin-top: 0

  .mfp-title
    @extend %gallery-image-caption
    top: auto
    bottom: 2em

  &.mfp-ready .mfp-title
    @extend %gallery-image-caption-visible




.mfp-arrow
  opacity: 1
  margin-top: 0!important
  width: 20%
  height: 30%
  // background: rgba(black,.2)!important
  transform: translateY(-50%)

  &:hover, &:focus

  &:before, &:after
    margin: 0
    border: none
    width: 2rem
    height: 2rem

    transform: rotate(-45deg) translate(-50%,-100%)
    opacity: 1
    top: 50%
    left: 50%
    transition: all .15s

  &:active
    transform: translateY(-50%) scale(.95)

.mfp-arrow-left
  left: 0
  &:before, &:after
    border-top: 2px solid white
    border-left: 2px solid white
  &:before
  &:after
    margin-left: 2rem

  &:hover, &:active
    &:before
      margin-left: 2rem
    &:after
      margin-left: 0

.mfp-arrow-right
  right: 0
  &:before, &:after
    border-right: 2px solid white
    border-bottom: 2px solid white
  &:before
  &:after
    margin-left: 2rem

  &:hover
    &:before
      margin-left: 2rem
    &:after
      margin-left: 0



button.mfp-close
  opacity: 1
  margin-top: 0!important
  width: 20%
  height: 30%
  font: 0/0 serif
  text-shadow: none
  color: transparent
  &:hover, &:focus

  &:before, &:after
    content: ''
    position: absolute
    top: 50%
    left: 50%
    margin: 0
    border: none
    width: 2rem
    height: 2rem
    opacity: 1
    transition: all .15s
    transform-origin: 0 0
    border-top: 2px solid white
    border-left: 2px solid white
    

  &:before
    transform: rotate(-45deg)
  &:after
    transform: rotate(135deg)
  &:hover
    &:before
      transform: rotate(135deg)
    &:after
      transform: rotate(315deg)

  &:active
    transform: scale(.95)

a
  text-decoration: none
  color: inherit
  
[id=footer]
  margin-top: 10vh
  padding: 10vh 0
  text-align: center
  .container
    position: relative
    &:before, &:after
      content: ''
      position: absolute
      bottom: 100%
      left: 20px
      z-index: 10
      border-top: 2px solid
      width: 10%
      margin-bottom: 10vh
    &:after
      left: auto
      right: 20px

  *
    display: block
    + *
      margin-top: 5vh
  .logo
    font-weight: 600
    font-size: 1.5em
  .copy
    text-transform: uppercase
    font-size: .75em
    font-weight: 600

`,
        js: `const links = [...document.querySelectorAll('.gallery-link')];
const modal = document.createElement('div');
modal.className = 'gallery-modal';
modal.innerHTML = '<button class="gallery-modal-close" aria-label="Đóng">×</button><button class="gallery-modal-prev" aria-label="Ảnh trước">‹</button><img alt=""><button class="gallery-modal-next" aria-label="Ảnh sau">›</button><span class="gallery-modal-caption"></span>';
document.body.appendChild(modal);

const modalImage = modal.querySelector('img');
const caption = modal.querySelector('.gallery-modal-caption');
let currentIndex = 0;

function showImage(index) {
  currentIndex = (index + links.length) % links.length;
  modalImage.style.opacity = '0';
  modalImage.src = links[currentIndex].href;
  modalImage.alt = links[currentIndex].title || '';
  caption.textContent = links[currentIndex].title || '';
  modalImage.onload = () => { modalImage.style.opacity = ''; };
}

function openModal(index) {
  showImage(index);
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

links.forEach((link, index) => {
  link.addEventListener('click', event => {
    event.preventDefault();
    openModal(index);
  });
});

modal.querySelector('.gallery-modal-close').addEventListener('click', closeModal);
modal.querySelector('.gallery-modal-prev').addEventListener('click', () => showImage(currentIndex - 1));
modal.querySelector('.gallery-modal-next').addEventListener('click', () => showImage(currentIndex + 1));
modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });
document.addEventListener('keydown', event => {
  if (!modal.classList.contains('open')) return;
  if (event.key === 'Escape') closeModal();
  if (event.key === 'ArrowLeft') showImage(currentIndex - 1);
  if (event.key === 'ArrowRight') showImage(currentIndex + 1);
});`
    },
  },

  {
    id: "No-JS-modal-popup-window",
    index: "10",
    category: "Pop-up",
    title: "No JS modal popup window",
    excerpt: "No JS modal popup window",
    date: "25.11.2026",
    readTime: "1 phút đọc",
    image: "assets/pop-up/topic-10.jpg",
    embedUrl: "https://codepen.io/mican/pen/awxmpY",
    code: {
      html: `<!--End of Wrap -->
<div class="wrap">
    <h1>Pure <span>CSS</span> Modal Popup</h1>

</div>
<!--End of Wrap -->


<!--Start of Modal -->
<div class="modal">
    <input id="modal__trigger" type="checkbox" />
    <label for="modal__trigger">Launch Modal</label>
    <div class="modal__overlay" role="dialog" aria-labelledby="modal__title" aria-describedby="modal_desc">
        <div class="modal__wrap">
            <label for="modal__trigger">&#10006;</label>
            <h2 id="modal__title">This is your modal content</h2>
            <p id="modal__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac laoreet elit. Phasellus dignissim purus vitae urna cursus, quis congue ligula tristique. Ut nec blandit risus. Donec at orci ut justo venenatis viverra. Suspendisse in volutpat lacus. In enim est, dapibus eget ipsum sed, suscipit ultrices diam.</p>
        </div>
    </div>
</div>
<!--End of Modal -->`,
      css: `@import url(https://fonts.googleapis.com/css?family=Lato:300,400,900);
@import url(https://fonts.googleapis.com/css?family=Audiowide);

$lato: 'Lato', sans-serif;

//color
$yellow: #FFD300; 
$white: #f2f1f1;
$black: #000000;
$black-light: #5E5E5E;

//font weights:
$thin: 300;
$normal: 400;
$bold: 900;


/*==================================== 
  Some styles to spruce up the demo
=====================================*/ 

body {
  background: $white;
  color: $black-light; 
  font-family: $lato;
  font-weight: $thin;
  text-shadow: 1px 1px 1px #fff;
  text-align: center;
}

h1 { 
    font-size: 1.5em;
    font-size: 7vw;
    line-height: 1.2; 
    margin: 0;
    
    @media (min-width: 500px) {
        font-size: 2.25em;
        font-size: 7vw;
    }
  
    @media (min-width: 1000px) {
        font-size: 4.5em;
    }
}

h2 {
    font-size: 1em;
    line-height: 1.2;
    margin: 1.414em 0 0.5em;
    
    @media (min-width: 500px) {
        font-size: 1.5em;
    }
    
    @media (min-width: 800px) {
        font-size: 1.8em;
    }
}

h1 { 
  color: $black;
  font-family: "Audiowide", cursive;
  font-weight: $bold;
  margin: 0.5em 0 2.5em;
  span {
      color:$yellow;
  }
}

.wrap {
  padding: 1em;
  text-align: center;
  @media (min-width: 700px) {
    padding: 1em 2em;
  }
}


/*==================================== 
  Our Modal Window styles
=====================================*/
.modal {
  background: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.15);
  display: inline-block;
  padding: 1em;
}
@media (min-width: 43.75em) {
  .modal {
    padding: 1.5em;
  }
}
.modal > label {
  background: #FFD300;
  border: 1px solid #f0c600;
  border-radius: .2em;
  color: #000000;
  cursor: pointer;
  display: inline-block;
  font-weight: bold;
  padding: 0.75em 1.5em;
  text-shadow: 1px 1px 1px #fff;
  transition: all 0.55s;
}
.modal > label:hover {
  transform: scale(0.97);
}
.modal__overlay {
  background: #000000;
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  text-align: center;
  text-shadow: none;
  top: 0;
  z-index: 600;
}
.modal__wrap {
  padding: 1em 0;
  position: relative;
  margin: 0 auto;
  max-width: 500px;
  width: 90%;
}
@media (min-width: 50em) {
  .modal__wrap {
    padding: 1.75em;
  }
}
@media (min-height: 37.5em) {
  .modal__wrap {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -80%);
  }
}
.modal__wrap label {
  background: #FFD300;
  border-radius: 50%;
  color: #000000;
  cursor: pointer;
  display: inline-block;
  height: 1.5em;
  line-height: 1.5;
  position: absolute;
  right: .5em;
  top: .5em;
  width: 1.5em;
}
.modal__wrap h2 {
  color: #FFD300;
  margin-bottom: 1em;
  text-transform: uppercase;
}
.modal__wrap p {
  color: #FFD300;
  text-align: justify;
}
.modal input:focus ~ label {
  transform: scale(0.97);
}

input {
  position: absolute;
  top: -1000px;
}

.modal__overlay {
  opacity: 0;
  transform: scale(0.5);
  transition: all 0.75s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  z-index: -100;
}

input:checked ~ .modal__overlay {
  opacity: 1;
  transform: scale(1);
  z-index: 800;
}`,
        // js: ``
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

    if (post.id === "Magnific-Gallery") {
      html = `<article class="gallery">
  <a class="gallery-link" href="https://picsum.photos/id/1081/1200/900" title="Mountain view"><figure class="gallery-image"><img src="https://picsum.photos/id/1081/900/600" alt="Mountain view"><figcaption>Mountain view</figcaption></figure></a>
  <a class="gallery-link" href="https://picsum.photos/id/1014/1200/900" title="Lake"><figure class="gallery-image"><img src="https://picsum.photos/id/1014/900/600" alt="Lake"><figcaption>Lake</figcaption></figure></a>
  <a class="gallery-link" href="https://picsum.photos/id/267/1200/900" title="Forest"><figure class="gallery-image"><img src="https://picsum.photos/id/267/900/600" alt="Forest"><figcaption>Forest</figcaption></figure></a>
  <a class="gallery-link" href="https://picsum.photos/id/266/1200/900" title="Nature"><figure class="gallery-image"><img src="https://picsum.photos/id/266/900/600" alt="Nature"><figcaption>Nature</figcaption></figure></a>
  <a class="gallery-link" href="https://picsum.photos/id/634/1200/900" title="Landscape"><figure class="gallery-image"><img src="https://picsum.photos/id/634/900/600" alt="Landscape"><figcaption>Landscape</figcaption></figure></a>
  <a class="gallery-link" href="https://picsum.photos/id/923/1200/900" title="Architecture"><figure class="gallery-image"><img src="https://picsum.photos/id/923/900/600" alt="Architecture"><figcaption>Architecture</figcaption></figure></a>
  <a class="gallery-link" href="https://picsum.photos/id/682/1200/900" title="City"><figure class="gallery-image"><img src="https://picsum.photos/id/682/900/600" alt="City"><figcaption>City</figcaption></figure></a>
  <a class="gallery-link" href="https://picsum.photos/id/173/1200/900" title="Ocean"><figure class="gallery-image"><img src="https://picsum.photos/id/173/900/600" alt="Ocean"><figcaption>Ocean</figcaption></figure></a>
  <a class="gallery-link" href="https://picsum.photos/id/943/1200/900" title="Portrait"><figure class="gallery-image"><img src="https://picsum.photos/id/943/900/600" alt="Portrait"><figcaption>Portrait</figcaption></figure></a>
</article>`;
      css = `*{box-sizing:border-box}body{margin:0;padding:24px;background:#f3f0eb;font-family:Arial,sans-serif}.gallery{column-count:3;column-gap:0}.gallery-link{display:block;break-inside:avoid;text-decoration:none}.gallery-image{position:relative;margin:0;overflow:hidden;background:#ddd}.gallery-image:before,.gallery-image:after{content:'';position:absolute;z-index:2;inset:0;border:16px solid rgba(0,0,0,.1);transition:.2s;pointer-events:none}.gallery-image:after{border-width:0}.gallery-image img{display:block;width:100%;height:auto}.gallery-image figcaption{position:absolute;z-index:3;left:50%;top:50%;width:calc(100% - 9em);padding:1em;transform:translate(-50%,-50%);color:transparent;font-size:14px;font-weight:600;text-align:center;transition:.2s}.gallery-image:hover:after{border-width:32px}.gallery-image:hover figcaption{color:#fff;text-shadow:0 0 1px #000;transition-delay:.3s}.gallery-modal{position:fixed;z-index:9999;inset:0;display:grid;place-items:center;padding:48px 8%;background:rgba(0,0,0,.92);opacity:0;visibility:hidden;transition:.35s}.gallery-modal.open{opacity:1;visibility:visible}.gallery-modal img{max-width:82vw;max-height:82vh;opacity:0;transform:scale(.92);transition:.35s}.gallery-modal.open img{opacity:1;transform:scale(1)}.gallery-modal button{position:absolute;border:0;background:transparent;color:#fff;cursor:pointer}.gallery-modal-close{top:18px;right:24px;font-size:38px}.gallery-modal-prev,.gallery-modal-next{top:50%;width:20%;height:40%;transform:translateY(-50%);font-size:42px}.gallery-modal-prev{left:0}.gallery-modal-next{right:0}.gallery-modal-caption{position:absolute;bottom:16px;color:#fff}@media(max-width:1260px){.gallery{column-count:2}}@media(max-width:479px){body{padding:12px}.gallery{column-count:1}}`;
      js = `const links=[...document.querySelectorAll('.gallery-link')];const modal=document.createElement('div');modal.className='gallery-modal';modal.innerHTML='<button class="gallery-modal-close">×</button><button class="gallery-modal-prev">‹</button><img alt=""><button class="gallery-modal-next">›</button><span class="gallery-modal-caption"></span>';document.body.appendChild(modal);const image=modal.querySelector('img'),caption=modal.querySelector('.gallery-modal-caption');let index=0;function show(i){index=(i+links.length)%links.length;image.src=links[index].href;image.alt=links[index].title;caption.textContent=links[index].title}function open(i){show(i);modal.classList.add('open')}function close(){modal.classList.remove('open')}links.forEach((link,i)=>link.addEventListener('click',e=>{e.preventDefault();open(i)}));modal.querySelector('.gallery-modal-close').addEventListener('click',close);modal.querySelector('.gallery-modal-prev').addEventListener('click',()=>show(index-1));modal.querySelector('.gallery-modal-next').addEventListener('click',()=>show(index+1));modal.addEventListener('click',e=>{if(e.target===modal)close()});document.addEventListener('keydown',e=>{if(!modal.classList.contains('open'))return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(index-1);if(e.key==='ArrowRight')show(index+1});`;
      cssForPreview = css;
      jsForPreview = js;
    }
    preview.srcdoc = `
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Topic Preview</title>
  <style>${cssForPreview}</style>
</head>
<body>
  ${html}
  <script>${jsForPreview}</script>
</body>
</html>`;
  };

  document.getElementById("run-playground").addEventListener("click", runPlayground);
  document.getElementById("reset-playground")?.addEventListener("click", () => {
    fields.forEach(field => { field.value = starter[field.dataset.code]; });
    fields.forEach(field => field.dispatchEvent(new Event("input")));
    runPlayground();
  });
  runPlayground();

  document.querySelectorAll(".zoom-button").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".zoom-button").forEach(item => item.classList.remove("active"));
      button.classList.add("active");
      const scale = Number(button.dataset.zoom);
      const previewFrame = document.querySelector("#topic-preview");
      previewFrame.style.transformOrigin = "top left";
      previewFrame.style.transform = scale === 1 ? "none" : `scale(${scale})`;
      previewFrame.style.width = `${100 / scale}%`;
      previewFrame.style.height = `${100 / scale}%`;
    });
  });
}

// -------router-------
function render() {
  document.body.classList.remove("playground-page");
  const match = location.hash.match(/^#post\/([\w-]+)$/);

  if (match) {
    const post = posts.find(item => item.id === match[1]);
    if (post) {
      app.innerHTML = playgroundTemplate(post);
      document.title = `${post.title} — Code Notes Playground`;
      setupPlayground(post);
    } else {
      app.innerHTML = homeTemplate();
      document.title = "Code Notes — Góc chia sẻ công nghệ";
    }
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

document.querySelector(".menu-button")?.addEventListener("click", event => {
  const nav = document.querySelector(".main-nav");
  const open = nav.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", String(open));
});

render();