const menuBtn = document.getElementById('menu-btn')
const menuList = document.querySelector('.nav-list')

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('nav-list_active')
})


const project1 = document.getElementById('pro1')
const project2 = document.getElementById('pro2')
const project3 = document.getElementById('pro3')
const project4 = document.getElementById('pro4')

const proButton1 = document.getElementById('pro-btn1')
const proButton2 = document.getElementById('pro-btn2')
const proButton3 = document.getElementById('pro-btn3')
const proButton4 = document.getElementById('pro-btn4')

project1.addEventListener('click', () => {
    window.location.href = 'https://github.com/AjessDEV/login'
})
project2.addEventListener('click', () => {
    window.location.href = 'https://github.com/AjessDEV/Password-Manager'
})
project3.addEventListener('click', () => {
    window.location.href = 'https://github.com/AjessDEV/shopping-cart'
})
project4.addEventListener('click', () => {
    window.location.href = 'https://github.com/AjessDEV/batman-fan-test'
})

proButton1.addEventListener('click', () => {
    window.location.href = 'https://github.com/AjessDEV/login'
})
proButton2.addEventListener('click', () => {
    window.location.href = 'https://github.com/AjessDEV/Password-Manager'
})
proButton3.addEventListener('click', () => {
    window.location.href = 'https://github.com/AjessDEV/shopping-cart'
})
proButton4.addEventListener('click', () => {
    window.location.href = 'https://github.com/AjessDEV/batman-fan-test'
})