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
<<<<<<< HEAD
        const videoSrc = image.getAttribute('data-video-url'); 
        const title = image.nextElementSibling.innerText; 
        const description = image.nextElementSibling.nextElementSibling.innerText;
        const footer = image.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText;
        const githubLink = image.nextElementSibling.nextElementSibling.nextElementSibling.getAttribute('href');

        popupVideo.src = videoSrc; 
<<<<<<< HEAD
=======
        popupVideo.load();
>>>>>>> bb7e1d0e1a1c186d18d91d18078ad97923890be3
        popupTitle.innerText = title; 
        popupDescription.innerText = description; 
        popupFooter.innerText = footer;
        popupGitHubLink.href = githubLink;

        addOverlay();
        projectPopup.style.display = 'block'; 
<<<<<<< HEAD
        document.body.style.overflow = 'hidden'; // Prevent scrolling
=======
        document.body.style.overflow = 'hidden'; 
>>>>>>> bb7e1d0e1a1c186d18d91d18078ad97923890be3
=======
        const projectCard = image.closest('.project-card');
        fillPopupContent(projectCard);
>>>>>>> 9d2a0f1f30a584bd8a9b1f2574335bf688cdbec2
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
<<<<<<< HEAD
    overlay.style.zIndex = '999'; // Make sure this is below the popup's z-index
=======
    overlay.style.zIndex = '999'; 
>>>>>>> bb7e1d0e1a1c186d18d91d18078ad97923890be3
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
<<<<<<< HEAD
    document.body.style.overflow = ''; // Restore scrolling
=======
    document.body.style.overflow = '';
>>>>>>> bb7e1d0e1a1c186d18d91d18078ad97923890be3
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
