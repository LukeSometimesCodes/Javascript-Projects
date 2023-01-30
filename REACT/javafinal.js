//Fade in Challenge
document.body.classList.add('fade-out');

    window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.remove('fade-out');
    });

    //Phone number validation
    function validateForm() {
        let x = document.forms["myForm"]["fname"].value;
        if (x == "") {
          alert("Please input a valid number");
          return false;
        }
      }

      //Pop up form
      function openForm() {
        document.getElementById("myForm").style.display = "block";
      }
      
      function closeForm() {
        document.getElementById("myForm").style.display = "none";
      }
      $("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow');
}, 3000);



    


