document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    const projectImages = document.querySelectorAll('.project-image');
    console.log('Number of project images found:', projectImages.length);

    const projectPopup = document.getElementById('projectPopup');
    const popupVideo = document.getElementById('popupVideo');
    const popupClose = document.getElementById('popupClose');
    const popupTitle = document.getElementById('popupTitle');
    const popupDescription = document.getElementById('popupDescription');
    const popupGitHubLink = document.getElementById('popupGitHubLink');
    const popupSkills = document.getElementById('popupSkills');

    // Verificar se todos os elementos necessários existem
    if (!projectPopup) console.error('projectPopup not found');
    if (!popupVideo) console.error('popupVideo not found');
    if (!popupClose) console.error('popupClose not found');
    if (!popupTitle) console.error('popupTitle not found');
    if (!popupDescription) console.error('popupDescription not found');
    if (!popupGitHubLink) console.error('popupGitHubLink not found');
    if (!popupSkills) console.error('popupSkills not found');

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
        console.log('Attempting to open video popup with URL:', videoUrl);
        const videoId = extractYouTubeId(videoUrl);
        if (videoId) {
            console.log('Valid YouTube ID found:', videoId);
            // Remova o iframe existente
            while (popupVideo.firstChild) {
                popupVideo.removeChild(popupVideo.firstChild);
            }

            // Crie um novo div para o player
            const playerDiv = document.createElement('div');
            playerDiv.id = 'youtube-player';
            popupVideo.appendChild(playerDiv);

            // Inicialize o player do YouTube
            new YT.Player('youtube-player', {
                height: '360',
                width: '640',
                videoId: videoId,
                events: {
                    'onReady': onPlayerReady
                }
            });

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

    projectImages.forEach((image) => {
        image.addEventListener('click', () => {
            const videoUrl = image.getAttribute('data-video-url');
            console.log('Video URL:', videoUrl); // Log para debug
            
            const projectCard = image.closest('.project-card');
            if (!projectCard) {
                console.error('Project card not found');
                return;
            }

            const titleElement = projectCard.querySelector('.project-title');
            const descriptionElement = projectCard.querySelector('.project-description');
            const skillsElement = projectCard.querySelector('p:last-child');
            const githubLinkElement = projectCard.querySelector('a[href^="https://github.com"]');

            if (titleElement) popupTitle.innerText = titleElement.innerText;
            if (descriptionElement) popupDescription.innerText = descriptionElement.innerText;
            
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

            openVideoPopup(videoUrl);
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
