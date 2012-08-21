(function() {
    var d,b
    d=document;
    b=d.body;
    if(!b) return;

function createGrit(){
    console.log('createGrit begin');
    var cs,span, cont,i;


    cont= d.createElement('div');
    cont.className='example-grid-box';
    cs=cont.style;
    cs.position='absolute';
    cs.top=cs.bottom=cs.left=0;
    cs.width='100%';
    for (i=0;i<12;i++){
        if (i==0){
            cont.innerHTML+='<div class="span1" style="background-color:blue; opacity:.3; height:100%; border-radius: 3px 0 0 3px;">&nbsp;</div>';
        }
        if (i==11){
            cont.innerHTML+='<div class="span1" style="background-color:blue; opacity:.3; height:100%; border-radius:0 3px 3px 0;">&nbsp;</div>';
        }
        if (i>0&&i<11){
            cont.innerHTML+='<div class="span1" style="background-color:blue; opacity:.3; height:100%; border-radius:0;">&nbsp; 1</div>';
        }
    }
    cont.innerHTML+='<span onClick="console.log($(this).parent().remove());" сlass="example-grid-box-clous close" style="' +
        'position: absolute;' +
        'cursor: pointer;' +
        'right:5px;' +
        'top:3px;' +
        'font-size: 20px;' +
        'font-weight: bold;' +
        'line-height: 18px;' +
        'color: #000;' +
        'text-shadow: 0 1px 0 white;' +
        'opacity: 0.5;">×</span>'
    cont.innerHTML+=''
    console.log(cont);
    return cont;

}
//    this.parentNode.remove()
    var rowf = b.getElementsByClassName('row-fluid');
    for (var i = rowf.length-1; i >= 0; i--) {
        var obj = rowf[i];
        console.log(i);
        console.log(rowf[i])
        obj.style.position ='relative';
        obj.appendChild(createGrit());
//        console.log(9);

    }

    document.getElementsByClassName('example-grid-box-clous').onclick= function(event) {
        alet(1)
    }
})();
