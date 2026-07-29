/**
 * Contact Form & EmailJS Integration Module - Roaa Ahmed Portfolio
 */

export function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('contactSubmitBtn');
    const toast = document.getElementById('toastNotification');
    const toastMessage = document.getElementById('toastMessage');
    const copyEmailBtn = document.getElementById('copyEmailBtn');

    // Initialize EmailJS
    if (window.emailjs) {
        window.emailjs.init("rHXWBysZ-jZ3GXrBz");
    }

    function showToast(message, isSuccess = true) {
        if (!toast || !toastMessage) return;
        toastMessage.textContent = message;
        toast.style.borderColor = isSuccess ? 'var(--accent-emerald)' : '#ef4444';
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }

    // One-click Copy Email Handler
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', () => {
            const emailText = 'roaaezzat676@gmail.com';
            navigator.clipboard.writeText(emailText).then(() => {
                showToast("Email address copied to clipboard! 📋", true);
            }).catch(() => {
                showToast("Email: roaaezzat676@gmail.com", true);
            });
        });
    }

    if (contactForm && submitBtn) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('formName');
            const emailInput = document.getElementById('formEmail');
            const messageInput = document.getElementById('formMessage');

            const name = nameInput?.value.trim();
            const email = emailInput?.value.trim();
            const message = messageInput?.value.trim();

            if (!name || !email || !message) {
                showToast("Please fill out all required fields.", false);
                return;
            }

            // Email validation regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showToast("Please enter a valid email address.", false);
                return;
            }

            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending Message...';
            submitBtn.disabled = true;

            const params = {
                from_name: name,
                from_email: email,
                message: message,
                subject: `New Portfolio Inquiry from ${name}`
            };

            if (window.emailjs) {
                window.emailjs.send("service_1exgc0y", "template_uq1rjmn", params)
                    .then(() => {
                        showToast("Message sent successfully! I will reply soon. ✅", true);
                        contactForm.reset();
                        submitBtn.innerHTML = originalBtnText;
                        submitBtn.disabled = false;
                    })
                    .catch((error) => {
                        console.error("EmailJS Error:", error);
                        showToast("Failed to send message. Please try again later. ❌", false);
                        submitBtn.innerHTML = originalBtnText;
                        submitBtn.disabled = false;
                    });
            } else {
                showToast("Email service unavailable. Please email directly.", false);
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            }
        });
    }
}
