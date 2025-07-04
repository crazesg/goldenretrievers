document.addEventListener('DOMContentLoaded', () => {
    // Data for New Section Products
    const newSectionProducts = [
        {
            name: '智慧語音助手',
            shortDesc: '語音控制，智慧生活',
            longDesc: '支援多語言語音指令，整合多種智慧家居設備，讓生活更便利。',
            image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80'
        },
        {
            name: '造型頭盔',
            shortDesc: '安全又時尚',
            longDesc: '高強度材質，結合潮流設計，保護你的同時展現個性。',
            image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80'
        },
        {
            name: '多功能手環',
            shortDesc: '健康監測，訊息提醒',
            longDesc: '支援心率、步數、睡眠監測，來電與訊息提醒，生活好幫手。',
            image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80'
        }
    ];
    const newSectionGrid = document.getElementById('newSectionGrid');
    newSectionProducts.forEach(product => {
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
        newSectionGrid.appendChild(productItem);
    });
});

// 註冊功能
const registerLink = document.getElementById('registerLink');
const registerSection = document.getElementById('register-section');
const newSection = document.getElementById('new-section');
const registerForm = document.getElementById('registerForm');
const registerMsg = document.getElementById('registerMsg');

if (registerLink) {
    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        registerSection.style.display = 'block';
        newSection.style.display = 'none';
        registerMsg.textContent = '';
    });
}

if (registerForm) {
    registerForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const name = document.getElementById('regName').value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const password = document.getElementById('regPassword').value;
        if (!name || !email || !password) {
            registerMsg.textContent = '請填寫所有欄位';
            return;
        }
        if (password.length < 8) {
            registerMsg.textContent = '密碼至少需8碼';
            return;
        }
        // 呼叫後端 API 進行註冊驗證
        try {
            const res = await fetch('http://localhost:3000/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password })
            });
            const data = await res.json();
            if (res.ok && data.success) {
                registerMsg.style.color = '#388e3c';
                registerMsg.textContent = '註冊成功，資料已儲存！'; // 明確標示為後端成功
                registerForm.reset();
                setTimeout(() => {
                    registerSection.style.display = 'none';
                    newSection.style.display = 'block';
                    registerMsg.style.color = '#d32f2f';
                }, 1500);
            } else {
                registerMsg.style.color = '#d32f2f';
                registerMsg.textContent = data.message || '註冊失敗';
            }
        } catch (err) {
            registerMsg.style.color = '#d32f2f';
            registerMsg.textContent = '伺服器連線失敗';
        }
    });
}

// 會員清單顯示功能
const showUsersLink = document.getElementById('showUsersLink');
const userListSection = document.getElementById('user-list-section');
const userList = document.getElementById('userList');
const closeUserList = document.getElementById('closeUserList');

if (showUsersLink) {
    showUsersLink.addEventListener('click', async (e) => {
        e.preventDefault();
        // 顯示會員清單區塊，隱藏其他區塊
        userListSection.style.display = 'block';
        registerSection.style.display = 'none';
        newSection.style.display = 'none';
        // 從後端取得會員資料
        try {
            const res = await fetch('http://localhost:3000/api/users');
            const users = await res.json();
            userList.innerHTML = '';
            if (!Array.isArray(users) || users.length === 0) {
                userList.innerHTML = '<li>目前無會員資料</li>';
            } else {
                users.forEach(u => {
                    const li = document.createElement('li');
                    li.textContent = `姓名：${u.name}，Email：${u.email}`;
                    userList.appendChild(li);
                });
            }
        } catch (err) {
            userList.innerHTML = '<li>無法取得會員資料</li>';
        }
    });
}
if (closeUserList) {
    closeUserList.addEventListener('click', () => {
        userListSection.style.display = 'none';
        newSection.style.display = 'block';
    });
}

// ===== 會員登入功能與 UI 切換 =====
const loginSection = document.getElementById('login-section');
const loginForm = document.getElementById('loginForm');
const loginMsg = document.getElementById('loginMsg');
const toLoginBtn = document.getElementById('toLoginBtn');
const toRegisterBtn = document.getElementById('toRegisterBtn');
const userMenu = document.getElementById('userMenu');

// 切換到登入表單
if (toLoginBtn) {
    toLoginBtn.addEventListener('click', () => {
        registerSection.style.display = 'none';
        loginSection.style.display = 'block';
        loginMsg.textContent = '';
    });
}
// 切換到註冊表單
if (toRegisterBtn) {
    toRegisterBtn.addEventListener('click', () => {
        loginSection.style.display = 'none';
        registerSection.style.display = 'block';
        registerMsg.textContent = '';
    });
}
// 登入表單送出
if (loginForm) {
    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;
        if (!email || !password) {
            loginMsg.style.color = '#d32f2f';
            loginMsg.textContent = '請填寫所有欄位';
            return;
        }
        try {
            const res = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();
            if (res.ok && data.success) {
                loginMsg.style.color = '#388e3c';
                loginMsg.textContent = '登入成功！';
                localStorage.setItem('user', JSON.stringify({ name: data.name, email }));
                setTimeout(() => {
                    loginSection.style.display = 'none';
                    newSection.style.display = 'block';
                    showUserMenu();
                    loginMsg.textContent = '';
                }, 1000);
            } else {
                loginMsg.style.color = '#d32f2f';
                loginMsg.textContent = data.message || '登入失敗';
            }
        } catch (err) {
            loginMsg.style.color = '#d32f2f';
            loginMsg.textContent = '伺服器連線失敗';
        }
    });
}
// 顯示 userMenu
function showUserMenu() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.name) {
        userMenu.innerHTML = `<span style="margin-right:8px;">👤 ${user.name}</span><button id="logoutBtn" style="padding:2px 10px;">登出</button>`;
        document.getElementById('logoutBtn').onclick = () => {
            localStorage.removeItem('user');
            userMenu.innerHTML = '';
        };
    } else {
        userMenu.innerHTML = '';
    }
}
// 頁面載入時自動顯示 userMenu
showUserMenu();
