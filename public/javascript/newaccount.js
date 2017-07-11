$(document).ready(function() {
    $('#submitPerson').on('click', function() {
        event.preventDefault();
        alert("Hello! I am an alert box!!");

        var personObject = {
            username: $('#username').val(),
            email: $('#email').val(),
            photo: $('#photo').val(),
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
        $('#photo').val("");
    });
});
