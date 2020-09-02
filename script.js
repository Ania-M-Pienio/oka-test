$(() => {

    initialize();    
    
})


async function initialize() {

    $(".right").addClass("expand");
    $(".left").addClass("expand");
    $(".form").addClass("show");
    $(".review").addClass("show");



}

function delay(time)  {
    return new Promise( (resolve, rej) => {
        setTimeout(() => {
            resolve("ok");
        }, time );
    })
}


// $(".stripes:not(.two)").css("height", "100px");
// await delay(3000);
// $(".below").css("height", "500px");
// await delay(3000);
// $(".stripes.two").css({"height" : "300px", "top": "-40px", "width": "1100px"});