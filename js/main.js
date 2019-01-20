$( document ).ready(function() {
    console.log( "ready!" );
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    /* hide homepage */
    $("#content-main").hide();
    $("#content-bio").hide();
    $("#content-contact").hide();
    $("links").hide();
    /* hide quote / show site when the quote is clicked */
    $("#quote").click(function(){
      $("#quote").fadeOut(10, function() {
          /* callback for when the quote is faded out */
          $("#content-main").fadeToggle("slow"); //fade in content
          if ($("#links").is(":visible") == true) {
            console.log("toggle - true visible");
          }
          else if ($("#links").is(":visible") == false){
            $("#links").fadeToggle("slow");
            console.log("toggle - false visible");
          }
      });
    });
    /* hide site and contact when bio is clicked */
    $("#bio").click(function() {
      console.log('bio clicked');
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
      else if ($("#quote").is(":visible") == true) {
        $("#quote").fadeToggle("slow", function() {
          $("#content-bio").fadeToggle("slow");
        });
      }
      else {
        $("#content-bio").fadeToggle("slow", function() {
          $("#content-main").fadeToggle("slow");
        });
      }
    });
    /* hide site and bio when contact is clicked */
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
      else if ($("#quote").is(":visible") == true) {
        $("#quote").fadeToggle("slow", function() {
          $("#content-contact").fadeToggle("slow");
        });
      }
      else {
        $("#content-contact").fadeToggle("slow", function() {
          $("#content-main").fadeToggle("slow");
        });
      }
    });
    /* toggle quote and site/bio/contact when logo is clicked */
    $("#logo").click(function() {
      if ($("#content-main").is(":visible") == true) {
        $("#content-main").fadeToggle("slow", function() {
          $("#quote").fadeToggle("slow");
        });
      }
      else if ($("#content-bio").is(":visible") == true) {
        $("#content-bio").fadeToggle("slow", function() {
          $("#quote").fadeToggle("slow");
        });
      }
      else if ($("#content-contact").is(":visible") == true) {
        $("#content-contact").fadeToggle("slow", function() {
          $("#quote").fadeToggle("slow");
        });
      }
      else {
        $("#quote").fadeToggle("slow", function() {
          $("#content-main").fadeToggle("slow");
          if ($("#links").is(":visible") == false) {
            $("#links").fadeToggle("slow");
          }
        });
      }
    })
});
