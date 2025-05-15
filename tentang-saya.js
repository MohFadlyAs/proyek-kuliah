$(document).ready(function() {
    // Smooth scrolling for links
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Animate social icons on hover
    $('.social-icon').hover(function() {
        $(this).find('.social-logo').toggleClass('animate__animated animate__fadeIn');
    });

});
