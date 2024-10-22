document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');

    const projectImages = document.querySelectorAll('.project-image');
    console.log('Project images found:', projectImages.length);

    const projectPopup = document.getElementById('projectPopup');
    const popupVideo = document.getElementById('popupVideo');
    const popupClose = document.getElementById('popupClose');
    const popupTitle = document.getElementById('popupTitle');
    const popupDescription = document.getElementById('popupDescription');
    const popupGitHubLink = document.getElementById('popupGitHubLink');
    const popupSkills = document.getElementById('popupSkills');

    console.log('Popup elements:', {
        projectPopup: !!projectPopup,
        popupVideo: !!popupVideo,
        popupClose: !!popupClose,
        popupTitle: !!popupTitle,
        popupDescription: !!popupDescription,
        popupGitHubLink: !!popupGitHubLink,
        popupSkills: !!popupSkills
    });

    if (!projectPopup || !popupVideo || !popupClose || !popupTitle || !popupDescription || !popupGitHubLink || !popupSkills) {
        console.error('Um ou mais elementos necessários não foram encontrados no DOM');
        return;
    }

    function extractYouTubeId(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    }

    function openVideoPopup(videoUrl) {
        const videoId = extractYouTubeId(videoUrl);
        if (videoId) {
            const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;
            const videoLink = `https://www.youtube.com/watch?v=${videoId}`;
            
            popupVideo.innerHTML = `
                <a href="${videoLink}" target="_blank">
                    <img src="${thumbnailUrl}" alt="Video Thumbnail" style="width: 100%; cursor: pointer;">
                    <div style="text-align: center; margin-top: 10px;">Clique para assistir no YouTube</div>
                </a>
            `;

            projectPopup.style.display = 'block';
            document.body.style.overflow = 'hidden';
            addOverlay();
        } else {
            console.error('Invalid YouTube URL');
        }
    }

    function onPlayerReady(event) {
        event.target.playVideo();
    }

    function addOverlay() {
        let overlay = document.getElementById('popup-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'popup-overlay';
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            overlay.style.zIndex = '999';
            document.body.appendChild(overlay);
        }
        overlay.style.display = 'block';
        overlay.addEventListener('click', closePopup);
    }

    function closePopup() {
        projectPopup.style.display = 'none';
        popupVideo.innerHTML = ''; // Clear the video
        document.body.style.overflow = ''; // Restore scrolling
        removeOverlay();
    }

    function removeOverlay() {
        const overlay = document.getElementById('popup-overlay');
        if (overlay) {
            overlay.style.display = 'none';
        }
    }

    projectImages.forEach((image, index) => {
        image.addEventListener('click', () => {
            console.log('Image clicked:', index);
            
            const projectCard = image.closest('.project-card');
            if (!projectCard) {
                console.error('Project card not found');
                return;
            }

            const titleElement = projectCard.querySelector('.project-title');
            const descriptionElement = projectCard.querySelector('.project-description');
            const skillsElement = projectCard.querySelector('p:last-child');
            const githubLinkElement = projectCard.querySelector('a[href^="https://github.com"]');

            console.log('Elements found:', {
                titleElement: !!titleElement,
                descriptionElement: !!descriptionElement,
                skillsElement: !!skillsElement,
                githubLinkElement: !!githubLinkElement
            });

            if (titleElement && popupTitle) {
                popupTitle.textContent = titleElement.textContent;
            } else {
                console.error('Title element or popupTitle not found');
            }

            if (descriptionElement && popupDescription) {
                popupDescription.textContent = descriptionElement.textContent;
            } else {
                console.error('Description element or popupDescription not found');
            }

            // Clear previous skills
            popupSkills.innerHTML = '';
            
            // Add new skills
            if (skillsElement) {
                const skills = skillsElement.innerText.split('|');
                skills.forEach(skill => {
                    const skillTag = document.createElement('span');
                    skillTag.className = 'skill-tag';
                    skillTag.textContent = skill.trim();
                    popupSkills.appendChild(skillTag);
                });
            }

            if (githubLinkElement) {
                popupGitHubLink.href = githubLinkElement.getAttribute('href');
                popupGitHubLink.style.display = 'inline-block';
            } else {
                popupGitHubLink.style.display = 'none';
            }

            openVideoPopup(image.getAttribute('data-video-url'));
        });
    });

    if (popupClose) {
        popupClose.addEventListener('click', closePopup);
    }

    projectPopup.addEventListener('click', (event) => {
        if (event.target === projectPopup) {
            closePopup();
        }
    });
});
