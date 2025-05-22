var buttons = document.querySelectorAll('.faq-question');
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        var answer = button.nextElementSibling;
        var symbol = button.querySelector('.symbol');
        // Toggle visibility
        var isOpen = answer.classList.toggle('active');
        // Toggle symbol
        symbol.textContent = isOpen ? '➖' : '➕';
    });
});
