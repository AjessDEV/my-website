const menuBtn = document.getElementById('menu-btn')
const menuList = document.querySelector('.nav-list')

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('nav-list_active')
})