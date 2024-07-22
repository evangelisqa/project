// Output the current year in the footer's first paragraph
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Output the date the document was last modified in the footer's second paragraph
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modification: " + lastModified;

const hamburger = document.querySelector('.hamburger');
const mainMenu =document.querySelector('.mainMenu');
hamburger.addEventListener('click',()=>{
    mainMenu.classList.toggle('active');
});

const shareStoryBtn = document.querySelector('share-story-btn');
shareStoryBtn.addEventListener('click',() =>{
alert('Thank you for your interest in sharing your story! Please contact us for more detail.');
});