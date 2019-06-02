$( document ).ready(() => {
	Particles.init({
		selector:'.background',
		color: ["#ffbb33", "#ff4444", "#00C851", "#33b5e5", "#4285F4", "#aa66cc", "#2BBBAD", "#ffffff", "#000000"],
		maxParticles: 60,
		connectParticles: false,
		responsive: [{
			breakpoint: 800,
			options: {
				color: ["#ffbb33", "#ff4444", "#00C851", "#33b5e5", "#4285F4", "#aa66cc", "#2BBBAD"],
				maxParticles: 0,
				connectParticles: false
			}
		}]
	});
});

$(".navSelector").on("click", (e) => {
	switch(e.currentTarget.id.slice(4, e.currentTarget.id.length)) {
		case "home":
			changeLabelText("Latest Uploads", `Links for the five latest things I've uploaded.`);
			changeColor("warning");
			break;
		case "tools":
			changeLabelText("Tools", "Simple HTML/CSS tools I've build for fun.");
			changeColor("info");
			break;
		case "howTo":
			changeLabelText("Simple How-To", "HTML/CSS/JS tipps and tricks that may be useful.");
			changeColor("success");
			break;
		case "projects":
			changeLabelText("My Projects", "I've build those for test purposes.");
			changeColor("danger");
			break;
		case "other":
			changeLabelText("Other Stuff", "Small things I've build, nothing special.");
			changeColor("primary");
			break;
		case "about":
			console.log("TODO ABOUT PAGE");
			break;
		case "faq":
			console.log("TODO FAQ PAGE");
			break;
		case "git":
			break;
	}
});

// change text in label area
function changeLabelText(innerLabel, innerText) {
		$(".innerLabel").fadeOut( () => {
			$(".innerLabel").html(innerLabel);
		});
		$(".innerText").fadeOut( () => {
			$(".innerText").html(innerText);
		});
		$(".innerLabel").fadeIn();
		$(".innerText").fadeIn();
};

// change overall colors
function changeColor(changeTo) {
	let currentColor;
	let classArr = $("#mainDiv")[0].classList;
	$(".plustext")[0].style.backgroundImage = `linear-gradient(to right, var(--background), var(--${changeTo}))`;
	for (let i = 0, len = classArr.length; i < len; i++) {
		let curr = classArr[i];
		if (curr.slice(0, 5) === "text-") {
			currentColor = curr.slice(5, curr.length);
			$("#mainDiv").removeClass("text-"+currentColor);
			$("#mainDiv").removeClass("border-"+currentColor);

			$("#mainDiv").addClass("text-"+changeTo);
			$("#mainDiv").addClass("border-"+changeTo);

			$(".link").removeClass("slideColor-"+currentColor);
			$(".link").addClass("slideColor-"+changeTo);

			$(".link").removeClass("text-"+currentColor);
			$(".link").addClass("text-"+changeTo);

			$("#nav_git").removeClass("text-"+currentColor);
			$("#nav_git").addClass("text-"+changeTo);

			return;
		}
	}
};
