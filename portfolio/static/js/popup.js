document.addEventListener('DOMContentLoaded', function() {
    const projectImages = document.querySelectorAll('.project-image');
    const projectPopup = document.getElementById('projectPopup');
    const popupVideo = document.getElementById('popupVideo');
    const popupClose = document.getElementById('popupClose');
    const popupTitle = document.getElementById('popupTitle');
    const popupDescription = document.getElementById('popupDescription');
    const popupFooter = document.getElementById('popupFooter');
    const popupGitHubLink = document.getElementById('popupGitHubLink');

    function extractYouTubeId(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    }

    function openVideoPopup(videoUrl) {
        const videoId = extractYouTubeId(videoUrl);
        if (videoId) {
            popupVideo.src = `https://www.youtube-nocookie.com/embed/${videoId}`;
            projectPopup.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
            addOverlay();
        } else {
            console.error('Invalid YouTube URL');
        }
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
            const title = image.nextElementSibling.innerText;
            const description = image.nextElementSibling.nextElementSibling.innerText;
            const skills = image.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText.split('|');
            const githubLink = image.nextElementSibling.nextElementSibling.nextElementSibling.getAttribute('href');

            openVideoPopup(videoUrl);

            popupTitle.innerText = title;
            popupDescription.innerText = description;
            
            // Clear previous skills
            const popupSkills = document.getElementById('popupSkills');
            popupSkills.innerHTML = '';
            
            // Add new skills
            skills.forEach(skill => {
                const skillTag = document.createElement('span');
                skillTag.className = 'skill-tag';
                skillTag.textContent = skill.trim();
                popupSkills.appendChild(skillTag);
            });

            popupGitHubLink.href = githubLink;
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
