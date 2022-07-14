let darkMode = localStorage.getItem('darkMode'); 
const darkModeToggle = document.querySelector('#theme');
const enableDarkMode = () => {
    document.body.classList.add('dark-theme');
    localStorage.setItem('darkMode', 'enabled');
}
const disableDarkMode = () => {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('darkMode', null);
}
if (darkMode === 'enabled') {
enableDarkMode();
}
darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {  
        disableDarkMode(); 
    }
});