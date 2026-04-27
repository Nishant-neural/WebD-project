window.onload = function() {
    let fills = document.querySelectorAll(".fill");
    fills.forEach(fill => {
        let width = fill.style.width;
        fill.style.width = "0";
        setTimeout(() => {
            fill.style.width = width;
        }, 300);
    });
};

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    if (name === "" || email === "") {
        alert("Please fill all required fields");
        return false;
    }
    alert("Form submitted successfully!");
    return true;
}