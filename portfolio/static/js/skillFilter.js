document.addEventListener('DOMContentLoaded', function() {
    const skillFilter = document.getElementById('skillFilter');
    const dropdownContent = document.querySelector('.dropdown-content');

    skillFilter.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });

    // Fechar o dropdown se clicar fora dele
    window.addEventListener('click', function(event) {
        if (!event.target.matches('#skillFilter')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });

    // Atualizar o texto do input quando uma opção é selecionada
    const skillOptions = document.querySelectorAll('.skill-option');
    skillOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            skillFilter.value = this.textContent;
            dropdownContent.classList.remove('show');
            window.location.href = this.getAttribute('href');
        });
    });

    // Definir o valor inicial do input
    const activeSkill = document.querySelector('.skill-option.active');
    if (activeSkill) {
        skillFilter.value = activeSkill.textContent;
    }
});
