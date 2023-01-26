function validateForm() {
    let x = document.forms["myform"]
    ["fname"].value;
    if (x =="") {
        alert("Please put in something");
        return false;
    }
}