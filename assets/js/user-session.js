$(document).ready(function() {
  $('#includedContent').load('StartGameOverScreen.html', function(response, status, xhr) {
    if (status == "success") {
      console.log('✅ Modals loaded successfully.');

      var loginModal = new bootstrap.Modal(document.getElementById('loginModal'), {
        backdrop: 'static',
        keyboard: false
      });

      var registerModal = new bootstrap.Modal(document.getElementById('registerModal'), {
        backdrop: 'static',
        keyboard: false
      });

      const loggedInUser = localStorage.getItem('loggedInUser');
      console.log('Logged in user from localStorage:', loggedInUser);

      if (loggedInUser) {
        console.log("✅ Already logged in as:", loggedInUser);
        $('#startScreen').show();  // Show game screen
      } else {
        console.log("🔒 No user logged in, showing login modal");
        loginModal.show();         // Show login modal only if no user
      }

    } else {
      console.error('❌ Failed to load modals:', xhr.status, xhr.statusText);
    }
  });
});

