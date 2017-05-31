document.addEventListener('scroll', function (e) {
    var scrollValue = document.body.scrollTop;
    var header = document.getElementById("menu");
    var upbtn = document.getElementById("up-btn");

    upbtn.addEventListener('click', function (e) {
        document.body.scrollTop = 0;
    });

    if(scrollValue > getHelloScreenHeight()){
        header.style.position = "fixed";
        header.style.top = "0px";
        header.style.left = "0px";
        header.style.right = "0px";
        upbtn.style.display = "block";

    }else{
        if(header.style.toString().length){
            header.style = null;
            upbtn.style = null;
        }
    }
});

function getHelloScreenHeight() {
    var helloScreen = document.getElementById("hello-screen");
    return helloScreen.offsetHeight;
}