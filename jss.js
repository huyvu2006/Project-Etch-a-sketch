let container = document.querySelector('.container')
let container1 = document.querySelector('.container1')
let reset = document.createElement('button')
reset.textContent='Choi lai'
let ngauNhien = function () {
    if (Math.floor(Math.random()*3)+1 == 1) return 'red';
    else if (Math.floor(Math.random()*3)+1 == 2) return 'yellow'
    else if (Math.floor(Math.random()*3)+1 == 3) return 'black'
}
let batDau = document.createElement('button')
batDau.textContent='Start Game'
container1.appendChild(batDau)
batDau.addEventListener('click',()=>{
    let a = +prompt('Nhap a',0);
    let b = +prompt('Nhap b',0)
    if(a >= 100 || b>=100) alert('So nhap khong duoc lon hon 100')
    else taoKhoi(a,b),container1.removeChild(batDau);
    container1.appendChild(reset)
    reset.style.marginLeft='12px'
    reset.addEventListener('click',()=>{
        window.location.reload()
    })
    
})
function taoKhoi (a,b) {
    for(let i = 0;i <a*b;i++) {
        let khoi = document.createElement('div')
        container.appendChild(khoi)
        khoi.classList.add('khoi')
        khoi.addEventListener('mouseenter',()=>{
        khoi.style.backgroundColor=ngauNhien()
        
        })
    }
}


