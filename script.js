// Add event listener for window resize
window.addEventListener('resize', handleResize);

// Function to handle window resize
function handleResize() {
  // Check the viewport width
  if (window.innerWidth < 768) {
    // For small screens (mobile)
    makeMobileLayout();
  } else {
    // For larger screens (desktop)
    makeDesktopLayout();
  }
}

// Function to apply mobile layout
function makeMobileLayout() {
  // Adjust the layout for mobile screens
  document.getElementById('profile-creation').classList.add('mobile');
  document.getElementById('chat').classList.add('mobile');
}

// Function to apply desktop layout
function makeDesktopLayout() {
  // Adjust the layout for desktop screens
  document.getElementById('profile-creation').classList.remove('mobile');
  document.getElementById('chat').classList.remove('mobile');
}

// Initial check for window size on page load
handleResize();
// JavaScript code for profile creation and redirecting

// Get the profile creation form
const profileForm = document.getElementById('profile-form');

// Add event listener for form submission
profileForm.addEventListener('submit', function (event) {
  event.preventDefault();
  // Redirect to the user search page
  window.location.href = 'user-search.html';
});
