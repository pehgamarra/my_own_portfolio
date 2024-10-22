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
        popupVideo.load();
        popupTitle.innerText = title; 
        popupDescription.innerText = description; 
        popupFooter.innerText = footer;
        popupGitHubLink.href = githubLink;

        addOverlay();
        projectPopup.style.display = 'block'; 
        document.body.style.overflow = 'hidden'; 
    });
});

function addOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'popup-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '999'; 
    document.body.appendChild(overlay);

    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            closePopup();
        }
    });
}

function closePopup() {
    projectPopup.style.display = 'none';
    popupVideo.pause(); 
    popupVideo.src = ''; 
    document.body.style.overflow = '';
    const overlay = document.getElementById('popup-overlay');
    if (overlay) {
        overlay.remove();
    }
}

popupClose.addEventListener('click', closePopup);
