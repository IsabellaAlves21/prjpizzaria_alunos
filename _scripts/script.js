$('section#domingo-perfeito').waypoint(function(direcao) {
    if (direcao == "down") {
        $('div.folha1').addClass('animate__animated animate__fadeInUp');
        $('div.camarao').addClass('animate__animated animate__fadeInUp');
        $('div.folha2').addClass('animate__animated animate__fadeInUp');
        $('div.folha3').addClass('animate__animated animate__fadeInUp');
        $('div.tomate').addClass('animate__animated animate__fadeInUp');
        $('div.queijo').addClass('animate__animated animate__fadeInUp');


    } else if (direcao == "up") {
        $('div.folha1').removeClass('animate__animated animate__fadeInUp');
        $('div.camarao').removeClass('animate__animated animate__fadeInUp');
        $('div.folha2').removeClass('animate__animated animate__fadeInUp');
        $('div.folha3').removeClass('animate__animated animate__fadeInUp');
        $('div.tomate').removeClass('animate__animated animate__fadeInUp');
        $('div.queijo').removeClass('animate__animated animate__fadeInUp');
    }
}, {
    offset: '800px;'
})


