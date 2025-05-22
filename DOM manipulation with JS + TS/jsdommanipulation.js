const questions = document.querySelectorAll('.faq-question');

questions.forEach((button) => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const symbol = button.querySelector('.symbol');

    answer.classList.toggle('active');

    // Toggle ➕ and ➖
    if (answer.classList.contains('active')) {
      symbol.textContent = '➖';
    } else {
      symbol.textContent = '➕';
    }
  });
});
