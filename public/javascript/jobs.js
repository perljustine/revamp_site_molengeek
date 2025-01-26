document.querySelectorAll('.job-item').forEach(jobItem => {
    const header = jobItem.querySelector('.job-header');
    const description = jobItem.querySelector('.job-description');
    const toggleIcon = jobItem.querySelector('.toggle-icon');

    header.addEventListener('click', () => {
        description.classList.toggle('open');
        toggleIcon.classList.toggle('active');
    });
});

// Meme chose que pour la nav bar