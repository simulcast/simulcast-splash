$( document ).ready(function() {
    console.log( "ready!" );
    /* hide homepage */
    $("#content-main").hide();
    $("#content-bio").hide();
    $("#content-contact").hide();
    $("links").hide();
    /* load site when the initial quote is clicked */
    $("#quote").click(function(){
      $("#quote").fadeOut(10, function() {
          /* callback for when the quote is faded out */
          $("#content-main").fadeToggle("slow"); //fade in content
          $("#links").fadeToggle("slow"); //fade in links
      });
    });
    /* hide site and contact when bio is clicked */
    $("#bio").click(function() {
      if ($("#content-main").is(":visible") == true) {
        $("#content-main").fadeToggle("slow", function() {
          $("#content-bio").fadeToggle("slow");
        });
      }
      else if ($("#content-contact").is(":visible") == true) {
        $("#content-contact").fadeToggle("slow", function() {
          $("#content-bio").fadeToggle("slow");
        });
      }
      else {
        $("#content-bio").fadeToggle("slow", function() {
          $("#content-main").fadeToggle("slow");
        });
      }
    });
    $("#contact").click(function() {
      if ($("#content-main").is(":visible") == true) {
        $("#content-main").fadeToggle("slow", function() {
          $("#content-contact").fadeToggle("slow");
        });
      }
      else if ($("#content-bio").is(":visible") == true) {
        $("#content-bio").fadeToggle("slow", function() {
          $("#content-contact").fadeToggle("slow");
        });
      }
      else {
        $("#content-contact").fadeToggle("slow", function() {
          $("#content-main").fadeToggle("slow");
        });
      }
    });
});
