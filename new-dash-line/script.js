// Set up variables
let firstAnimationCompleted = false;
const path1 = document.getElementById('Path_440');
const path2 = document.getElementById('Path_4402');
const fill1 = document.getElementById('theFill');
const fill2 = document.getElementById('theFill2');
const l1 = path1.getTotalLength();
const l2 = path2.getTotalLength();

// Set the initial dash offset and dash array for both paths
fill1.setAttributeNS(null, 'stroke-dasharray', l1);
fill1.setAttributeNS(null, 'stroke-dashoffset', l1);
fill2.setAttributeNS(null, 'stroke-dasharray', l2);
fill2.setAttributeNS(null, 'stroke-dashoffset', l2);

// Add scroll event listener
window.addEventListener('scroll', function () {
	const e = document.documentElement;
	const dashoffset1 =
		l1 - (window.scrollY * l1) / (e.scrollHeight - e.clientHeight);
	const dashoffset2 =
		l2 - (window.scrollY * l2) / (e.scrollHeight - e.clientHeight);

	// Start the first animation if it hasn't completed yet
	if (!firstAnimationCompleted) {
		fill1.setAttributeNS(null, 'stroke-dashoffset', 2 * dashoffset1);
		if (dashoffset1 <= 0) {
			firstAnimationCompleted = true;
		}
	}

	// Start the second animation once the first animation has completed
	if (firstAnimationCompleted) {
		fill2.setAttributeNS(null, 'stroke-dashoffset', 2 * dashoffset2);
	}
});
