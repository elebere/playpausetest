const pauseIconClassName = 'fa-pause'
const playIconClassName = 'fa-play'

function playandpause() {

    const btn = document.getElementById("swapme");

    const isPlayButton = btn.classList.contains(playIconClassName)
    //swaps pause to play and vice versa
    if (isPlayButton) { 
        btn.classList.remove(playIconClassName) // tar bort play
        btn.classList.add(pauseIconClassName) // lägger till paus
        //mer funktion här
    } 
    else {
        btn.classList.remove(pauseIconClassName) // tar bort paus
        btn.classList.add(playIconClassName) // lägger till play
        //mer funktion här
    }
    
} 


const btnele = document.getElementById("playorpausebtn");
btnele.addEventListener("click", playandpause);