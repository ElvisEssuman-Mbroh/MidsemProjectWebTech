const eventTitle = document.getElementById('event-title');
eventTitle.addEventListener('mouseover', function() {
  eventTitle.style.backgroundColor = '#f0e68c'; 
});
eventTitle.addEventListener('mouseout', function() {
  eventTitle.style.backgroundColor = ''; 
});

const registrationForm = document.getElementById('registration-form');
if (registrationForm) {
  registrationForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert('Registration Successful!');
  });
}
