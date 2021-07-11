let players = function (marker) {
    // players objects
    let playerMarker;

    function setMarker(marker){
        playerMarker = marker;
    }

    setMarker(marker);

    return {playerMarker};
}

let gameboard = function () {
    let board = ["hello","","","","","","","","",""];

    // reder board via data key attribute check.
    let displayBoard = function (){
        for(let i=1; i<board.length; i++)
        {
            let x = document.querySelector(`.board div[data-key="${i}"]`);
            x.textContent = board[i];
        }
    }

    let playerOne = players("X");
    let playerTwo = players("0");
    let currentPlayer;
    
    function mark(e, currentPlayer){
        // currentPlayer.playerMarker;
        board[e.target.getAttribute("data-key")] = currentPlayer.playerMarker;
    }
       
    function checkWin(){
        if((board[1]!="" && board[1]==board[2] && board[2]==board[3] ) ||
        (board[4]!="" && board[4]==board[5] && board[5]==board[6] ) ||
        (board[7]!="" && board[7]==board[8] && board[8]==board[9] ) ||
        
        (board[1]!="" && board[1]==board[4] && board[4]==board[7] ) ||
        (board[2]!="" && board[2]==board[5] && board[5]==board[8] ) ||
        (board[3]!="" && board[3]==board[6] && board[6]==board[9] ) ||
        
        (board[1]!="" && board[1]==board[5] && board[5]==board[9] ) ||
        (board[3]!="" && board[3]==board[5] && board[5]==board[7] ) || 
         !board.some(pos => pos === ""))
           {
                return true;
            }        

            else return false;
        }

        function endGame(){
            alert("end");
            window.location.reload();
        }
        
   

    document.querySelector(".start").addEventListener('click',() => {
        displayBoard();
        currentPlayer = playerOne;
        document.querySelector(".board").style.display = "grid";
        
       
        let positions = document.querySelectorAll(".board div");
        positions.forEach(position => {
            position.addEventListener("click", function(e){
                mark(e, currentPlayer);

                displayBoard();

                if(checkWin()) endGame();

                if(currentPlayer == playerOne) currentPlayer = playerTwo;
                else if(currentPlayer == playerTwo) currentPlayer = playerOne;
            })
        })
    
    }, {once: true});

        
          

    return {displayBoard};
}();








