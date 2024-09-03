window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#880e4f';
        navbar.style.padding = '8px 0';
    } else {
        navbar.style.backgroundColor = '#d81b60';
        navbar.style.padding = '20px 0';
    }
});
