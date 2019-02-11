$( document ).ready(function() {
    console.log( "ready!" );
    /* canvas */
    const video = document.querySelector('video')
    const canvas = document.querySelector('canvas')
    const ctx = canvas.getContext('2d')
    video.addEventListener('play', start)
    function start() {
      // Set the canvas size to match the video dimensions
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      paintFrame()
    }
    function paintFrame() {
      requestAnimationFrame(paintFrame)
      // Every frame, paint the current video frame to the canvas
      ctx.drawImage(video,0,0);
      ctx.filter = "brightness(75%)";
    }
    /* viewport shit */
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    /* first sound loading */
    var revcrash = new Tone.Player("./sound/revcrash.mp3", function() {
      console.log('crash loaded');
    }).toMaster();
    var bass = new Tone.Player("./sound/bass.mp3", function() {
      console.log('bass loaded');
    }).toMaster();
    /* show the quote to initiate click when all buffers are loaded */
    Tone.Buffer.on('load', function(){
    	$("#quote").fadeToggle(10);
    })

    /* hide homepage */
    $("#content-main").hide();
    $("#content-bio").hide();
    $("#content-contact").hide();
    $("links").hide();
    /* hide quote / show site when the quote is clicked */
    $("#quote").click(function(){
      /* sound */
      //revcrash.start();
      /* routing */
      $("#quote").fadeOut("slow", function() {
          /* sound */
          bass.start();
          /* callback for when the quote is faded out */
          $("#content-main").fadeToggle(10); //fade in content
            if ($("#links").is(":visible") == true) {
          }
            else if ($("#links").is(":visible") == false){
              $("#links").fadeToggle(10);
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
