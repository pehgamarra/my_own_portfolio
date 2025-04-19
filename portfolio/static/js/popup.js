const projectImages = document.querySelectorAll('.project-image');
const projectPopup = document.getElementById('projectPopup');
const popupVideo = document.getElementById('popupVideo');
const popupClose = document.getElementById('popupClose');
const popupTitle = document.getElementById('popupTitle');
const popupDescription = document.getElementById('popupDescription');
const popupFooter = document.getElementById('popupFooter');
const popupGitHubLink = document.getElementById('popupGitHubLink'); 
const popupSkills = document.getElementById('popupSkills');

projectImages.forEach((image) => {
    image.addEventListener('click', () => {
        const projectCard = image.closest('.project-card');
        fillPopupContent(projectCard);
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

function fillPopupContent(project) {
    const videoSrc = project.querySelector('.project-image').getAttribute('data-video-url'); 
    const title = project.querySelector('.project-title').textContent;
    const description = project.querySelector('.project-description').textContent;
    const skills = project.querySelector('p:last-child').textContent.split('|');
    const githubLink = project.querySelector('a[href^="http"]')?.href;

    popupVideo.src = videoSrc; 
    popupVideo.load();
    popupTitle.innerText = title; 
    popupDescription.innerText = description; 
    popupGitHubLink.href = githubLink || '#';
    popupGitHubLink.style.display = githubLink ? 'inline-block' : 'none';

    const skillsContainer = document.getElementById('popupSkills');
    skillsContainer.innerHTML = '';
    skills.forEach(skill => {
        const skillTag = document.createElement('span');
        skillTag.className = 'skill-tag';
        skillTag.textContent = skill.trim();
        skillsContainer.appendChild(skillTag);
    });

    addOverlay();
    projectPopup.style.display = 'block'; 
    document.body.style.overflow = 'hidden'; 
}