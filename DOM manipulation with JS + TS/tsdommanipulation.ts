const buttons = document.querySelectorAll<HTMLButtonElement>('.faq-question');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling as HTMLElement;
    const symbol = button.querySelector('.symbol') as HTMLElement;

    // Toggle visibility
    const isOpen = answer.classList.toggle('active');

    // Toggle symbol
    symbol.textContent = isOpen ? '➖' : '➕';
  });
});

