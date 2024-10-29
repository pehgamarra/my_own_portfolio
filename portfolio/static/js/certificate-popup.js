console.log("Certificate popup script loaded");

document.addEventListener('DOMContentLoaded', function() {
    const certificateCards = document.querySelectorAll('.certificate-card');
    const modal = document.getElementById('certificateModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.querySelector('.modal-title');
    const certificateSkills = document.getElementById('certificateSkills');
    const closeButton = modal.querySelector('.close');
    
    let currentImageIndex = 0;
    let currentImages = [];
    const prevButton = document.getElementById('prevCertificate');
    const nextButton = document.getElementById('nextCertificate');

    function updateImage() {
        modalImage.src = currentImages[currentImageIndex];
        
        if (prevButton && nextButton) {
            prevButton.style.display = currentImages.length > 1 ? 'block' : 'none';
            nextButton.style.display = currentImages.length > 1 ? 'block' : 'none';
        }
    }

    prevButton?.addEventListener('click', function() {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            updateImage();
        }
    });

    nextButton?.addEventListener('click', function() {
        if (currentImageIndex < currentImages.length - 1) {
            currentImageIndex++;
            updateImage();
        }
    });

    certificateCards.forEach(card => {
        card.addEventListener('click', function() {
            currentImages = this.dataset.images.split('|');
            currentImageIndex = 0;
            const skills = this.dataset.skills.split(',');
            const skillsTranslated = this.dataset.skillsTranslated ? this.dataset.skillsTranslated.split(',') : null;
            const title = this.querySelector('.certificated-icon span').textContent;
            
            updateImage();
            modalTitle.textContent = title;
            
            if (window.getCurrentLanguage() == 'pt') {
                certificateSkills.innerHTML = skillsTranslated.map(skill => `<li>${skill.trim()}</li>`).join('');
            } else {
                certificateSkills.innerHTML = skills.map(skill => `<li>${skill.trim()}</li>`).join('');
            }

            $(modal).modal('show');
        });
    });

    closeButton.addEventListener('click', closeModal);
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    function closeModal() {
        $(modal).modal('hide');
        setTimeout(() => {
            document.body.classList.remove('modal-open');
            document.body.style.paddingRight = '';
            const backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) {
                backdrop.remove();
            }
        }, 300);
    }
});