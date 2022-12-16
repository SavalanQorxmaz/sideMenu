

const leftSide = document.getElementById("leftSide");
const left = document.getElementById("left");
const right = document.getElementById("right");





left.onclick = ()=> {
    left.style.display = "none"
    leftSide.style.left = "-200px"
    right.style.display = "block" 
    left.style.transition = "3s"
    
}


right.onclick = ()=> {
    leftSide.style.left = "0px"
    left.style.display = "block"
    right.style.display = "none"
    
    
}

