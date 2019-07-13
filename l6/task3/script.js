var myArr = ["_заглушка.jpg","vlcsnap-00001.jpg","vlcsnap-00002.jpg", "vlcsnap-00003.jpg"];
var curInd = 0;

function f(id){
var img = document.getElementById(id);

(curInd == 3) ? curInd = 0 : curInd++;

img.src = "img\\" + myArr[curInd]; 
}

function b(id){
    var img = document.getElementById(id);
    
    (curInd == 0) ? curInd = 3 : curInd--;
    
    img.src = "img\\" + myArr[curInd]; 
    }