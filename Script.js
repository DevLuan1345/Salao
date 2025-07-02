document.querySelectorAll('.menu a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

// Animação de destaque ao passar o mouse nos serviços //
const servicos = document.querySelectorAll('.servico');
servicos.forEach(servico => {
    servico.addEventListener('mouseenter', () => {
        servico.style.transform = 'scale(1.05)';
        servico.style.transition = 'transform 0.3s';
    });
    servico.addEventListener('mouseleave', () => {
        servico.style.transform = 'scale(1)';
    });

    });

