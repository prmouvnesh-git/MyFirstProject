$(document).ready(function() {
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();
        
        // Reset alert
        $('#alertMessage').removeClass('alert-danger alert-success d-none').text('');
        
        // Get values
        var email = $('#email').val().trim();
        var password = $('#password').val().trim();
        
        // Validation using Model
        const user = userModel.authenticate(email, password);
        
        if (user) {
            $('#alertMessage')
                .addClass('alert-success')
                .removeClass('d-none')
                .html('<i class="fa-solid fa-check-circle me-2"></i>Login successful! Redirecting...');
            
            // Add a nice animation to the button
            var originalBtnHtml = $('.btn-login').html();
            $('.btn-login').html('<i class="fa-solid fa-spinner fa-spin"></i> Processing...').prop('disabled', true);
            
            // Simulate redirect delay
            setTimeout(function() {
                window.location.href = 'home.html';
            }, 1500);
        } else {
            $('#alertMessage')
                .addClass('alert-danger')
                .removeClass('d-none')
                .html('<i class="fa-solid fa-triangle-exclamation me-2"></i>Invalid email or password.');
            
            // Shake animation for the card
            $('.login-card').addClass('shake-animation');
            setTimeout(function() {
                $('.login-card').removeClass('shake-animation');
            }, 500);
        }
    });
});
