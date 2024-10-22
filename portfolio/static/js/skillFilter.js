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