function contactAdmin(e) {
    e.preventDefault();
    //var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    //var message = document.getElementById("message").value;
    if (email === "") {
        alert("Please fill out all of the form data.")
        return;
    }
    var ajax = new ajaxObj("POST", "OTHER_ROOT/php_includes/mailAdmin.php");
    ajax.onreadystatechange = function() {
        if (ajaxReturn(ajax) === true) {
            if (ajax.responseText === "success") {
                alert("Thanks for your interest! We'll get back to you in about one business day!");
                //document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                //document.getElementById("message").value = "";
            }
            else {
                alert("There was an error sending you message, please try again.")
            }
        }
    }
    ajax.send("email=" + email);
}