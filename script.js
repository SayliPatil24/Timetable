document.addEventListener('DOMContentLoaded', function() {
    const hydrateButton = document.getElementById('hydrateButton');
    const hydrateMessage = document.getElementById('hydrateMessage');

    hydrateButton.addEventListener('click', function() {
        hydrateMessage.textContent = "Great job! Keep drinking water!";
        hydrateMessage.classList.remove('hidden');
    });
});