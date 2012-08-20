(function() {

    var d,b,c,cs,s, i,row,span, cont;
    d=document;
    b=d.body;
    if(!b) return;
    if(d.getElementById("example-grid-box")) return;

    cont= d.createElement('div');
    cont.setAttribute("id", "example-grid-box");

    cont.className='container';
    cs=cont.style;
    cs.overflow='hidden';
    cs.position='fixed';
    cs.top=cs.bottom=cs.left=cs.right=0;
    row=d.createElement('div');
    row.className='row';
    row.style.height='100%';
    for (i=0;i<30;i++){
        row.innerHTML+='<div class="span1" style="background-color:red; opacity:.3; height:100%;">&nbsp;</div>';}
//    s.createElement('style');
//    s.innerHTML='@media (max-width: 768px){#example-grid-box{display: none;}}'
    cont.innerHTML+="<style>@media (max-width: 768px){#example-grid-box{display: none;}}</style> ";
    cont.appendChild(row);
    b.appendChild(cont);

})();