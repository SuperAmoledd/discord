document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit-button');
    const thankYouMessage = document.getElementById('thank-you-message');

    submitButton.addEventListener('click', function() {
        thankYouMessage.style.display = 'block'; // Hiện thông báo
    });
});
