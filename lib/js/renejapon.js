$().ready(function(){
    log("HTML listo");
    
    getTagName("header")[0].appendChild(setHeader())
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

    //CREAMOS NAV
    attr_element = [];
    attr_element.push(["class","navbar navbar-exapnd-lg navbar-light bg-light"]);
    navigationMenu = createElementHTML('NAV',false,attr_element);
    
    // INSERTAMOS ENLACE HOME
    attr_element = [];
    attr_element.push(["class","navbar-brand"]);
    link = createElementHTML('A','Navbar',attr_element);
    navigationMenu.appendChild(link);

    identificado_toggle = "navbarSupportedContent";
    // INSERTAMOS BOTON MENU MOVIL
    attr_element = [];
    attr_element.push(["class","navbar-toggler"]);
    attr_element.push(["type","button"]);
    attr_element.push(["data-toggle","collapse"]);
    attr_element.push(["data-target","#"+identificado_toggle]);
    attr_element.push(["aria-controls","#"+identificado_toggle]);
    attr_element.push(["aria-expanded",false]);
    attr_element.push(["aria-label","Toggle navigation"]);
    link = createElementHTML('BUTTON',false,attr_element);
    attr_element = [];
    attr_element.push(["class","navbar-toggler-icon"]);
    span_button = createElementHTML('SPAN',false,attr_element);
    link.appendChild(span_button);
    
    navigationMenu.appendChild(link);


    // INSERTAMOS DIV CONTENT MENU
    attr_element = [];
    attr_element.push(["class","collapse navbar-collapse"]);
    attr_element.push(["id",identificado_toggle]);
    div_cont_ul = createElementHTML('DIV',false,attr_element);


    // INSERTAMOS UL 
    attr_element = [];
    attr_element.push(["class","navbar-nav mr-auto"]);
    menu_ul = createElementHTML('UL',false,attr_element);

    // insertamos elementos del menu
    list_links_menu = [];
    // Nombre, array_attr, 

    // Link Home
    name_page = "home";
    attr_element = [];
    attr_element.push(["class","link link_"+name_page]);
    attr_element.push(["data-link",name_page]);
    attr_element.push(["href","./"]);
    list_links_menu.push([name_page,attr_element]);
    
    // Link nosotros
    name_page = "nosotros";
    attr_element = [];
    attr_element.push(["class","link link_"+name_page]);
    attr_element.push(["href",name_page]);
    attr_element.push(["data-link",name_page]);
    list_links_menu.push([name_page,attr_element]);

    // Link nosotros
    name_page = "contacto";
    attr_element = [];
    attr_element.push(["class","link link_"+name_page]);
    attr_element.push(["href",name_page]);
    attr_element.push(["data-link",name_page]);
    list_links_menu.push([name_page,attr_element])

        // INSERTAMOS ENLACE HOME

    for(var i =0;i<list_links_menu.length;i++){
        if(i==0){
            attr_element = [];
            attr_element.push(["class","nav-item active"]);
            menu_li = createElementHTML('LI',false,attr_element);
        }else{
            attr_element = [];
            attr_element.push(["class","nav-item"]);
            menu_li = createElementHTML('LI',false,attr_element);
        }
        li_a_link = createElementHTML('A',list_links_menu[i][0],list_links_menu[i][1]);
        menu_li.appendChild(li_a_link);
        menu_ul.appendChild(menu_li);
    }   


    // INSERTAMOS MENU EN CONTENEDOR
    div_cont_ul.appendChild(menu_ul)
    navigationMenu.appendChild(div_cont_ul);


    

    return navigationMenu;
    //FORMAMOS ESTRUCTURA HEADER
}

// <div class="collapse navbar-collapse" id="navbarSupportedContent">
//   <ul class="navbar-nav mr-auto">
//     <li class="nav-item active">
//       <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//     </li>
//     <li class="nav-item">
//       <a class="nav-link" href="#">Link</a>
//     </li>
//     <li class="nav-item dropdown">
//       <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//         Dropdown
//       </a>
//       <div class="dropdown-menu" aria-labelledby="navbarDropdown">
//         <a class="dropdown-item" href="#">Action</a>
//         <a class="dropdown-item" href="#">Another action</a>
//         <div class="dropdown-divider"></div>
//         <a class="dropdown-item" href="#">Something else here</a>
//       </div>
//     </li>
//   </ul>
// </div>


function createElementHTML(tagName,tagText=false,listAttr){
    // NOMBRE_ELEMENTO, textElement, [[typeAtribute, ValueAtributes]...] 

    var ele_obj;
    ele_obj = document.createElement(tagName);
    if(listAttr!=false){
        // si tengo atributos
        for(var i =0;i<listAttr.length;i++){
            ele_obj.setAttribute(listAttr[i][0],listAttr[i][1]);
        }
    }
    if(tagText!=false){
        //SI TENGO TEXTO
        ele_texto = document.createTextNode(tagText);
        ele_obj.appendChild(ele_texto);
    }
    return ele_obj;
}