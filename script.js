var rankings = document.getElementsByClassName("ranking-btn");
var main = document.getElementById("main-div");
var thankYou = document.getElementById("thank-you-state");
var submit = document.getElementById("submit");
var rateSelection = document.getElementById("rate-selection")



for ( var i = 0; i < rankings.length; i++ ) {
    rankings[i].addEventListener("click", function() {
        selection = event.target;
        selection.setAttribute("id", "selection")
    })
}

submit.onclick = function() {
    main.style.display = "none";
    rateSelection.innerHTML = `You selected ${selection.innerHTML} out of 5`
    thankYou.style.display = "flex";

}



// selection.classList.add("selection");
        
//         selection.style.backgroundColor = "hsl(25, 97%, 53%)";
//         selection.style.color = "white"