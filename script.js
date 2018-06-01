
//My first javascript program
//By Daniel L Clark 
function ticTac(p1, p2){
//setting the variables to use in code.
    var canvasNum, box, ctx, taken, turn, xo, winner, gameOver, player1, player2, errorOut, errorOne, titleOut, titleOne, ngbutton, nameButton;
    turn = 1;
    gameOver = false;
    errorOut = document.getElementById("result");
    errorOne = document.getElementById("result1");
    titleOut = document.getElementById("title");
    titleOne = document.getElementById("title1");
    
//preset arrays for boxes, pieces, and winners
    taken = [false, false, false, false, false, false, false, false, false];
    xo = ['','','','','','','','',''];
    winner = [[0,1,2], [3,4,5], [6,7,8],[0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
    player1 = p1;
    player2 = p2;

//button to start a new game and function
//click event for new game 
    ngbutton = document.getElementById("newgame");
    ngbutton.addEventListener("click", newGame);
//new game function reloads page if button is pushed
    function newGame(){
        gameOver = false;
        location.reload();
    }

//canvas box click and get canvasNumber clickevent and function
    document.getElementById("boxes").addEventListener("click", function(b) {
        boxClick(b.target.id);
    });
//canvas boxes logic allowing it to know which box is clicked via function and switch
    function boxClick(canvasNumId){
        box = document.getElementById(canvasNumId);
        ctx = box.getContext("2d");
        //switch statement to assign each box a number upon them being clicked
        switch(canvasNumId){
            case "b1": canvasNum=1;
                break;
            case "b2": canvasNum=2;
                break;
            case "b3": canvasNum=3;
                break;
            case "b4": canvasNum=4;
                break;
            case "b5": canvasNum=5;
                break;
            case "b6": canvasNum=6;
                break;
            case "b7": canvasNum=7;
                break;
            case "b8": canvasNum=8;
                break;
            case "b9": canvasNum=9;
                break;
        }

    //drawing x's and o's in canvas first time using this bare with me :(
        if(gameOver === false){

        //check for empty box error statement output if it is full
            if(taken[canvasNum-1] === false){

        //clears the errorOut id. Errors only display til the next turn is taken
                errorOut.style.visibility = 'hidden';
				errorOne.style.visibility = 'hidden';

            //draws x and stores info in an array for the place to be taken
                if(turn % 2 !=0){
                    ctx.beginPath();
                    ctx.moveTo(10,10);
                    ctx.lineTo(110,110);
                    ctx.moveTo(110,10);
                    ctx.lineTo(10,110);
                    ctx.strokeStyle = 'maroon';
                    ctx.lineWidth=10;
                    ctx.stroke();
                    ctx.closePath();
                    xo[canvasNum - 1] = 'X';
                }
            //draws and o and stores info in an array for the place to be taken
                else{
                    ctx.beginPath();
                    ctx.arc(60, 60, 50, 0, 2 * Math.PI);
                    ctx.strokeStyle = "pink";
                    ctx.lineWidth=10;
                    ctx.stroke();
                    ctx.closePath();
                    xo[canvasNum - 1] = 'O';    
                }
            //adds to the turn counter
                turn++;
            //when the space is taken the corelating spot in the array if now marked true
                taken[canvasNum-1] = true;

            //outputs next player's turn if there is a remainder the number is odd and is X
                if(turn % 2 !=0){
                    titleOut.innerHTML = "<span style='color:maroon; text-shadow: 1px 1px 1px #000,-1px -1px 1px #000,-1px 1px 1px #000,1px -1px 1px #000;'>" + player1 + "'s Turn!</span>";
                    titleOne.innerHTML = "<span style='color:maroon; text-shadow: 1px 1px 1px #000,-1px -1px 1px #000,-1px 1px 1px #000,1px -1px 1px #000;'>" + player1 + "'s Turn!</span>"; 
                }
                else{
                    titleOut.innerHTML = "<span style='color:pink; text-shadow: 1px 1px 1px #000,-1px -1px 1px #000,-1px 1px 1px #000,1px -1px 1px #000;'>" + player2 + "'s Turn!</span>";
                    titleOne.innerHTML = "<span style='color:pink; text-shadow: 1px 1px 1px #000,-1px -1px 1px #000,-1px 1px 1px #000,1px -1px 1px #000;'>" + player2 + "'s Turn!</span>";
                }

            /*end game logic and output winner to title id it checks the xo array to see if the spots taken match up with the winner array preset winning positions. since canvas boxes are set
            to 1-9 and the array is 0-8 I subtract one from the canvas number to double check the array. realized after I made it that I could have just used 1-9 in the array. and added one to the check variable's
            starting interger. The second set of if else is logic to see who one and displays the proper player name at the end of game*/
				for(var check=0; check < winner.length; check++) {
					if((xo[winner[check][0]] === xo[canvasNum-1]) && (xo[winner[check][1]] === xo[canvasNum-1]) && (xo[winner[check][2]] === xo[canvasNum-1])) {
                        if(xo[canvasNum-1] === 'X'){

                            titleOut.innerHTML = "<span style='color:#bfff00; text-shadow: 1px 1px 1px #000,-1px -1px 1px #000,-1px 1px 1px #000,1px -1px 1px #000;'> " + player1 + " won!</span>";
                            titleOne.innerHTML = "<span style='color:#bfff00; text-shadow: 1px 1px 1px #000,-1px -1px 1px #000,-1px 1px 1px #000,1px -1px 1px #000;'> " + player1 + " won!</span>";
							errorOut.style.visibility = 'visible';
							errorOne.style.visibility = 'visible';
							errorOut.innerHTML="<span style='color:#bfff00;font-size:1em;text-shadow: 1px 1px 1px #000,-1px -1px 1px #000,-1px 1px 1px #000,1px -1px 1px #000;'>Click 'NEW GAME' to start over!!</span>";
							errorOne.innerHTML="<span style='color:#bfff00;font-size:.5em;text-shadow: 1px 1px 1px #000,-1px -1px 1px #000,-1px 1px 1px #000,1px -1px 1px #000;'>Click 'NEW GAME' to start over!!</span>";
                            gameOver = true;
                        }else{
                            titleOut.innerHTML = "<span style='color:#bfff00; text-shadow: 1px 1px 1px #000,-1px -1px 1px #000,-1px 1px 1px #000,1px -1px 1px #000;'> " + player2 + " won!</span>";
                            titleOne.innerHTML = "<span style='color:#bfff00; text-shadow: 1px 1px 1px #000,-1px -1px 1px #000,-1px 1px 1px #000,1px -1px 1px #000;'> " + player2 + " won!</span>";
							errorOut.style.visibility = 'visible';
							errorOne.style.visibility = 'visible';
							errorOut.innerHTML="<span style='color:#bfff00;font-size:1em;text-shadow: 1px 1px 1px #000,-1px -1px 1px #000,-1px 1px 1px #000,1px -1px 1px #000;'>Click 'NEW GAME' to start over!!</span>";
							errorOne.innerHTML="<span style='color:#bfff00;font-size:.5em;text-shadow: 1px 1px 1px #000,-1px -1px 1px #000,-1px 1px 1px #000,1px -1px 1px #000;'>Click 'NEW GAME' to start over!!</span>";
							gameOver = true;
                        }
					}
                }
            //game is a draw logic output #DRAW to title id
                if(turn > 9 && gameOver != true){
                    titleOut.innerHTML = "<span style='color:#bfff00; text-shadow: 1px 1px 1px #000,-1px -1px 1px #000,-1px 1px 1px #000,1px -1px 1px #000;'>#DRAW!";
                    titleOne.innerHTML = "<span style='color:#bfff00; text-shadow: 1px 1px 1px #000,-1px -1px 1px #000,-1px 1px 1px #000,1px -1px 1px #000;'>#DRAW!";
					errorOut.style.visibility = 'visible';
					errorOne.style.visibility = 'visible';
					errorOut.innerHTML="<span style='color:#bfff00;font-size:1em;text-shadow: 1px 1px 1px #000,-1px -1px 1px #000,-1px 1px 1px #000,1px -1px 1px #000;'>Click 'NEW GAME' to start over!!</span>";
					errorOne.innerHTML="<span style='color:#bfff00;font-size:.5em;text-shadow: 1px 1px 1px #000,-1px -1px 1px #000,-1px 1px 1px #000,1px -1px 1px #000;'>Click 'NEW GAME' to start over!!</span>";
                    gameOver = true;
                }
            }
           
        //outputs that the box is taken and makes the result element visible again
            else{
                errorOut.style.visibility = 'visible';
				errorOne.style.visibility = 'visible';
                errorOut.innerHTML="<span style='color:#bfff00;font-size:1em;text-shadow: 1px 1px 1px #000,-1px -1px 1px #000,-1px 1px 1px #000,1px -1px 1px #000;'>That box has a mark in it!!! Try another box!</span>";
                errorOne.innerHTML="<span style='color:#bfff00;font-size:.5em;;text-shadow: 1px 1px 1px #000,-1px -1px 1px #000,-1px 1px 1px #000,1px -1px 1px #000;'>That box has a mark in it!!! Try another box!</span>";
            }
        }
    //keeps players from trying to keep playing after someone wins. outputs to result id when box is clicked after game ends.
        else{
            errorOut.style.visibility = 'visible';
			errorOne.style.visibility = 'visible';
            errorOut.innerHTML="<span style='color:#bfff00;font-size:1em;text-shadow: 1px 1px 1px #000,-1px -1px 1px #000,-1px 1px 1px #000,1px -1px 1px #000;'>Click 'NEW GAME' to start over!! The last game is done!</span>";
            errorOne.innerHTML="<span style='color:#bfff00;font-size:.5em;text-shadow: 1px 1px 1px #000,-1px -1px 1px #000,-1px 1px 1px #000,1px -1px 1px #000;'>Click 'NEW GAME' to start over!! The last game is done!</span>";
        }
    }
}
//this function loads with the window.  Gets players names and sends to main game function.
//this function pulls names and replaces null values with X and O
window.onload = function(player1 = '', player2 = ''){
    //get names from submit button
    nameButton = document.getElementById("submit");
    //on click names are pulled and the random player picked goes first. If no names are there it will assign names player 1 and player 2
    nameButton.addEventListener("click", function (){
        player1 = document.getElementById("p1").value;
        player2 = document.getElementById("p2").value;
        if(player1==='' && player2===''){
            player1 = 'Player 1';
            player2 = 'Player 2';
        }else if(player1===''){
            player1='Player 1';
        }else if(player2===''){
                player2 = 'Player 2';
            }
        //random number generated and use remainder method to see if it is odd or even.  Odd player 1 goes first Even player 2.
        var x = Math.floor((Math.random() * 10) + 1);
        if(x % 2 != 1){
            [player1,player2] = [player2,player1];
        }//output to tell who goes first{
        document.getElementById("title").innerHTML = "<span style='color:maroon; text-shadow: 1px 1px 1px #000,-1px -1px 1px #000,-1px 1px 1px #000,1px -1px 1px #000;'>" + player1 + " is up first!</span>";
        document.getElementById("title1").innerHTML = "<span style='color:maroon; text-shadow: 1px 1px 1px #000,-1px -1px 1px #000,-1px 1px 1px #000,1px -1px 1px #000;'>" + player1 + " is up first!</span>";
        document.getElementById("result").style.visibility = 'hidden';
		document.getElementById("result1").style.visibility = 'hidden';		
        ticTac(player1,player2)
        nameButton.style.visibility = 'hidden';
        })
   
}
