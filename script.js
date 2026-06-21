document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.getElementById('themeDropdown');
    
    // Setup dropdown logic only if it exists on the current page
    if (dropdown) {
        const selectedText = dropdown.querySelector('.dropdown-selected');
        const optionsContainer = dropdown.querySelector('.dropdown-options');
        const options = dropdown.querySelectorAll('.dropdown-option');

        // Toggle dropdown open/closed
        selectedText.addEventListener('click', (e) => {
            e.stopPropagation();
            optionsContainer.classList.toggle('open');
        });

        // Click an option to change the theme
        options.forEach(option => {
            option.addEventListener('click', () => {
                const themeName = option.getAttribute('data-theme');
                applyTheme(themeName);
                optionsContainer.classList.remove('open');
            });
        });

        // Close dropdown when clicking anywhere else
        document.addEventListener('click', () => {
            optionsContainer.classList.remove('open');
        });
    }

    // Apply the theme to the root HTML tag and update UI
    function applyTheme(theme) {
        // Sets <html data-theme="theme-name">
        document.documentElement.setAttribute('data-theme', theme);
        
        // Update text on the dropdown if it is on this page
        if (dropdown) {
            const selectedText = dropdown.querySelector('.dropdown-selected');
            const displayString = theme.charAt(0).toUpperCase() + theme.slice(1);
            selectedText.textContent = displayString;
        }

        // Save theme choice for other pages
        localStorage.setItem('theme', theme);
    }

    // Load saved theme or fall back to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
});