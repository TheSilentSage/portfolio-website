window.addEventListener('scroll',reveal)


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function reveal(){
    var reveals = document.querySelectorAll("section")
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 250;
        var unrevealPoint = revealpoint + 950;

        if (revealTop < windowHeight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
        if (revealTop < windowHeight - unrevealPoint){
            reveals[i].classList.add('inactive');
        }else{
            reveals[i].classList.remove('inactive');
        }
        
    }
}