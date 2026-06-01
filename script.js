// Simple welcome alert pag nag-load yung page
window.onload = function() {
  console.log("Portfolio loaded successfully!");
};

// Smooth scroll effect pag pinindot yung button
function scrollToProjects() {
  document.querySelector('.projects').scrollIntoView({ behavior: 'smooth' });
}