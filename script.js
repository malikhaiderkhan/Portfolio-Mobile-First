const openNav = document.getElementById('dropdown');
console.log('sad');
// Add a click event handler
openNav.addEventListener('click', function() {
  // Code to be executed when the button is clicked
  console.log('Button clicked!');
  document.getElementById("menu").style.width = "100%";
});