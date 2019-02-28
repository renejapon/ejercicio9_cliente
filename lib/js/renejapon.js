$().ready(function(){
    log("HTML listo");
    
    getTagName("header")[0].innerHTML = setHeader();
    var swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        autoplay: {
            delay: 1000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
     });



})






function getTagName(tagName){
    var elemento;
    try {
        elemento = document.getElementsByTagName(tagName);
    } catch (error) {
        msg = "Error al obtener nombre de etiqueta. "+error;
        log(msg);
    }
    return elemento;
}[]

function setHeader(){
    var codeHeader='';
    codeHeader ='<nav class="navbar navbar-expand-lg navbar-light bg-light">';
    codeHeader +='    <a class="navbar-brand" href="./">Shop Online</a>';
    codeHeader +='    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">';
    codeHeader +='        <span class="navbar-toggler-icon"></span>';
    codeHeader +='    </button>';
    codeHeader +='    <div class="collapse navbar-collapse" id="navbarSupportedContent">';
    codeHeader +='        <ul class="navbar-nav mr-auto">';
    // CREAMOS ARRAY CON LOS LINK DE LA HOME.
    arr_links_menu = [];
    arr_links_menu.push(["Home","./","nav item active","nav-link","<i class=\"fa fa-home\"><i>"]);
    arr_links_menu.push(["Porfolio","porfolio.html","nav item","nav-link",""]);
    arr_links_menu.push(["Nosotros","nosotros.html","nav item","nav-link",""]);
    arr_links_menu.push(["FAQ's","faqs.html","nav item","nav-link",""]);
    arr_links_menu.push(["Contacto","contacto.html","nav item","nav-link",""]);
    for(var i=0;i<arr_links_menu.length;i++) codeHeader +='<li class="'+arr_links_menu[i][2]+'"><a class="'+arr_links_menu[i][3]+'" href="'+arr_links_menu[i][1]+'">'+arr_links_menu[i][0]+' '+arr_links_menu[i][4]+'</a></li>';
    codeHeader +='        </ul>';
    codeHeader +='    </div>';
    codeHeader +='</nav>';
    
    return codeHeader;
}



