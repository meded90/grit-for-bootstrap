(function() {

    var d,b,c,cs,s, i,row,span, cont, box;
    d=document;
    b=d.body;
    if(!b) return;
    if(d.getElementById("example-grid-box")) return;

    box= d.createElement('div');
    box.setAttribute("id", "example-grid-box");
    box.className="_responsive_";
    cont= d.createElement('div');

    cont.className='container -container container_12 container_24 container_16';
    cont.style.backgroundImage='none';
    cont.style.backgroundColor='none'
    cont.style.height='100%'
    cont.style.padding='0'

    cs=box.style;
    cs.overflow='hidden';
    cs.position='fixed';
    cs.backgroundImage='none';
    cs.backgroundColor='none';
    cs.top=cs.bottom=cs.left=cs.right=0;

    row=d.createElement('div');
    row.backgroundColor='none';
    row.backgroundImage='none';
    row.className='row  clearfix -row';
    row.style.height='100%';

        for (i=0;i<30;i++){
        row.innerHTML+='<div class="-col1 span1 span-1 grid_1 onecol small-1 columns " style="background-color:red; opacity:.3; height:100%;">&nbsp;</div>';}
//    s.createElement('style');
//    s.innerHTML='@media (max-width: 768px){#example-grid-box{display: none;}}'
//    cont.innerHTML+="<style>@media (max-width: 768px){#example-grid-box{display: none;}}</style> ";
    cont.appendChild(row);
    box.appendChild(cont);
    b.appendChild(box);

})();