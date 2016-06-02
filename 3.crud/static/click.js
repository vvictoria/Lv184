window.onload = function() {
    document.getElementById("new").onclick = function () {
        console.log("I'm alive!");
        document.getElementById("new").style.display = "none";
        document.getElementById("popup").style.display = "inline-block";
    };
    document.getElementsByClassName("edit").onclick = function () {
        document.getElementById("new").style.display = "none";
        document.getElementById("popup").style.display = "inline-block";
        console.log("I'm alive!!!!!!!!!!!");
    };
};