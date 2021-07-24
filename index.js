
function clickHandler() {

    var top = document.getElementById("top").value;
    var bottom = document.getElementById("bottom").value;
    var side = document.getElementById("side").value;
    var radius = document.getElementById("radius").value;

    //e.preventDefault();
    let num =   Math.floor(side/(2*radius)); 
    //console.log(num)
    //document.getElementById("top").innerHTML = num;
    var mainelement = document.createElement("div");
    mainelement.setAttribute("style", `border: 1px solid; height:${side}; width:${side}`);
    mainelement.innerHTML = "aaaa";
    document.body.appendChild(mainelement);
    

    for(var i=0; i < num; i++) {
        for(var j=0; j < num; j++){
            var element = document.createElement("div");
            element.innerHTML = "1234"
            element.setAttribute("style", "color: blue; border:1px solid; border-radius: 50%; background-color: orange; height: 100px; width:100px; display:inline");
            document.body.appendChild(element);
        }
        var element1 = document.createElement("br");
       
        document.body.appendChild(element1);
    } 
    
}

