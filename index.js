
function clickHandler() {

    var top = document.getElementById("top").value;
    var bottom = document.getElementById("bottom").value;
    var side = document.getElementById("side").value;
    var radius = document.getElementById("radius").value;

    
    let num =   Math.floor(side/(2*radius)); 
   
    var mainelement = document.createElement("div");
    mainelement.setAttribute("style", `border: 1px solid; height:${side}px; width:${side}px`);
    mainelement.innerHTML = "square";
    document.body.appendChild(mainelement);
    

    for(var i=0; i < num; i++) {
        for(var j=0; j < num; j++){
            var element = document.createElement("div");
            element.innerHTML = "circle"
            element.setAttribute("style", `border:1px solid; border-radius: 50%; background-color: orange; height:${radius}px; width:${radius}px; display:inline`);
            document.body.appendChild(element);
        }
        var element1 = document.createElement("br");
        element1.setAttribute("style", "padding:10px; margin:10px")
        document.body.appendChild(element1);
    } 
    
}

