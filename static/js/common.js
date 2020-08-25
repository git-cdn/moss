

function showMore(_initial=700, inc=700, conID, moreID){
    let content = document.getElementById(conID)
    let more = document.getElementById(moreID)
    let contentH = content.offsetHeight
    if(contentH <= _initial){
        more.style.display="none"
        return
    }else{
        more.style.display="block"
    }
    content.style.maxHeight= _initial + "px"
    more.onclick = function(e){
        let c = document.getElementById(conID)
        let h = c.offsetHeight
        let nh = h + inc
        content.style.maxHeight= nh + "px"
        if(nh >= contentH){
            this.style.display="none"
        }
    };
}


function suitImageSize(conID, callback){
    let content = document.getElementById(conID)
    let con_width = content.offsetWidth
    let list = content.getElementsByTagName('img');
    let exist = false
    for (var i = 0; i < list.length; i++) {
        let img = list[i];
        let w =  img.getAttribute("width")
        let h =  img.getAttribute("height")
        if(!w || !h) continue
        let new_w, new_h
        if(w <= con_width){
            new_w = w
            new_h = h
        }else{
            let scale = w/h
            new_w = con_width
            new_h = new_w/scale
        }
        exist = true
        img.setAttribute("width", new_w)
        img.setAttribute("height", new_h)
    }
    callback(exist)
}

function view(storage){
    let local = localStorage.getItem(storage)
    let mark = local ? local.split(',') : []
    let id = window.location.pathname
    if(!mark.includes(id)){
        var xhr=new XMLHttpRequest();
        xhr.open('PUT', window.location.href, false);
        xhr.send();
        mark.push(id);
        localStorage.setItem(storage, mark.toString());
    }
}