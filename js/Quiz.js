class Quiz {
  constructor(){
    this.title1 = createElement('h1')
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    var displayPosition = 260;


    

    
    if(gameState === 1){
      //write code to change the background color here
      background("yellow");

      //write code to show a heading for showing the result of Quiz
      this.title1.html("Result of Quiz");
      this.title1.position(350, 0);

      fill("blue");
      textSize(20);
      text("*NOTE : Contestants who have answered correctly are highlighted in green color!",130,230)
      Contestant.getPlayerInfo();


      

     
    }

   
      for(var plr in allContestants){
        
        var correctAns = "2";
        if(correctAns === allContestants[plr].answer)
        fill("Green");
        else
        fill("red");
        text(allContestants[plr].name+": "+allContestants[plr].answer,130,displayPosition);
        displayPosition += 30;

      }

    }
    

  }


      

      

      

    
      

    
    

    //write code to highlight contest who answered correctly
    /*for(var plr in allContestants){
      var correctAns = "2";
      if(correctAns === allContestants[plr].answer)
      fill("Green");
      else
      fill("red");
    }
    /*for(var plr in allContestants){
      var correctAns = "2";
      if(correctAns === allContestants[plr].answer)
      fill("Green");
      else
      fill("red");

    }*/
  

    
       
     
    
    
    


    //write condition to check if contestantInfor is not undefined

    

    







    




    
     


    
    
     
    
  


