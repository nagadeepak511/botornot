var flag = 0;
var nav_list = document.querySelector('.nav-list');
var toggleMenu = ()=>{
    if(flag === 0) {
        nav_list.style.transform = "translateX(0%)";
        flag = 1;
    } else if(flag === 1) {
        nav_list.style.transform = "translateX(-100%)";
        flag = 0;
    }
}