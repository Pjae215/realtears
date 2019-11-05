$(document).ready(function() {
    // Getting references to our form and input
    // var signUpForm = $("form.signup");
    var signup = $("#register");
    console.log("cool");
    var submitprefs = $("#submitprefs");
    console.log('2ndpart');
    
    // When the signup button is clicked, we validate the email and password are not blank. and the passwords match
    signup.on("submit", function(event) {
        event.preventDefault();

        var newuser = {
            username: $("#username").val(),
            gender: $("#gender").val(),
            birthday: $("dob").val(),
            email: $("email").val().trim(),
            password: $("passowrd").val().trim(),
            password2: $("password2").val().trim()
        };

        console.log(typeof(newuser.gender))

        if (!newuser.name || !newuser.gender || !newuser.birthday || !newuser.email || !newuser.password || !newuser.password2) {
            alert("Please fill empty fields");
            return;
        }
        if (newuser.password != newuser.password2) {
            alert("Passwords do not match")
            return;
        }

        if (newuser.password.length < 8) {
            alert("Passwords must be 8 or more characters")
            return;
        }

        //  run the signUpUser function
        signUpUser();
    
    });

    //post to users

    function signUpUser(username, gender, birthday, email, password) {
        $.post("/api/signup", {
            email: email,
            password: password,
            username: username,
            birthday: birthday,
            gender: gender
            }).then(function() {

            if (err) {
                alert(err);}
            //otherwise

            userpreferences();});}

// Ask diff questions depending on gender
    function userpreferences() {
            
    if (newuser.gender = male) {

        window.location.replace(".malepreferences");
    }
    else {      
        window.location.replace(".preferences");
        }};   




    submitprefs.on("submit", function(prefs) {

        var prefs = {
            kids1: $("#samekids").val(),
            race1: $("#samerace").val(),
            agegroup: $("#sameagegroup").val(),
            religion1: $("$samereligion").val(),
            kids2: $("#kids2").val(),
            race2: $("race2").val().trim()
        }
           
     $.post("/api/prefs", {
        kids1: prefs.kids1,   
        kids2: prefs.kids2, 
        race1: prefs.race1, 
        race2: prefs.race2,
        agegroup: prefs.agegroup, 
        religion1: prefs.religion   
    }).then(function() {
        window.location.href = "/api/profile"});
    });
});