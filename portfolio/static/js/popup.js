document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');

    const projectImages = document.querySelectorAll('.project-image');
    const projectPopup = document.getElementById('projectPopup');
    const popupVideo = document.getElementById('popupVideo');
    const popupClose = document.getElementById('popupClose');

    console.log('Elements found:', {
        projectImages: projectImages.length,
        projectPopup: !!projectPopup,
        popupVideo: !!popupVideo,
        popupClose: !!popupClose
    });

    function openPopup(videoUrl) {
        if (!popupVideo) {
            console.error('popupVideo element not found');
            return;
        }

        const videoId = videoUrl.split('v=')[1];
        if (!videoId) {
            console.error('Invalid YouTube URL');
            return;
        }

        popupVideo.innerHTML = `
            <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">
                <img src="https://img.youtube.com/vi/${videoId}/0.jpg" alt="Video Thumbnail" style="width: 100%; cursor: pointer;">
                <div style="text-align: center; margin-top: 10px;">Click to watch on YouTube</div>
            </a>
        `;

        projectPopup.style.display = 'block';
    }

    function closePopup() {
        projectPopup.style.display = 'none';
        popupVideo.innerHTML = '';
    }

    projectImages.forEach(image => {
        image.addEventListener('click', () => {
            const videoUrl = image.getAttribute('data-video-url');
            console.log('Video URL:', videoUrl);
            openPopup(videoUrl);
        });
    });

    if (popupClose) {
        popupClose.addEventListener('click', closePopup);
    }
});
