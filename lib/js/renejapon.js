$().ready(function(){
    log("HTML listo");
    
    getTagName("header")[0].innerHTML = setHeader();
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
}

function setHeader(){
    var codeHeader='';
    var menuItems=[];

    // Nombre, clases, url
    menuItems.push(["Home",'link link_home','index.html']);
    menuItems.push(["Porfolio",'link link_porfolio','porfolio.html']);
    menuItems.push(["FAQ\'s",'link link_faqs','fqas.html']);
    menuItems.push(["Nosotros",'link link_nosotros','nosotros.html']);
    menuItems.push(["Contacto",'link link_contacto','contacto.html']);

    //FORMAMOS ESTRUCTURA HEADER
    codeHeader += '<nav>';
    codeHeader += ' <ul>';
    for(var i = 0;i<menuItems.length;i++)codeHeader += '<li><a href="'+menuItems[i][2]+'"><i class="'+menuItems[i][1]+'"></i> '+menuItems[i][0]+'</a></li>'
    codeHeader += ' </ul>';
    codeHeader += '</nav>';
    return codeHeader;
}