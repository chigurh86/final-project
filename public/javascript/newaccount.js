$(document).ready(function() {
    $('#submitPerson').on('click', function() {
        event.preventDefault();
        alert("Your account has been created");

        var personObject = {
            username: $('#username').val(),
            email: $('#email').val(),
            image: $('#image').val(),
        };

        $.post("/api/userdata", personObject)
            .done(function(data) {
                console.log(data);
            })
            .fail(function(error) {
                console.log("THIS FAILED");
            });

        $('#username').val("");
        $('#email').val("");
        $('#image').val("");
    });
});
