(function() {
//    function removeElement(elementId)
//    {
//        element = document.getElementById(elementId);
//        if (element) {
//            element.parentNode.removeChild(element);
//        }
//    }

    var el = document.getElementsByClassName("example-grid-box");
    for (var i = el.length-1; i >= 0; i--) {
        var obj = el[i];
        obj.parentNode.style='static';
        obj.parentNode.removeChild(obj)
    }

})();