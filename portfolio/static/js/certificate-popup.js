console.log("Certificate popup script loaded");

document.addEventListener('DOMContentLoaded', function() {
    const certificateCards = document.querySelectorAll('.certificate-card');
    const modal = document.getElementById('certificateModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.querySelector('.modal-title');
    const certificateSkills = document.getElementById('certificateSkills');
    const closeButton = modal.querySelector('.close');

    function updateCertificateSkills() {
        console.log('Updating certificate skills');
        if (currentCard) {
            const currentLanguage = typeof window.getCurrentLanguage === 'function' ? window.getCurrentLanguage() : 'en';
            console.log('Current language:', currentLanguage);
            console.log('Current card data:', currentCard.dataset);
            
            let skills;
            if (currentLanguage === 'pt' && currentCard.dataset.skillsTranslated) {
                skills = currentCard.dataset.skillsTranslated;
            } else {
                skills = currentCard.dataset.skills;
            }
            
            console.log('Skills:', skills);
            
            if (skills) {
                certificateSkills.innerHTML = '<ul>' + skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('') + '</ul>';
            } else {
                console.error('No skills found for this certificate');
                certificateSkills.innerHTML = '<p>No skills information available.</p>';
            }
        } else {
            console.error('No current card selected');
        }
    }

    certificateCards.forEach(card => {
        card.addEventListener('click', function() {
            const images = this.dataset.images.split('|');
            const skills = this.dataset.skills.split(',');
            const skillsTranslated = this.dataset.skillsTranslated ? this.dataset.skillsTranslated.split(',') : null;
            const title = this.querySelector('.certificated-icon span').textContent;
            modalImage.src = images[0];
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
        }, 300); // Aguarda a transição do modal terminar
    }
});