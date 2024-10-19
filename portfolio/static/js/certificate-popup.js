console.log("Certificate popup script loaded");

document.addEventListener('DOMContentLoaded', function() {
    const certificateCards = document.querySelectorAll('.certificate-card');
    const modal = document.getElementById('certificateModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.querySelector('.modal-title');
    const certificateSkills = document.getElementById('certificateSkills');
    const closeButton = modal.querySelector('.close');

    certificateCards.forEach(card => {
        card.addEventListener('click', function() {
            const images = this.dataset.images.split('|');
            const skills = this.dataset.skills.split(',');
            const title = this.querySelector('.certificated-icon span').textContent;

            modalImage.src = images[0];
            modalTitle.textContent = title;
            certificateSkills.innerHTML = skills.map(skill => `<li>${skill.trim()}</li>`).join('');

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
