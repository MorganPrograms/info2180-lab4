"use strict"; 

window.onload = function(){
    var show = document.getElementById("status"); 
    var press = document.getElementsByClassName("btn")[0];
    var board = document.getElementById("board");
    var squares = board.getElementsByTagName("div");

    for (var i  = 0; i < squares.length; i+=1){
        var count = "O";
        press.addEventListener("click", function(){
            for (var x = 0; x < squares.length; x+=1){
                squares[x].innerHTML = null; 
                squares[x].classList.remove("X");
                squares[x].classList.remove("O");
            }
            show.innerHTML = "Move your mouse over a square and click to play an X or an O.";
            show.className = "status";
            count = "O";
        }); 
        squares[i].classList.add("square");
        squares[i].addEventListener("mouseover", function(){
            this.classList.add("hover");
        })
        squares[i].addEventListener("mouseleave", function(){
            this.classList.remove("hover");
        })
        squares[i].addEventListener("click", function() {
            if(count === "O"){
                if (this.innerHTML != "X" && this.innerHTML != "O" && show.innerHTML === "Move your mouse over a square and click to play an X or an O."){
                    this.classList.add("X");
                    this.innerHTML = "X";
                    count = "X";
                    if(squares[0].innerHTML === "X" && squares[1].innerHTML === "X" && squares[2].innerHTML === "X" || squares[0].innerHTML === "X" && squares[3].innerHTML === "X" && squares[6].innerHTML === "X" || squares[1].innerHTML === "X" && squares[4].innerHTML === "X" && squares[7].innerHTML === "X" || squares[2].innerHTML === "X" && squares[5].innerHTML === "X" && squares[8].innerHTML === "X" || squares[3].innerHTML === "X" && squares[4].innerHTML === "X" && squares[5].innerHTML === "X" || squares[6].innerHTML === "X" && squares[7].innerHTML === "X" && squares[8].innerHTML === "X" || squares[0].innerHTML === "X" && squares[4].innerHTML === "X" && squares[8].innerHTML === "X" || squares[2].innerHTML === "X" && squares[4].innerHTML === "X" && squares[6].innerHTML === "X"){
                        show.innerHTML = "Congratulations! X is the winner!";
                        show.className = "you-won";
                    }
                    
                }
               
            }
            else{
                if (this.innerHTML != "X" && this.innerHTML != "O" && show.innerHTML === "Move your mouse over a square and click to play an X or an O."){
                    this.classList.add("O");
                    this.innerHTML = "O";
                    count = "O";
                    if(squares[0].innerHTML === "O" && squares[1].innerHTML === "O" && squares[2].innerHTML === "O" || squares[0].innerHTML === "O" && squares[3].innerHTML === "O" && squares[6].innerHTML === "O" || squares[1].innerHTML === "O" && squares[4].innerHTML === "O" && squares[7].innerHTML === "O" || squares[2].innerHTML === "O" && squares[5].innerHTML === "O" && squares[8].innerHTML === "O" || squares[3].innerHTML === "O" && squares[4].innerHTML === "O" && squares[5].innerHTML === "O" || squares[6].innerHTML === "O" && squares[7].innerHTML === "O" && squares[8].innerHTML === "O" || squares[0].innerHTML === "O" && squares[4].innerHTML === "O" && squares[8].innerHTML === "O" || squares[2].innerHTML === "O" && squares[4].innerHTML === "O" && squares[6].innerHTML === "O"){
                        show.innerHTML = "Congratulations! O is the winner!";
                        show.className = "you-won";
                    }
                }

            }
            
           

        })
        
    }
    
};



