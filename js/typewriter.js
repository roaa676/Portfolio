/**
 * Typewriter Effect Module - Roaa Ahmed Portfolio
 */

export function initTypewriter() {
    const targetEl = document.getElementById('typewriterText');
    if (!targetEl) return;

    const words = [
        'Front-End Developer',
        'Angular Developer',
        'React Developer',
        'UI/UX Enthusiast'
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];

        if (!isDeleting) {
            targetEl.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(type, 2200); // Pause on complete word
                return;
            }
        } else {
            targetEl.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        }

        const typingSpeed = isDeleting ? 40 : 80;
        setTimeout(type, typingSpeed);
    }

    type();
}
