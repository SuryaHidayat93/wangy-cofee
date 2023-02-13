// toggle
const navbarNav= document.querySelector 
('.navbar-nav');
// tpggle click
document.querySelector('#Hamburger-menu').
 onclick = () => {
    navbarNav.classList.toggle('active');
};

const hamburger = document.querySelector ('#Hamburger-menu');

document.addEventListener ('click', function (e) {
    if (!hamburger.contains(e.target)&& !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
        
    };
})