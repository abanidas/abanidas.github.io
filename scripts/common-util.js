window.onscroll = function() {scrollFunction()};
	
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "16px 20px";
    document.getElementById("navbar").style.opacity = "0.5";
    document.getElementById("logo").style.fontSize = "70%";
  } else {
    document.getElementById("navbar").style.padding = "40px 30px";
    document.getElementById("navbar").style.opacity = "1";
    document.getElementById("logo").style.fontSize = "100%";
  }
}

/*$(document).ready(function(){
	$("#navDiv").load("/navigation.html");
});*/