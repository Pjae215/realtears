$(document).ready(function() {
    // Getting references to our form and inputs
    var signin = $("#signin");
    var emailInput = $("#email");
    var passwordInput = $("#password");

    // When the form is submitted, we validate there's an email and password entered
    signin.on("submit", function(event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.email || !userData.password) {
            return;
        }

        // If we have an email and password we run the signunUser function and clear the form
        signunUser(userData.email, userData.password);
        
    });

    // signunUser does a post to our "api/login" route and if successful, redirects us the the members page
    function signunUser(email, password) {
        $.post("/api/login", {
                email: email,
                password: password
            })
            .then(function(user) {
                console.log(user)
                localStorage.setItem('email', user.email)
                window.location.replace("/profile");
                // If there's an error, log the error
            })
            .catch(function(err) {
                console.log(err);
            });
    }

    function renderprofile (profile) {
        var email = localStorage.getItem('email')
        $.post("/api/profile", {
            username,
            profile

        })
    }
});