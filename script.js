const yearElement = document.getElementById('year');
const copyEmailButton = document.getElementById('copyEmail');
const copyNotice = document.getElementById('copyNotice');
const contactForm = document.getElementById('contactForm');

function showCopyNotice(message) {
    if (!copyNotice) return;
    copyNotice.textContent = message;
    copyNotice.classList.add('visible');
    window.setTimeout(() => {
        copyNotice.classList.remove('visible');
    }, 2400);
}

window.addEventListener('DOMContentLoaded', () => {
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    if (copyEmailButton) {
        copyEmailButton.addEventListener('click', () => {
            navigator.clipboard
                .writeText('gjglobalenterprises26@gmail.com')
                .then(() => showCopyNotice('Email copied to clipboard!'))
                .catch(() => showCopyNotice('Copy manually: gjglobalenterprises26@gmail.com'));
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            showCopyNotice('Thank you! We will reach out soon.');
            contactForm.reset();
        });
    }
});