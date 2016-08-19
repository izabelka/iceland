---
---

var scrollLength = document.body.offsetHeight - window.innerHeight
var pathLength = document.getElementById("path").getTotalLength()

window.onscroll = function() {
	var position = document.getElementById("path").getPointAtLength(pathLength * (document.body.scrollTop / scrollLength))
	document.getElementById("point").setAttribute("cx", position.x)
	document.getElementById("point").setAttribute("cy", position.y)
}
