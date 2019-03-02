    var link = document.querySelector(".modal-open");
    var popup = document.querySelector(".modal");
    var close = popup.querySelector(".modal-close");
    var overlay = document.querySelector(".modal-overlay");
    var login = popup.querySelector("[name=name]");
    var email = popup.querySelector("[name=mail]");
    var text = popup.querySelector("[name=text]");
    var form = popup.querySelector("form");

       
      link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal-show");
        login.focus();
        overlay.classList.add("modal-overlay-show");

      });

      close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal-show");
        overlay.classList.remove("modal-overlay-show");
        popup.classList.remove("modal-error");
      });

      form.addEventListener("submit", function(event) {
        if (!name.value || !email.value || !text.value) {
          event.preventDefault();
          popup.classList.add("modal-error");
        }
      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          popup.classList.remove("modal-show");
          overlay.classList.remove("modal-overlay-show");
          
        }
        
      });


      overlay.addEventListener("click", function() {
        overlay.classList.remove("modal-overlay-show");
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");

      });
      





