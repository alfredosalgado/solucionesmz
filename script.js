// Navegación móvil
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Cerrar menú móvil al hacer clic en un enlace
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Scroll suave para enlaces internos
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Funcionalidad de la flecha de scroll
const scrollArrow = document.querySelector('.scroll-arrow');
if (scrollArrow) {
    scrollArrow.addEventListener('click', function() {
        const servicesSection = document.querySelector('#servicios');
        if (servicesSection) {
            servicesSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// Cambiar estilo del header al hacer scroll
const header = document.querySelector('.header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Agregar/quitar clase para el fondo del header
    if (scrollTop > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Ocultar/mostrar header en scroll
    if (scrollTop > lastScrollTop && scrollTop > 200) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// Animación de contadores en la sección de estadísticas
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const animateCounters = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.stat-number');
            
            counters.forEach(counter => {
                const target = counter.textContent;
                const isNumber = /^\d+$/.test(target);
                
                if (isNumber) {
                    const finalNumber = parseInt(target);
                    let currentNumber = 0;
                    const increment = finalNumber / 50;
                    
                    const updateCounter = () => {
                        if (currentNumber < finalNumber) {
                            currentNumber += increment;
                            counter.textContent = Math.floor(currentNumber);
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = finalNumber;
                        }
                    };
                    
                    updateCounter();
                }
            });
            
            observer.unobserve(entry.target);
        }
    });
};

const statsObserver = new IntersectionObserver(animateCounters, observerOptions);
const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Animación de aparición para elementos
const fadeInElements = document.querySelectorAll('.service-card, .testimonial-card, .contact-method');

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeInElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(element);
});

// Efecto parallax sutil en el hero
const heroSection = document.querySelector('.hero');
const heroImage = document.querySelector('.hero-image img');

if (heroSection && heroImage) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (scrolled < heroSection.offsetHeight) {
            heroImage.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Validación y mejora de formularios (si se agregan en el futuro)
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

const validatePhone = (phone) => {
    const re = /^[+]?[0-9\s-()]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 8;
};

// Función para mostrar notificaciones
const showNotification = (message, type = 'info') => {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    switch (type) {
        case 'success':
            notification.style.backgroundColor = '#48BB78';
            break;
        case 'error':
            notification.style.backgroundColor = '#F56565';
            break;
        case 'warning':
            notification.style.backgroundColor = '#ED8936';
            break;
        default:
            notification.style.backgroundColor = '#4299E1';
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
};

// Mejorar la experiencia de los botones de WhatsApp y llamada
const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
const phoneButtons = document.querySelectorAll('a[href^="tel:"]');

whatsappButtons.forEach(button => {
    button.addEventListener('click', () => {
        showNotification('Abriendo WhatsApp...', 'info');
    });
});

phoneButtons.forEach(button => {
    button.addEventListener('click', () => {
        showNotification('Iniciando llamada...', 'info');
    });
});

// Lazy loading para imágenes
const images = document.querySelectorAll('img');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        }
    });
});

images.forEach(img => {
    if (img.dataset.src) {
        img.classList.add('lazy');
        imageObserver.observe(img);
    }
});

// Mejorar la accesibilidad del teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Cerrar menú móvil con Escape
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Detectar si el usuario prefiere movimiento reducido
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Desactivar animaciones para usuarios que prefieren movimiento reducido
    document.documentElement.style.setProperty('--transition', 'none');
    
    // Desactivar scroll suave
    document.documentElement.style.scrollBehavior = 'auto';
}

// Función para copiar texto al portapapeles
const copyToClipboard = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
        showNotification('Copiado al portapapeles', 'success');
    } catch (err) {
        // Fallback para navegadores más antiguos
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('Copiado al portapapeles', 'success');
    }
};

// Agregar funcionalidad de copia a números de teléfono y email
const contactLinks = document.querySelectorAll('.contact-method a');
contactLinks.forEach(link => {
    if (link.href.startsWith('tel:') || link.href.startsWith('mailto:')) {
        link.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            const text = link.textContent.trim();
            copyToClipboard(text);
        });
        
        // Agregar tooltip
        link.title = 'Click derecho para copiar';
    }
});

// Optimización de rendimiento: debounce para eventos de scroll
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Aplicar debounce al evento de scroll
const debouncedScrollHandler = debounce(() => {
    // Aquí puedes agregar lógica adicional de scroll si es necesaria
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Funcionalidad del botón flotante de WhatsApp
const initWhatsAppButton = () => {
    const whatsappButton = document.querySelector('.whatsapp-button');
    const whatsappFloat = document.querySelector('.whatsapp-float');
    
    if (whatsappButton && whatsappFloat) {
        // Mostrar el botón después de un delay
        setTimeout(() => {
            whatsappFloat.style.opacity = '1';
            whatsappFloat.style.transform = 'scale(1)';
        }, 2000);
        
        // Efecto de click
        whatsappButton.addEventListener('click', (e) => {
            // Animación de click
            whatsappButton.style.transform = 'scale(0.95)';
            setTimeout(() => {
                whatsappButton.style.transform = '';
            }, 150);
            
            // Mostrar notificación
            showNotification('Abriendo WhatsApp...', 'success');
            
            // Analytics (opcional)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'WhatsApp',
                    'event_label': 'Botón Flotante'
                });
            }
        });
        
        // Efecto de entrada al hacer scroll
        let hasShown = false;
        window.addEventListener('scroll', () => {
            if (!hasShown && window.scrollY > 300) {
                whatsappFloat.classList.add('show-attention');
                hasShown = true;
                
                // Remover la clase después de la animación
                setTimeout(() => {
                    whatsappFloat.classList.remove('show-attention');
                }, 3000);
            }
        });
    }
};

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    // Agregar clase para indicar que JS está cargado
    document.body.classList.add('js-loaded');
    
    // Inicializar botón de WhatsApp
    initWhatsAppButton();
    
    // Mostrar mensaje de bienvenida sutil
    setTimeout(() => {
        console.log('🔧 Soluciones MZ - Gasfitería Profesional');
        console.log('📞 Contáctanos: +56 9 3679 0452');
    }, 1000);
});

// Service Worker para PWA (opcional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registrado: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registro falló: ', registrationError);
            });
    });
}