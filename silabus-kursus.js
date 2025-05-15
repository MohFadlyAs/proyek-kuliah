$(document).ready(function() {
    // Animasi Accordion
    $('#courseAccordion .collapse').on('show.bs.collapse', function() {
        $(this).prev().find('.btn-link').addClass('active');
        $(this).prev().find('.btn-link').css({
            'background-color': '#218838',
            'color': '#fff'
        });
    });

    $('#courseAccordion .collapse').on('hide.bs.collapse', function() {
        $(this).prev().find('.btn-link').removeClass('active');
        $(this).prev().find('.btn-link').css({
            'background-color': '#28a745',
            'color': '#fff'
        });
    });

    // Smooth Scroll ke bagian halaman yang diinginkan
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });
});
