// 主產品與服務頁面 JS
import { renderProducts, renderServices, setupNav, setupForm, setupEffects, setupModal } from './modules/mainPage.js';

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderServices();
    setupNav();
    setupForm();
    setupEffects();
    setupModal();
});
