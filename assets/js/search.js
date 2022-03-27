function search() {
 
    var name = document.getElementById("searchbar").value;
    var pattern = name;
    var targetId = "";
  
    var divs = document.getElementsByTagName("article");
    for (var i = 0; i < divs.length; i++) {
       var para = divs[i].getElementsByTagName("h2");
       for(var j=0; j<para.length; j++){
            var index = para[j].innerText.indexOf(pattern);
            if (index != -1) {
                targetId = divs[i].parentNode.id;
                document.getElementsByTagName("article")[i].scrollIntoView();
                break;
            }
       }
       if(index == -1){
            var para1 = divs[i].getElementsByTagName("p");
            for(var j=0; j<para1.length; j++){
                    var index1 = para1[j].innerText.indexOf(pattern);
                    if (index1 != -1) {
                        targetId = divs[i].parentNode.id;
                        document.getElementsByTagName("article")[i].scrollIntoView();
                        break;
                    }
            }
        }
    }  
 }