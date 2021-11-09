var form = document.getElementById("form");
var input = document.getElementById("input");
var shortlinkfield = document.getElementById("shortlink");
var qrcodefield = document.getElementById("qrcodefield");
var loadingfield = document.getElementById("loadingfield");
var resposefield = document.getElementById("resposefield");

function handleRequestQrCode(){
    fetch(`https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=${input.value}&choe=UTF-8`)
    .then(function(data){
        qrcodefield.src = data.url;

        loadingfield.style.display = "none";
        resposefield.style.display = "flex";
    });
}

function handleRequest(){
    fetch("https://encurtado.herokuapp.com/create", {
        method: "post",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify({url: input.value}),
    })
    .then(res => res.json())
    .then(function(data){
        shortlinkfield.value = data.short_link;
        handleRequestQrCode();
    });
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    resposefield.style.display = "none";
    loadingfield.style.display = "block";

    handleRequest();
});