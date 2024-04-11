// script.js
document.addEventListener("DOMContentLoaded", function() {
    var dropdown = document.getElementById("myDropdown");

    // Close the dropdown menu by default
    dropdown.style.display = "none";

    document.querySelector(".menu-logo").addEventListener("click", function() {
        var dropdownStyle = window.getComputedStyle(dropdown);

        // Toggle the display of the dropdown menu
        dropdown.style.display = (dropdownStyle.display === "none") ? "block" : "none";
    });

    // Close the dropdown menu if the user clicks outside of it
    window.addEventListener("click", function(event) {
        if (!event.target.matches(".menu-logo")) {
            var dropdownStyle = window.getComputedStyle(dropdown);

            if (dropdownStyle.display === "block") {
                dropdown.style.display = "none";
            }
        }
    });
});
