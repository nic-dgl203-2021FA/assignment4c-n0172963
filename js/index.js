function switchStyle(style) {
    var element = document.getElementById("styles");
    if(style == 'style-1'){
        element.classList.add("style-1");
        element.classList.remove("style-2");
        element.classList.remove("style-3");
    }
    else if(style == 'style-2'){
        element.classList.add("style-2");
        element.classList.remove("style-1");
        element.classList.remove("style-3");
    }
    else if(style == 'style-3'){
        element.classList.add("style-3");
        element.classList.remove("style-2");
        element.classList.remove("style-1");
    }
    else{
        element.classList.remove("style-3");
        element.classList.remove("style-2");
        element.classList.remove("style-1");
    }

 }

