const myPath = document.getElementById('my-path');
const mySvg = document.getElementById('my-svg');

const pathLength = myPath.getTotalLength();
myPath.setAttributeNS(null, 'stroke-dasharray', pathLength);
myPath.setAttributeNS(null, 'stroke-dashoffset', pathLength);

window.addEventListener('scroll', function () {
	const scrollPercentage =
		window.scrollY / (document.body.scrollHeight - window.innerHeight);
	const drawLength = pathLength * scrollPercentage;
	myPath.setAttributeNS(null, 'stroke-dashoffset', pathLength - drawLength);
});
