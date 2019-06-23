$(document).ready(function () {
var typed=new Typed(`#type`,{
    strings:["Dickson Nyaigoti"],
    backSpeed:10,
    typeSpeed:50,
    smartBackspace:true,
    loop: false,
  })
  var typed2=new Typed(`#type2`,{
      strings:["Android Developer"],
      backSpeed:10,
      typeSpeed:150,
      smartBackspace:true,
      loop: false,
    })
    $('#tag').effect('bounce',3000);
    $("#tag").click(function(){
      $('#tag').effect('bounce',3000);
    });

});
$(window).scroll(function(){
  if ($(document).scrollTop() > 50) {
          $("#nav").css("background-color", "rgba(0,0,0, .4)");
        } else {
          $("#nav").css("background-color", "rgb(2, 0, 1)");
        }
});

//another typewriter other than type.js //
var i = 0;
var txt = 'Lorem ipsum typing effect!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
