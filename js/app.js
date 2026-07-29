/**
 * Main Application Entry Point - Roaa Ahmed Portfolio
 */

import { initNavigation } from './navigation.js';
import { initTypewriter } from './typewriter.js';
import { initSkillsAnimation } from './skills.js';
import { initProjects } from './projects.js';
import { initContactForm } from './contact.js';
import { initScrollReveal } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initTypewriter();
    initSkillsAnimation();
    initProjects();
    initContactForm();
    initScrollReveal();

    console.log('✨ Portfolio initialized successfully.');
});
