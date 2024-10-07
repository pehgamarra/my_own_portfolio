const projectImages = document.querySelectorAll('.project-image');
const projectPopup = document.getElementById('projectPopup');
const popupVideo = document.getElementById('popupVideo');
const popupClose = document.getElementById('popupClose');
const popupTitle = document.getElementById('popupTitle');
const popupDescription = document.getElementById('popupDescription');
const popupFooter = document.getElementById('popupFooter');
const popupGitHubLink = document.getElementById('popupGitHubLink'); 

projectImages.forEach((image) => {
    image.addEventListener('click', () => {
        const videoSrc = image.getAttribute('data-video-url'); 
        const title = image.nextElementSibling.innerText; 
        const description = image.nextElementSibling.nextElementSibling.innerText;
        const footer = image.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText;
        const githubLink = image.nextElementSibling.nextElementSibling.nextElementSibling.getAttribute('href');

        popupVideo.src = videoSrc; 
        popupTitle.innerText = title; 
        popupDescription.innerText = description; 
        popupFooter.innerText = footer
        popupGitHubLink.href = githubLink;

        projectPopup.style.display = 'block'; 
    });
});

popupClose.addEventListener('click', () => {
    projectPopup.style.display = 'none';
    popupVideo.pause(); 
    popupVideo.src = ''; 
});

window.addEventListener('click', (event) => {
    if (event.target === projectPopup) {
        projectPopup.style.display = 'none';
        popupVideo.pause(); 
        popupVideo.src = ''; 
    }
});
