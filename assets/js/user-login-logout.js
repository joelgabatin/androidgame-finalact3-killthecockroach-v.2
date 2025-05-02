
$(document).ready(function() {
  // Handle Login
  $(document).on('click', '#loginBtn', function() {
    const username = $('#loginUsername').val().trim();
    const password = $('#loginPassword').val().trim();

    $.getJSON('users.json', function(users) {
      const user = users.find(u => u.username === username && u.password === password);

      if (user) {
        localStorage.setItem('loggedInUser', username);
        $('#loginModal').modal('hide');
        $('#startScreen').show();
        console.log("Login Successfull");

      } else {
        $('#loginError').removeClass('d-none');
        $('#loginError').text('Invalid username or password');

        setTimeout(function() {
          $('#loginError').addClass('d-none');
        }, 5000);
      }
    });
  });


// Handle Register Button Click
$(document).on('click', '#registerBtn', function() {
    const username = $('#regUsername').val().trim();
    const password = $('#regPassword').val().trim();

    // Check if all fields are filled
    if (!username || !password) {
        console.log("register error");
        $('#registerError').removeClass('d-none');
        $('#registerError').text('Please fill in all fields');
    return;
    }

    // Retrieve existing users from localStorage (for demo purposes)
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the username already exists
    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
        console.log("register error");
        $('#registerError').removeClass('d-none');
        $('#registerError').text('Username already exists!');
    return;
    }

    // Add the new user to the users array
    users.push({ username: username, password: password });

    // Save the updated users array back to localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Log the user in immediately after registration
    localStorage.setItem('loggedInUser', username);

    // Hide the registration modal and show the start screen (you can adjust this as needed)
    $('#registerModal').modal('hide');
    $('#startScreen').show(); // You can change this line to whatever screen should appear post-login


    // } else {
    //     $('#alertModal').addClass('error');
    //     $('#alertModalBody').text('Invalid username or password. Please try again.');
    // }
    
});

  // Handle Logout
  $(document).on('click', '#logoutBtn', function() {

        localStorage.removeItem('loggedInUser');
        console.log('👋 Logged out!');
        location.reload();
 
  }); 
 
  
});
