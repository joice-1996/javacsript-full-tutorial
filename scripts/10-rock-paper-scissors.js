     // let score = JSON.parse(localStorage.getItem('score')) ;//if we remove item from local storage and then try to get it will return null or error
        //to avoid these we can use condition operator by checking the value is null then reset or other way is using logical OR operator(||)
        let score = JSON.parse(localStorage.getItem('score')) || {
            wins:0,
            losses:0,
            ties:0
        };//if there is no item in local storage then initialize score with 0 wins,0 losses,0 ties

        /*if(!score){
            score = {
                wins:0,
                losses:0,
                ties:0
            };
        }*/


        updateScoreElement();
        
        console.log(JSON.parse(localStorage.getItem('score')));//to get item from local storage
        function playGame(playerMove){
            const computerMove = pickComputerMove();

            let result = '';
            if(playerMove === 'scissors'){
                if(computerMove === 'scissors'){
                result = 'Tie'; 
                }else if(computerMove === 'rock'){
                    result = 'You Lose';
                }else if(computerMove === 'paper'){
                    result = 'You Win';
                }
            }else if(playerMove === 'rock'){
                if(computerMove === 'rock'){
                   result = 'Tie'; 
                }else if(computerMove === 'paper'){
                    result = 'You Lose';
                }else if(computerMove === 'scissors'){
                    result = 'You Win';
                }
            }else if(playerMove === 'paper'){
                if(computerMove === 'paper'){
                    result = 'Tie'; 
                }else if(computerMove === 'scissors'){
                    result = 'You Lose';
                }else if(computerMove === 'rock'){
                    result = 'You Win';
                }
            }

            if (result === 'You Win') {
                score.wins +=1;
            }else if (result === 'You Lose'){
                score.losses +=1;
            }else if (result === 'Tie'){
                score.ties +=1;
            }

            localStorage.setItem('score',JSON.stringify(score));//to store item in local storage first convert object to string using JSON.stringify()

            document.querySelector('.js-result')
                .innerHTML = result;
            // document.querySelector('.js-moves')
            //     .innerHTML = `You  ${playerMove} - ${computerMove} Computer`;
            document.querySelector('.js-moves').innerHTML
            =`You
            <img src="images/${playerMove}-emoji.png" alt="" class="move-icon">
            <img src="images/${computerMove}-emoji.png" alt="" class="move-icon">
            Computer`
            updateScoreElement();
            

            // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
            // Wins: ${score.wins}, Losses : ${score.losses}, Ties : ${score.ties}`);


        }

        function updateScoreElement(){
            document.querySelector('.js-score')
                .innerHTML = `Wins: ${score.wins}, Losses : ${score.losses}, Ties : ${score.ties}`;
        }

        function pickComputerMove(){
            const randomNumber = Math.random();
            let computerMove = ''; 

            if(randomNumber >= 0 && randomNumber < 1/3){
                computerMove = 'rock';
            }else if(randomNumber >= 1/3 && randomNumber < 2/3){
                computerMove = 'paper';
            }else if( randomNumber >= 2/3 && randomNumber < 1){
                computerMove = 'scissors';
            }else{
                console.log('Error');
            }
            return computerMove;
        }