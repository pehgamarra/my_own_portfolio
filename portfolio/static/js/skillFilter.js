document.addEventListener('DOMContentLoaded', function() {
    const skillFilter = document.getElementById('skillFilter');
    const dropdownContent = document.querySelector('.dropdown-content');

    skillFilter.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('#skillFilter')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });

    const skillOptions = document.querySelectorAll('.skill-option');
    skillOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            skillFilter.value = this.textContent;
            dropdownContent.classList.remove('show');
            window.location.href = this.getAttribute('href');
        });
    });

    const activeSkill = document.querySelector('.skill-option.active');
    if (activeSkill) {
        skillFilter.value = activeSkill.textContent;
    }
});

function initializeSkillFilter() {
    const skillButtons = document.querySelectorAll('.skill-button');
    const projectCards = document.querySelectorAll('.project-card');

    skillButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedSkill = this.getAttribute('data-skill');
            
            // Remove active class from all buttons
            skillButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');

            // Filter projects
            projectCards.forEach(card => {
                const cardSkills = card.getAttribute('data-skills').split(',');
                if (selectedSkill === 'all' || cardSkills.includes(selectedSkill)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Ensure the function is called after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeSkillFilter);
