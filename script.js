document.getElementById('downloadResume').addEventListener('click', function () {
    window.open('resume.pdf', '_blank');  
});

document.getElementById('toggleDarkMode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});
