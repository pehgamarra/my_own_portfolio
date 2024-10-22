document.addEventListener('DOMContentLoaded', function() {
    const projectImages = document.querySelectorAll('.project-image');
    const projectPopup = document.getElementById('projectPopup');
    const popupVideo = document.getElementById('popupVideo');
    const popupClose = document.getElementById('popupClose');
    const popupTitle = document.getElementById('popupTitle');
    const popupDescription = document.getElementById('popupDescription');
    const popupGitHubLink = document.getElementById('popupGitHubLink');
    const popupSkills = document.getElementById('popupSkills');

    // Verificar se todos os elementos necessários existem
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
        popupVideo.src = '';
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
            
            const title = image.closest('.project-card').querySelector('.project-title').innerText;
            const description = image.closest('.project-card').querySelector('.project-description').innerText;
            const skills = image.closest('.project-card').querySelector('p:last-child').innerText.split('|');
            const githubLink = image.closest('.project-card').querySelector('a[href^="https://github.com"]')?.getAttribute('href');

            openVideoPopup(videoUrl);

            popupTitle.innerText = title;
            popupDescription.innerText = description;
            
            // Clear previous skills
            popupSkills.innerHTML = '';
            
            // Add new skills
            skills.forEach(skill => {
                const skillTag = document.createElement('span');
                skillTag.className = 'skill-tag';
                skillTag.textContent = skill.trim();
                popupSkills.appendChild(skillTag);
            });

            if (githubLink) {
                popupGitHubLink.href = githubLink;
                popupGitHubLink.style.display = 'inline-block';
            } else {
                popupGitHubLink.style.display = 'none';
            }
        });
    });

    if (popupClose) {
        popupClose.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            closePopup();
        });
    }

    projectPopup.addEventListener('click', (event) => {
        if (event.target === projectPopup) {
            closePopup();
        }
    });
});
