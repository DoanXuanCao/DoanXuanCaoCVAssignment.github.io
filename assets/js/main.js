document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-btn');
    const htmlElement = document.documentElement;
    
    const savedTheme = localStorage.getItem('portfolio_theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
        updateIcon(savedTheme);
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            htmlElement.setAttribute('data-theme', targetTheme);
            localStorage.setItem('portfolio_theme', targetTheme);
            updateIcon(targetTheme);
        });
    }

    function updateIcon(theme) {
        if(themeToggleBtn) {
            themeToggleBtn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
            themeToggleBtn.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode');
        }
    }
});
