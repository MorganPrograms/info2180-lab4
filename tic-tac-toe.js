"use strict"; 

window.onload = function(){
    var board = document.getElementById("board");
    var squares = board.getElementsByTagName("div");
    var show = document.getElementById("status"); 
    for (var i  = 0; i < squares.length; i+=1){
        var count = 1; 
        squares[i].classList.add("square");
        squares[i].addEventListener("mouseover", function(){
            this.classList.add("hover");
        })
        squares[i].addEventListener("mouseleave", function(){
            this.classList.remove("hover");
        })
        squares[i].addEventListener("click", function() {
            if(count % 2 === 1){
                if (this.innerHTML != "X" && this.innerHTML != "O" && show.innerHTML === "Move your mouse over a square and click to play an X or an O."){
                    this.classList.add("X");
                    this.innerHTML = "X";
                    if(squares[0].innerHTML === "X" && squares[1].innerHTML === "X" && squares[2].innerHTML === "X" || squares[0].innerHTML === "X" && squares[3].innerHTML === "X" && squares[6].innerHTML === "X" || squares[1].innerHTML === "X" && squares[4].innerHTML === "X" && squares[7].innerHTML === "X" || squares[2].innerHTML === "X" && squares[5].innerHTML === "X" && squares[8].innerHTML === "X" || squares[3].innerHTML === "X" && squares[4].innerHTML === "X" && squares[5].innerHTML === "X" || squares[6].innerHTML === "X" && squares[7].innerHTML === "X" && squares[8].innerHTML === "X" || squares[0].innerHTML === "X" && squares[4].innerHTML === "X" && squares[8].innerHTML === "X" || squares[2].innerHTML === "X" && squares[4].innerHTML === "X" && squares[6].innerHTML === "X"){
                        show.innerHTML = "Congratulations! X is the Winner!";
                        show.className = "you-won";
                    }
                    
                }
               
            }
            else{
                if (this.innerHTML != "X" && this.innerHTML != "O" && show.innerHTML === "Move your mouse over a square and click to play an X or an O."){
                    this.classList.add("O");
                    this.innerHTML = "O";
                    if(squares[0].innerHTML === "O" && squares[1].innerHTML === "O" && squares[2].innerHTML === "O" || squares[0].innerHTML === "O" && squares[3].innerHTML === "O" && squares[6].innerHTML === "O" || squares[1].innerHTML === "O" && squares[4].innerHTML === "O" && squares[7].innerHTML === "O" || squares[2].innerHTML === "O" && squares[5].innerHTML === "O" && squares[8].innerHTML === "O" || squares[3].innerHTML === "O" && squares[4].innerHTML === "O" && squares[5].innerHTML === "O" || squares[6].innerHTML === "O" && squares[7].innerHTML === "O" && squares[8].innerHTML === "O" || squares[0].innerHTML === "O" && squares[4].innerHTML === "O" && squares[8].innerHTML === "O" || squares[2].innerHTML === "O" && squares[4].innerHTML === "O" && squares[6].innerHTML === "O"){
                        show.innerHTML = "Congratulations! O is the Winner!";
                        show.className = "you-won";
                    }
                }

            }
            count+=1;
            
           

        })
        
    }
    
};



