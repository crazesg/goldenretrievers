document.addEventListener('DOMContentLoaded', () => {
    // Data for Products
    const products = [
        {
            name: '搶劫系統',
            shortDesc: '敬請期待',
            longDesc: '這款智慧香氛擴散器結合了最新的物聯網技術和精緻設計，您可以透過手機App輕鬆控制香氣濃度和定時開關。它採用超聲波霧化技術，確保香氛均勻分佈，同時保持精油的原始純淨。多種情境模式，讓您的居家或辦公空間充滿放鬆與療癒的氛圍。',
            image: 'https://storage.googleapis.com/dall-e-images/MjeXPfCgxCRLkHICVik8mw7RbMM2%2Fb9fef58f-0399-4739-90a2-d14ee62bc20f.png'
        },
        {
            name: '時裝系統',
            shortDesc: '敬請期待',
            longDesc: '我們的極簡設計筆記本，選用優質的環保紙張，書寫流暢不滲墨。封面設計簡約而不失品味，提供多種柔和色系選擇。無論是日常隨筆、會議記錄還是創意塗鴉，都能讓您沉浸在書寫的樂趣中，是追求生活質感的您的理想選擇。',
            image: 'https://storage.googleapis.com/dall-e-images/MjeXPfCgxCRLkHICVik8mw7RbMM2%2Fbb5e70b4-8f8c-43b1-84bf-d116c206313f.png'
        },
        {
            name: '敬請期待',
            shortDesc: '敬請期待',
            longDesc: '每一隻手工陶瓷咖啡杯都由在地匠人精心燒製，獨特的釉色和溫潤手感，讓您的每一次咖啡時光都充滿儀式感。它不僅是飲具，更是生活中的藝術品，為您的早晨帶來一份寧靜與美好。',
            image: 'https://storage.googleapis.com/dall-e-images/MjeXPfCgxCRLkHICVik8mw7RbMM2%2Ff9b47581-a15d-411d-8bcc-a852ca43c42a.png'
        }
    ];

    // Data for Services
    const services = [
        {
            name: '服務項目',
            shortDesc: '車輛 武器 時裝 插件客製化服務',
            longDesc: '我們的居家空間諮詢服務，從您的生活習慣和喜好出發，提供個性化的空間規劃和軟裝搭配建議。無論是小坪數改造，還是全屋設計，我們都將協助您創造一個既美觀又實用的溫馨居所，讓家成為真正的避風港。'
        },
        {
            name: '售後服務',
            shortDesc: '完善的售後服務 保證商品正確運行',
            longDesc: '在眾多商品中挑選適合自己的好物並不容易。我們的選品顧問服務，將根據您的風格、需求和預算，為您精選家居用品、個人小物或禮品，確保每一件都是兼具美感與實用性的質感好物，讓您的選擇不再迷茫。'
        },
        {
            name: '免責協議',
            shortDesc: '公平公正 保障你我權益',
            longDesc: '對於企業而言，建立一個有溫度、有深度的品牌形象至關重要。我們提供從品牌定位、視覺識別到故事敘述的全方位品牌顧問服務，幫助您的品牌在市場中脫穎而出，與目標受眾建立更深層次的情感連結。'
        }
    ];
    const productGrid = document.getElementById('productGrid');
    const serviceGrid = document.getElementById('serviceGrid');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const contactForm = document.getElementById('contactForm');
    const sectionsToAnimate = document.querySelectorAll('#products, #services, #about, #contact');
    // Populate Products
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('grid-item');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="grid-item-content">
                <h3>${product.name}</h3>
                <p>${product.shortDesc}</p>
                <a href="#" class="btn-small">了解更多</a>
            </div>
        `;
        productGrid.appendChild(productItem);
    });
    // Populate Services
    services.forEach((service, idx) => {
        const serviceItem = document.createElement('div');
        serviceItem.classList.add('grid-item');
        // 依序對應三個獨立頁面
        let page = '';
        if (idx === 0) page = 'service1.html';
        else if (idx === 1) page = 'service2.html';
        else if (idx === 2) page = 'service3.html';
        serviceItem.innerHTML = `
            <div class="grid-item-content">
                <h3>${service.name}</h3>
                <p>${service.shortDesc}</p>
                <a href="${page}" class="btn-small">了解更多</a>
            </div>
        `;
        serviceItem.style.cursor = 'pointer';
        serviceItem.addEventListener('click', (e) => {
            if (e.target.tagName.toLowerCase() !== 'a') {
                window.location.href = page;
            }
        });
        serviceGrid.appendChild(serviceItem);
    });
    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    // Close mobile nav when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        if (!link.classList.contains('auth-button')) {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        }
    });
    // Contact Form Submission
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        if (name && email && subject && message) {
            alert(`感謝您的訊息！\n姓名: ${name}\n電子郵件: ${email}\n主旨: ${subject}\n訊息: ${message}\n\n我們將盡快回覆您。`);
            contactForm.reset();
        } else {
            alert('請填寫所有必填欄位。');
        }
    });
    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const offsetTop = targetElement.offsetTop - navbarHeight;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        });
    });
    // Scroll Effect (Intersection Observer)
    sectionsToAnimate.forEach(section => {
        section.classList.add('hidden-section');
    });
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hidden-section');
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });
    // Login/Register Modal Logic
    const authModal = document.getElementById('authModal');
    const closeAuthModalBtn = authModal.querySelector('.modal-close-btn');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const toggleFormLinks = authModal.querySelectorAll('.toggle-form-link');
    closeAuthModalBtn.addEventListener('click', () => {
        authModal.style.display = 'none';
    });
    window.addEventListener('mousedown', (event) => {
        // 只在點擊遮罩本身才關閉，不影響內容選取
        if (event.target === authModal) {
            authModal.style.display = 'none';
        }
    });
    toggleFormLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetForm = e.target.dataset.form;
            if (targetForm === 'register') {
                loginForm.style.display = 'none';
                registerForm.style.display = 'block';
            } else if (targetForm === 'login') {
                loginForm.style.display = 'block';
                registerForm.style.display = 'none';
            }
        });
    });
    // 使用者選單 DOM
    const userMenu = document.getElementById('userMenu');
    const openAuthModalBtn = document.getElementById('openAuthModal');

    // 檢查登入狀態並更新選單
    function updateUserMenu() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.name) {
            userMenu.style.display = '';
            openAuthModalBtn.style.display = 'none';
            userMenu.innerHTML = `
                <div class="user-dropdown">
                    <span>👤 ${user.name}</span>
                    <button id="logoutBtn" style="margin-left:10px;">登出</button>
                </div>
            `;
            document.getElementById('logoutBtn').onclick = () => {
                localStorage.removeItem('user');
                updateUserMenu();
            };
        } else {
            userMenu.style.display = 'none';
            openAuthModalBtn.style.display = '';
            userMenu.innerHTML = '';
        }
    }
    updateUserMenu();

    // 修正登入/註冊按鈕點擊事件
    openAuthModalBtn.addEventListener('click', () => {
        if (openAuthModalBtn.style.display === 'none') return;
        authModal.style.display = 'flex';
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
    // ====== UI 訊息區塊優化 ======
    const authMsg = document.getElementById('authMsg');
    function showAuthMsg(msg, type = 'error') {
        authMsg.textContent = msg;
        authMsg.className = 'auth-msg ' + (type === 'success' ? 'success' : 'error');
    }
    function clearAuthMsg() {
        authMsg.textContent = '';
        authMsg.className = 'auth-msg';
    }
    // Login/Reg Form Validation
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        clearAuthMsg();
        const email = loginForm.querySelector('#login-email').value;
        const password = loginForm.querySelector('#login-password').value;
        if (email && password) {
            try {
                const res = await fetch('http://localhost:3000/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });
                const data = await res.json();
                if (res.ok && data.success) {
                    localStorage.setItem('user', JSON.stringify({ name: data.name, email }));
                    showAuthMsg('登入成功！', 'success');
                    setTimeout(() => {
                        authModal.style.display = 'none';
                        updateUserMenu();
                        clearAuthMsg();
                    }, 1200);
                } else {
                    showAuthMsg(data.message || '登入失敗');
                }
            } catch (err) {
                showAuthMsg('伺服器連線失敗');
            }
        } else {
            showAuthMsg('請輸入電子郵件/用戶名和密碼。');
        }
    });
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        clearAuthMsg();
        const username = registerForm.querySelector('#register-username').value;
        const email = registerForm.querySelector('#register-email').value;
        const password = registerForm.querySelector('#register-password').value;
        const confirmPassword = registerForm.querySelector('#register-confirm-password').value;
        if (!username || !email || !password || !confirmPassword) {
            showAuthMsg('請填寫所有必填欄位。');
            return;
        }
        if (password !== confirmPassword) {
            showAuthMsg('密碼與確認密碼不一致。');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            showAuthMsg('請輸入有效的電子郵件地址。');
            return;
        }
        try {
            const res = await fetch('http://localhost:3000/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: username, email, password })
            });
            const data = await res.json();
            if (res.ok && data.success) {
                // 註冊成功後自動登入
                const loginRes = await fetch('http://localhost:3000/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });
                const loginData = await loginRes.json();
                if (loginRes.ok && loginData.success) {
                    localStorage.setItem('user', JSON.stringify({ name: loginData.name, email }));
                    showAuthMsg('註冊並自動登入成功！', 'success');
                    registerForm.reset();
                    setTimeout(() => {
                        authModal.style.display = 'none';
                        updateUserMenu();
                        clearAuthMsg();
                    }, 1200);
                } else {
                    showAuthMsg('註冊成功，但自動登入失敗，請手動登入');
                }
            } else {
                showAuthMsg(data.message || '註冊失敗');
            }
        } catch (err) {
            showAuthMsg('伺服器連線失敗');
        }
    });
});
