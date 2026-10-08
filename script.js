// ========ALTERNÂNCIA DE MODO CLARO/ESCURO========
window.addEventListener('DOMContentLoaded', function () {
    var root = document.documentElement;
    var toggleBtn = document.getElementById('theme-toggle');

    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', function () {
        var isLight = root.getAttribute('data-theme') === 'light';
        if (isLight) {
            root.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            root.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
});

// ========EFEITO DE DIGITAÇÃO NO TÍTULO DA PÁGINA========
window.addEventListener('DOMContentLoaded', function () {
    var title = document.querySelector('.page-title');
    if (!title) return;

    var fullText = title.textContent;
    title.textContent = '';
    title.classList.add('typing');

    var i = 0;
    function digitar() {
        title.textContent = fullText.slice(0, i);
        i++;
        if (i <= fullText.length) {
            setTimeout(digitar, 60);
        }
    }
    digitar();
});

// ========MÁSCARA DE TELEFONE======== (99) 99999-9999
window.addEventListener('DOMContentLoaded', function () {
    var telefone = document.getElementById('telefone');
    if (!telefone) return;

    telefone.addEventListener('input', function (e) {
        var v = e.target.value.replace(/\D/g, '').slice(0, 11);
        if (v.length > 10) {
            v = v.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
        } else if (v.length > 5) {
            v = v.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        } else if (v.length > 2) {
            v = v.replace(/(\d{2})(\d{0,5})/, '($1) $2');
        } else if (v.length > 0) {
            v = v.replace(/(\d{0,2})/, '($1');
        }
        e.target.value = v;
    });
});

// ========MODAL DE CONFIRMAÇÃO DO FORMULÁRIO========
window.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('.contact-form');
    var modal = document.getElementById('modal-overlay');
    var closeBtn = document.getElementById('modal-close');
    if (!form || !modal || !closeBtn) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        modal.classList.add('show');
    });

    closeBtn.addEventListener('click', function () {
        modal.classList.remove('show');
    });

    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
});

// ========ANIMAÇÃO AO ROLAR A PÁGINA (SCROLL REVEAL)========
window.addEventListener('DOMContentLoaded', function () {
    var elementos = document.querySelectorAll('.reveal');
    if (!elementos.length) return;

    var observer = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (entrada) {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visible');
                observer.unobserve(entrada.target);
            }
        });
    }, { threshold: 0.15 });

    elementos.forEach(function (el) {
        observer.observe(el);
    });
});
