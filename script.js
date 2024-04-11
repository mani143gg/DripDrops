// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("show-more-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.getElementById('cta-btn').addEventListener('click', function() {
    var contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });


function redirectToWhatsApp() {
    // Phone number and message
    var phoneNumber = '7736609707'; // Replace with your WhatsApp number
    var message = document.getElementById('message').value;
    var email = document.getElementById('email').value;

    // Construct WhatsApp URL with phone number and message
    var url = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent('Enquiry - ' + message + '\n\nEmail: ' + email);

    // Redirect to WhatsApp chat
    window.location.href = url;

    event.preventDefault();
}

