// function for smooth scroll on page
if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
	let delta = 0;
	if (event.wheelDelta) delta = event.wheelDelta / 120;
	else if (event.detail) delta = -event.detail / 3;

	handle(delta);
	if (event.preventDefault) event.preventDefault();
	event.returnValue = false;
}

let goUp = true;
let end = null;
let interval = null;

function handle(delta) {
	let animationInterval = 10; //lower is faster
	let scrollSpeed = 20; //lower is faster

		if (end == null) {
		end = $(window).scrollTop();
	}
	end -= 20 * delta;
	goUp = delta > 0;

	if (interval == null) {
		interval = setInterval(function () {
		let scrollTop = $(window).scrollTop();
		let step = Math.round((end - scrollTop) / scrollSpeed);
		if (scrollTop <= 0 ||
			scrollTop >= $(window).prop("scrollHeight") - $(window).height() ||
			goUp && step > -1 ||
			!goUp && step < 1 ) {
			clearInterval(interval);
			interval = null;
			end = null;
		}
		$(window).scrollTop(scrollTop + step );
		}, animationInterval);
	}
}

// ----------------------------------------------------------------------------------------------------

// function for table generator

function createTable() {
	let tableHTML = ""
	let tableEl = $(".table");
	const rowVal = $(".rows").val();
	const colVal = $(".columns").val();

	for (let i = 1; i <= rowVal; i++) {
		let tr = "<tr>"
		let td = ""

		for (let j = 1; j <= colVal; j++) {

			if (i === 1) { // if j === 1
				td = `<th class="header">${"Header"}</th>`;
			} else {
				td = `<td>${"Cell"}</td>`;
			}
			tr += td
		}
		tr += "</tr>"
		tableHTML += tr
	}
	tableEl[0].innerHTML = tableHTML;
};

$(".createTable").on("click", () => {
	createTable();
});

$(".rows").on("click", (e) => {
	e.currentTarget.select();
});
$(".columns").on("click", (e) => {
	e.currentTarget.select();
});
