
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us!');
});


const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Output the date the document was last modified in the footer's second paragraph
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modification: " + lastModified;