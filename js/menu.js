$(document).ready(function(){
  $('.acc-head').click(function(){
    $(this).next().slideToggle(500);
    $(this).toggleClass('active');
  })
})