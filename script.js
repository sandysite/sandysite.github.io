document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.getElementById('themeDropdown');
    
    if (dropdown) {
        const selectedContainer = dropdown.querySelector('.dropdown-selected');
        const optionsContainer = dropdown.querySelector('.dropdown-options');
        const options = dropdown.querySelectorAll('.dropdown-option');

        // Open/Close toggle
        selectedContainer.addEventListener('click', (e) => {
            e.stopPropagation();
            optionsContainer.classList.toggle('open');
        });

        // Choose a theme option
        options.forEach(option => {
            option.addEventListener('click', () => {
                const themeName = option.getAttribute('data-theme');
                applyTheme(themeName);
                optionsContainer.classList.remove('open');
            });
        });

        // Close dropdown if clicking elsewhere
        document.addEventListener('click', () => {
            optionsContainer.classList.remove('open');
        });
    }

    // Apply selected theme variables
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        
        if (dropdown) {
            const textSpan = dropdown.querySelector('.selected-text');
            const displayString = theme.charAt(0).toUpperCase() + theme.slice(1);
            textSpan.textContent = displayString; // Changes text safely now!
        }

        localStorage.setItem('theme', theme);
    }

    // Load from memory
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
});