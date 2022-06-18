class Quiz {
    constructor(){}
  
/*    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }*/
  
    async start(){
      if(gameState === 0){
        question = new Question()
        question.display();
      }
    }
  
    play(){
      question.hide();
      background("Yellow");
      fill(0);
      textSize(30);
      text("Daisy makes toy cars.She wants to make 1.500 toy cars. Daisy makes 18 cars in a day. She has already made 4492 cars. How many days will it take for her to complete 1,500 cars? (just type the number of days)",340, 50);
      text("56",320, 65);
      Contestant.getPlayerInfo();
      if(answer === 56){
        debugger;
        var display_Answers = 230;
        fill("Blue");
        textSize(20);
        text("You are correct! Keep it up!",130,230);
        sapling = createSprite(750,350,400,20);
        sapling.addImage(saplingImg);
        sapling.scale = 0.05;
      }
    else{
        var display_Answers = 230;
        fill("Blue");
        textSize(20);
        text("Oh no you lost. Come om you can do it!",130,230);
        brokentree = createSprite(50,200,400,20);
        brokentree.addImage(brokentree_Img);
        brokentree.scale = 0.05;
    }

        
      }
    }

  