function showMore(initial, inc, conID, moreID){
    let content = document.getElementById(conID)
    let more = document.getElementById(moreID)
    let contentH = content.offsetHeight
    if(contentH <= initial){
        more.style.display="none"
        return
    }
    content.style.maxHeight= initial + "px"
    document.getElementById(moreID).addEventListener("click", function(e){
        let c = document.getElementById(conID)
        let h = c.offsetHeight
        let nh = h + inc
        content.style.maxHeight= nh + "px"
        if(nh >= contentH){
            this.style.display="none"
        }
    });
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