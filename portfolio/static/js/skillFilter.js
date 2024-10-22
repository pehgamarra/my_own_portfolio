document.addEventListener('DOMContentLoaded', function() {
    const filterOptions = document.querySelectorAll('.filter-option input[type="radio"]');
    
    filterOptions.forEach(option => {
        option.addEventListener('change', function() {
            const selectedSkill = this.value;
            const currentUrl = new URL(window.location.href);
            
            if (selectedSkill === 'all') {
                currentUrl.searchParams.delete('skill');
            } else {
                currentUrl.searchParams.set('skill', selectedSkill);
            }
            
            // Manter o parâmetro de idioma, se existir
            const lang = currentUrl.searchParams.get('lang');
            if (lang) {
                currentUrl.searchParams.set('lang', lang);
            }
            
            window.location.href = currentUrl.toString();
        });
    });
});
