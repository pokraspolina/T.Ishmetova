/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

function validator(){
  let i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
function myFunctionone() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.btn')) {
    var dropdowns = document.getElementsByClassName("first");
    validator();
  }
}
function myFunctionsecond() {
  document.getElementById("myDropdownsecond").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.btn')) {
    var dropdowns = document.getElementsByClassName("second");
    validator();
  }
}

function myFunctionthird() {
  document.getElementById("myDropdownthird").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.btn')) {
    var dropdowns = document.getElementsByClassName("third");
    validator();
  }
}
function myFunctionfour() {
  document.getElementById("myDropdownfour").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.btn')) {
    var dropdowns = document.getElementsByClassName("four");
    validator();
  }
}

function myFunctionfive() {
  document.getElementById("myDropdownfive").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.btn')) {
    var dropdowns = document.getElementsByClassName("five");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunctionnail() {
  document.getElementById("myDropdownnail").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.btn')) {
    var dropdowns = document.getElementsByClassName("nail");
    validator();
  }
}

function myFunctionsix() {
  document.getElementById("myDropdownsix").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.btn')) {
    var dropdowns = document.getElementsByClassName("six");
    validator();
  }
}

function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}

$(function() {
  $(window).scroll(function() {
  if($(this).scrollTop() != 0) {
  $('#topNubex').fadeIn();
  } else {
  $('#topNubex').fadeOut();
  }
  });
  $('#topNubex').click(function() {
  $('body,html').animate({scrollTop:0},700);
  });
  });

var paused = false;
$(".crop-img").click(function(){
      $("#expandedImg").attr('src', 
        $(this).attr('src'));
    });

    // the counter variable that keeps
    // track of which image you are showing
    var counter = 1;
    // virtually click on the current
    // image to load it into the big image
    $("#image"+counter).click();

    // when you click on the backwards
    // button select the previous image
    $("#backward").click(function (){
      // go back one in the counter
      counter = counter - 1;
      // if we are below 1 (the first
      // image) loop round to 4 (the
      // last image)
      if(counter < 1){
        counter = 12;
      }
      // virtually click on the current
      // image to load it into the big image
      $("#image"+counter).click();
    });

    // when you click on the backwards
    // button select the next image
    $("#forward").click(function (){
      // go forward one in the counter
      counter = counter + 1;
      // if we are above 4 (the last
      // image) loop round to 1 (the
      // first image)
      if(counter > 12){
        counter = 1;
      }
      // virtually click on the current
      // image to load it into the big image
      $("#image"+counter).click();
    });
    
    $("#expandedImg").click(function (){
			paused = !paused;
		});

		// set interval makes it move 
		// forward every 3 second
		setInterval(function (){
			// first check if it is paused
			if(!paused){
				// virtual click the forward
				// button
				$("#forward").click();
			};
		}, 5000);
