$(document).ready(function(){
    log("HTML listo");
    setHeader();
    insertSliders();
    setFooter();
    mostrarMapa();


    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    })
})

function insertSliders(){
    num_sliders = 6;// número de slider que tenemos. Seguir el formato de nombre de las imagenes.
    var html_slider = '';
    for(var i=1;i<=num_sliders;i++){
        html_slider += '<div class="swiper-slide"><a href="media/img/slider_modelo_00'+i+'.jpg"  width="100%" data-lightbox="slider_modelo_001"><img src="media/img/slider_modelo_00'+i+'.jpg" class="swiper-lazy"></a></div>'
    }
    try {
        document.getElementsByClassName('swiper-wrapper')[0].innerHTML = html_slider;
    } catch (error) {
        msg = "No hay slider."
        log(msg);
    }
    // Ejecutamos slider.
    var swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }, 
        slidesPerView: 'auto',
        centeredSlides: true,
        
     });
}

function cerrarPopup(){
    log("cerramos popup");
    try {
        var popup_window = $(".box_suscribete_popup")[0];
        popup_window.style.display = "none";
    } catch (error) {
        log("Error al obtener cuadro pop up.");
    }
}

function setHeader(){
    actual_page = location.href.split("/")[location.href.split("/").length-1];
    var is_active='';
    log(actual_page)

    var codeHeader='';
    codeHeader ='<nav class="navbar navbar-dark fixed-top navbar-expand-lg  ">';
    codeHeader +='    <a class="navbar-brand" href="index.html">LOGO SHOP</a>';
    codeHeader +='    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">';
    codeHeader +='        <span class="navbar-toggler-icon"></span>';
    codeHeader +='    </button>';
    codeHeader +='    <div class="collapse navbar-collapse" id="navbarSupportedContent">';
    codeHeader +='        <ul class="navbar-nav mr-auto">';
    // CREAMOS ARRAY CON LOS LINK DE LA HOME.
    arr_links_menu = [];
    if(actual_page.indexOf('index') != -1)is_active = " active";
    else is_active = "";
    arr_links_menu.push(["Home","index.html","nav item "+is_active,"nav-link",'<i class=\"fa fa-home\"></i>']);
    if(actual_page.indexOf('portfolio') != -1)is_active = " active";
    else is_active = "";
    arr_links_menu.push(["Portfolio","portfolio.html","nav item "+is_active,"nav-link",'<i class="fas fa-images"></i>']);
    if(actual_page.indexOf('nosotros') != -1)is_active = " active";
    else is_active = "";
    arr_links_menu.push(["Nosotros","nosotros.html","nav item "+is_active,"nav-link",'<i class="fas fa-users"></i>']);
    if(actual_page.indexOf('faqs.html') != -1)is_active = " active";
    else is_active = "";
    arr_links_menu.push(["FAQ's","faqs.html","nav item "+is_active,"nav-link",'<i class="fas fa-question-circle"></i>']);
    if(actual_page.indexOf('contacto.html') != -1)is_active = " active";
    else is_active = "";
    arr_links_menu.push(["Contacto","contacto.html","nav item "+is_active,"nav-link",'<i class="fab fa-contao"></i>']);
    for(var i=0;i<arr_links_menu.length;i++) codeHeader +='<li class="'+arr_links_menu[i][2]+'"><a class="'+arr_links_menu[i][3]+'" href="'+arr_links_menu[i][1]+'">'+arr_links_menu[i][0]+' '+arr_links_menu[i][4]+'</a></li>';
    codeHeader +='        </ul>';
    codeHeader +='    </div>';
    codeHeader +='</nav>';
    try {
        document.getElementsByTagName('header')[0].innerHTML = codeHeader;
    } catch (error) {
        msg = "Fallo, no se ha encontrado header: "+error;
        log(msg)
    }
}

function setFooter(){
    var codeFooter='';
    codeFooter +='<div class="footer_contenedor">';
    codeFooter +='<div class="footer_apartado">';
    codeFooter +='  <h2 class="footer_h">Elemento 9</h2>';
    codeFooter +='  <p class="footer_texto">Lorem ipsum dolor sit amet, magna <br>habemus ius ad, qui minimum voluptar</p>';
    codeFooter +='</div>';
    codeFooter +='<div class="footer_apartado">';
    codeFooter +='  <h4 class="footer_h">Company Link</h4>';
    codeFooter +='    <ul><br>';
    codeFooter +='        <li class="footer_texto"><a href="index.html"><p>Home</p></a></li>';
    codeFooter +='        <li class="footer_texto"><a href="portfolio.html"><p>Portfolio</p></a></li>';
    codeFooter +='        <li class="footer_texto"><a href="nosotros.html"><p>Nosotros</p></a></li>';
    codeFooter +='        <li class="footer_texto"><a href="faqs.html"><p>FAQ\'S</p></a></li>';
    codeFooter +='        <li class="footer_texto"><a href="contacto.html"><p>Contacto</p></a></li>';
    codeFooter +='    </ul>';
    codeFooter +='</div>';
    codeFooter +='<div class="footer_apartado">';
    codeFooter +='  <h4 class="footer_h">Social Networks</h4>';
    codeFooter +='  <ul><br>';
    codeFooter +='    <li class="footer_texto"><p><i class="fa fa-facebook"></i>Facebook</p></li>';
    codeFooter +='    <li class="footer_texto"><p><i class="fa fa-twitter"></i>Twitter</p></li>';
    codeFooter +='    <li class="footer_texto"><p><i class="fa fa-google-plus"></i>Google+</p></li>';
    codeFooter +='    <li class="footer_texto"><p><i class="fa fa-youtube"></i>YouTube</p></li>';
    codeFooter +='  </ul>';
    codeFooter +='</div>';
    codeFooter +='<div class="footer_apartado">';
    codeFooter +='  <h4 class="footer_h">Contact Info</h4>';
    codeFooter +='  <ul><br>';
    codeFooter +='    <li class="footer_texto"><i class="material-icons">access_time</i><p>Monday - Friday: 9:00 - 19:00</p></li>';
    codeFooter +='    <li class="footer_texto"><i class="material-icons">mail_outline</i><p>info@actividad-9.com</p></li>';
    codeFooter +='    <li class="footer_texto"><i class="material-icons">phone</i><p>+34 123-456-789</p></li>';
    codeFooter +='    <li class="footer_texto"><i class="material-icons">business</i><p>Distrito Telefónica Ronda de la Comunicación s/n 28050 Madrid</p></li>';
    codeFooter +='  </ul>';
    codeFooter +='</div>';
    codeFooter +='<div class="footer_apartado">';
    codeFooter +='  <div id="footer_mapa"></div>';
    codeFooter +='</div>';
    codeFooter +='</div>';

    try {
        document.getElementsByTagName('footer')[0].innerHTML = codeFooter;
    } catch (error) {
        msg = "Fallo, no se ha encontrado footer."+error;
        log(msg);
    }
}

function mostrarMapa(){
    var map;
    var marcador;
    var latitud = 40.515491;
    var longitud = -3.666423;
    mapa = new google.maps.Map(document.getElementById("footer_mapa"),{
      center: {lat: latitud, lng: longitud},
      zoom: 15
    });
    marcador = new google.maps.Marker({
      position: {lat: latitud, lng: longitud},
      map: mapa,
    })
}
