/**
 * Skills Intersection Observer Module - Roaa Ahmed Portfolio
 */

export function initSkillsAnimation() {
    const skillsSection = document.getElementById('skills');
    if (!skillsSection) return;

    const progressFills = skillsSection.querySelectorAll('.skill-progress-fill');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                progressFills.forEach(fill => {
                    const targetWidth = fill.getAttribute('data-width') || '0';
                    fill.style.width = `${targetWidth}%`;
                });
                // Unobserve after initial animation
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    observer.observe(skillsSection);
}
