document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.getElementById('themeDropdown');
    
    if (dropdown) {
        const selectedContainer = dropdown.querySelector('.dropdown-selected');
        const optionsContainer = dropdown.querySelector('.dropdown-options');
        const options = dropdown.querySelectorAll('.dropdown-option');

        // Toggle open class on click
        selectedContainer.addEventListener('click', (e) => {
            e.stopPropagation();
            optionsContainer.classList.toggle('open');
        });

        // Click individual list options
        options.forEach(option => {
            option.addEventListener('click', () => {
                const themeName = option.getAttribute('data-theme');
                applyTheme(themeName);
                optionsContainer.classList.remove('open');
            });
        });

        // Close dropdown when clicking anywhere else on the screen
        document.addEventListener('click', () => {
            optionsContainer.classList.remove('open');
        });
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        
        if (dropdown) {
            const textSpan = dropdown.querySelector('.selected-text');
            const displayString = theme.charAt(0).toUpperCase() + theme.slice(1);
            textSpan.textContent = displayString;
        }

        localStorage.setItem('theme', theme);
    }

    // Initialize layout on load
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
});