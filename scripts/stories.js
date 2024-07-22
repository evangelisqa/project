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

const shareBtn = document.querySelector('share-btn');
shareBtn.addEventListener('click',() =>{
alert('Thank you for your interest in sharing your story! Please contact us for more detail.');
});
function adjustButtonSize(){
    const button = document.getElementById('shareButton');
    if (window.innerWidth <= 600) {
        button.style.width = '100%';
        button.style.padding = '12px 20px';
        button.style.fontSize='14px';
    } 
    else {
        button.style.width = 'auto';
        button.style.padding = '15px 32px';
        button.style.fontSize = '16px';
    }
}
window.addEventListener('resize', adjustButtonSize);
window.addEventListener('load', adjustButtonSize);

document.getElementById('storyForm').addEventListener('submit',function(event){
    event.preventDefault();
    alert('Thank you for sharing your story');
});
