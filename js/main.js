$( document ).ready(function() {
    console.log( "ready!" );
    $("#content").hide();
    $("#quote").click(function(){
      console.log('clicked');
      $("#quote").fadeOut( "slow", function() {
        $("#content").fadeIn("slow");
      });
    });
});
