$('#a1-link1').click(function(){
    var elmnt = document.getElementById("a1-jump1");
    elmnt.scrollIntoView({block: 'start', behavior: 'smooth'});
  });

  $('#a1-link2').click(function(){
    var elmnt = document.getElementById("a1-jump2");
    elmnt.scrollIntoView({block: 'start', behavior: 'smooth'});
  });

  $('#a1-link3').click(function(){
    var elmnt = document.getElementById("a1-jump3");
    elmnt.scrollIntoView({block: 'start', behavior: 'smooth'});
  });

  $('#a2-link1').click(function(){
    var elmnt = document.getElementById("a2-jump1");
    elmnt.scrollIntoView({block: 'start', behavior: 'smooth'});
  });

  $('#a2-link2').click(function(){
    var elmnt = document.getElementById("a2-jump2");
    elmnt.scrollIntoView({block: 'start', behavior: 'smooth'});
  });

  $('#a2-link3').click(function(){
    var elmnt = document.getElementById("a2-jump3");
    elmnt.scrollIntoView({block: 'start', behavior: 'smooth'});
  });
  $('#a3-link1').click(function(){
    var elmnt = document.getElementById("a3-jump1");
    elmnt.scrollIntoView({block: 'start', behavior: 'smooth'});
  });

  $('#a3-link2').click(function(){
    var elmnt = document.getElementById("a3-jump2");
    elmnt.scrollIntoView({block: 'start', behavior: 'smooth'});
  });

  $('#a3-link3').click(function(){
    var elmnt = document.getElementById("a3-jump3");
    elmnt.scrollIntoView({block: 'start', behavior: 'smooth'});
  });
$(document).ready(function(){
  $("#toggle1").click(function(){
    $("#accordion1").scrollTop(0),1000;
  });
});
$(document).ready(function(){
  $("#toggle2").click(function(){
    $("#accordion2").scrollTop(0),1000;
  });
});
$(document).ready(function(){
  $("#toggle3").click(function(){
    $("#accordion3").scrollTop(0),1000;
  });
});