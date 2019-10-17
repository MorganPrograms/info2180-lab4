"use strict"; 

window.onload = function(){
    var board = document.getElementById("board");
    var squares = board.getElementsByTagName("div");


    for (var i  = 0; i < squares.length; i+=1){
        var count = 1; 
        squares[i].classList.add("square");
        squares[i].addEventListener("click", function() {
            if(count % 2 === 1){
                if (this.innerHTML != "X" && this.innerHTML != "O"){
                    this.classList.add("X");
                    this.innerHTML = "X";
                    
                }
            }
            else{
                if (this.innerHTML != "X" && this.innerHTML != "O"){
                    this.classList.add("O");
                    this.innerHTML = "O";

            }
        }
            count+=1;

        })
        
    }
    
};



