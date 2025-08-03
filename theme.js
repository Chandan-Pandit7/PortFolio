const toggleThemeButton = document.querySelector('.theme-btn');
const body = document.body;

toggleThemeButton.addEventListener('click', () => {
    console.log("button clicked");
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    }
});

// Set default theme
if (!body.classList.contains('dark-theme') && !body.classList.contains('light-theme')) {
    body.classList.add('dark-theme'); // Default to dark theme
}
body.classList.remove('light-theme'); // Ensure light theme is not set initially
body.classList.add('dark-theme');