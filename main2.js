document.addEventListener('DOMContentLoaded', () => {
    // Data for New Section Products (12 items)
    const newSectionProducts = [
        {
            name: 'Pagani Huayra',
            shortDesc: '項目:RGB',
            longDesc: '支援多語言語音指令，整合多種智慧家居設備，讓生活更便利。',
            image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
            price: 'NT$ 3,000',
            brand: 'Pagani',
            category: '汽車'
        },
        {
            name: '造型頭盔',
            shortDesc: '安全又時尚',
            longDesc: '高強度材質，結合潮流設計，保護你的同時展現個性。',
            image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
            price: 'NT$ 1,200',
            brand: 'Doggy',
            category: '配件'
        },
        {
            name: '多功能手環',
            shortDesc: '健康監測，訊息提醒',
            longDesc: '支援心率、步數、睡眠監測，來電與訊息提醒，生活好幫手。',
            image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
            price: 'NT$ 2,500',
            brand: 'SmartDog',
            category: '穿戴'
        },
        {
            name: '智能餵食器',
            shortDesc: '遠端控制，定時餵食',
            longDesc: '可透過手機 App 遠端設定餵食時間與份量，支援語音提醒。',
            image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
            price: 'NT$ 1,800',
            brand: 'PetFeeder',
            category: '家電'
        },
        {
            name: '寵物智能項圈',
            shortDesc: 'GPS 定位，健康監控',
            longDesc: '即時追蹤寵物位置，記錄活動與健康數據，防走失必備。',
            image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=600&q=80',
            price: 'NT$ 2,200',
            brand: 'SafePet',
            category: '穿戴'
        },
        {
            name: '自動逗貓機',
            shortDesc: '智能互動，遠端操控',
            longDesc: '多種模式切換，讓寵物在家也能快樂玩耍，支援遠端遙控。',
            image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=600&q=80',
            price: 'NT$ 1,500',
            brand: 'CatFun',
            category: '玩具'
        },
        {
            name: '智能飲水機',
            shortDesc: '自動循環，過濾淨水',
            longDesc: '多重過濾系統，保持水質新鮮，鼓勵寵物多喝水。',
            image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
            price: 'NT$ 1,000',
            brand: 'WaterPro',
            category: '家電'
        },
        {
            name: '寵物推車',
            shortDesc: '輕巧折疊，外出方便',
            longDesc: '高承重設計，適合各種體型寵物，外出旅遊好幫手。',
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
            price: 'NT$ 3,600',
            brand: 'GoPet',
            category: '戶外'
        },
        {
            name: '智能寵物門',
            shortDesc: '自動感應，安全防護',
            longDesc: '支援晶片辨識，寵物靠近自動開啟，防止陌生動物進入。',
            image: 'https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=600&q=80',
            price: 'NT$ 2,800',
            brand: 'SmartHome',
            category: '家電'
        },
        {
            name: '寵物冷暖墊',
            shortDesc: '四季適用，恆溫舒適',
            longDesc: '自動調節溫度，讓寵物冬暖夏涼，安全省電。',
            image: 'https://images.unsplash.com/photo-1518715308788-3005759c61d4?auto=format&fit=crop&w=600&q=80',
            price: 'NT$ 2,000',
            brand: 'ComfyPet',
            category: '家居'
        },
        {
            name: '智能寵物攝影機',
            shortDesc: '遠端監控，雙向語音',
            longDesc: '1080P 高畫質，支援夜視與雙向語音，隨時掌握寵物動態。',
            image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80',
            price: 'NT$ 2,900',
            brand: 'PetCam',
            category: '家電'
        },
        {
            name: '寵物自動洗澡機',
            shortDesc: '全自動洗淨，省時省力',
            longDesc: '多段水溫調節，智能烘乾，讓洗澡變得輕鬆又安全。',
            image: 'https://images.unsplash.com/photo-1518715308788-3005759c61d4?auto=format&fit=crop&w=600&q=80',
            price: 'NT$ 5,500',
            brand: 'CleanPet',
            category: '家電'
        }
    ];

    // 分頁功能
    const pageSize = 9;
    let currentPage = 1;
    const newSectionGrid = document.getElementById('newSectionGrid');
    const paginationDiv = document.createElement('div');
    paginationDiv.style = 'display:flex;justify-content:center;gap:1.2rem;margin:2.5rem 0;';
    paginationDiv.id = 'paginationDiv';
    newSectionGrid.after(paginationDiv);

    function renderPage(page) {
        newSectionGrid.innerHTML = '';
        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        const pageProducts = newSectionProducts.slice(start, end);
        pageProducts.forEach((product, idx) => {
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
            productItem.style.cursor = 'pointer';
            productItem.addEventListener('click', (e) => {
                if (e.target.tagName.toLowerCase() === 'a') return;
                window.location.href = `product_detail.html?idx=${start + idx}`;
            });
            productItem.querySelector('.btn-small').addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = `product_detail.html?idx=${start + idx}`;
            });
            newSectionGrid.appendChild(productItem);
        });
        renderPagination(page);
    }

    function renderPagination(page) {
        const totalPages = Math.ceil(newSectionProducts.length / pageSize);
        paginationDiv.innerHTML = '';
        if (totalPages <= 1) return;
        const prevBtn = document.createElement('button');
        prevBtn.textContent = '上一頁';
        prevBtn.className = 'back-btn';
        prevBtn.disabled = page === 1;
        prevBtn.style.opacity = prevBtn.disabled ? '0.5' : '1';
        prevBtn.style.border = 'none';
        prevBtn.style.boxShadow = '0 2px 8px rgba(32,31,45,0.08)';
        prevBtn.style.margin = '0';
        prevBtn.style.background = '#E6B16A';
        prevBtn.style.color = '#fff';
        prevBtn.style.padding = '0.8rem 2.2rem';
        prevBtn.style.borderRadius = '0.7rem';
        prevBtn.style.fontSize = '1.1rem';
        prevBtn.style.fontWeight = '700';
        prevBtn.style.transition = 'background 0.2s';
        prevBtn.onmouseover = function(){ if(!prevBtn.disabled) prevBtn.style.background = '#3D2C1E'; };
        prevBtn.onmouseout = function(){ prevBtn.style.background = '#E6B16A'; };
        prevBtn.onclick = () => {
            if (currentPage > 1) {
                currentPage--;
                renderPage(currentPage);
            }
        };
        paginationDiv.appendChild(prevBtn);
        const pageInfo = document.createElement('span');
        pageInfo.style = 'margin:0 1.2rem;font-weight:700;color:#B79C85;';
        pageInfo.textContent = `第 ${page} / ${totalPages} 頁`;
        paginationDiv.appendChild(pageInfo);
        const nextBtn = document.createElement('button');
        nextBtn.textContent = '下一頁';
        nextBtn.className = 'back-btn';
        nextBtn.disabled = page === totalPages;
        nextBtn.style.opacity = nextBtn.disabled ? '0.5' : '1';
        nextBtn.style.border = 'none';
        nextBtn.style.boxShadow = '0 2px 8px rgba(32,31,45,0.08)';
        nextBtn.style.margin = '0';
        nextBtn.style.background = '#E6B16A';
        nextBtn.style.color = '#fff';
        nextBtn.style.padding = '0.8rem 2.2rem';
        nextBtn.style.borderRadius = '0.7rem';
        nextBtn.style.fontSize = '1.1rem';
        nextBtn.style.fontWeight = '700';
        nextBtn.style.transition = 'background 0.2s';
        nextBtn.onmouseover = function(){ if(!nextBtn.disabled) nextBtn.style.background = '#3D2C1E'; };
        nextBtn.onmouseout = function(){ nextBtn.style.background = '#E6B16A'; };
        nextBtn.onclick = () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderPage(currentPage);
            }
        };
        paginationDiv.appendChild(nextBtn);
    }

    renderPage(currentPage);
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
