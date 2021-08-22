$('.chose-page .chose div').click(function() {
    $(this).toggleClass('active')
})

// $('.true-false .right i').click(function() {
//     $(this).toggleClass('active')
//     $(this).parent().toggleClass('is-clicked')
// })

// $('.true-false .wrong i').click(function() {
//     $(this).toggleClass('active');
//     $(this).parent().toggleClass('is-clicked')
// })

$(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});

$('.do-you-have').click(function() {
    $('.coupon-holder').slideToggle()
})
$('.edu-years.prizes a').click(function(e){
    e.preventDefault();
   
   $('.edu-years.prizes a').removeClass('active-prize');
   $(this).addClass('active-prize');

   var myID = $(this).attr("id");

   $(".certificate-img").hide();
        
        // When Clicked In Li Get Div Same ID
        
        $("#" + myID + "-content").fadeIn(1000);

})



$('.answer').click(function(){
    $('.answer').removeClass("is-clicked")
    $(this).toggleClass("is-clicked")
})
$('.answer-2').click(function(){
    $('.answer-2').removeClass("is-clicked")
    $(this).toggleClass("is-clicked")
})
$('.answer-3').click(function(){
    $('.answer-3').removeClass("is-clicked")
    $(this).toggleClass("is-clicked")
})
$('.answer-4').click(function(){
    $('.answer-4').removeClass("is-clicked")
    $(this).toggleClass("is-clicked")
})
$('.answer-5').click(function(){
    $('.answer-5').removeClass("is-clicked")
    $(this).toggleClass("is-clicked")
})
