$(document).ready(function() {
  // popUp();
  $("#order-button").on("click", function() {
    makeSandwiches();
  });
  $("#race-button").on("click", function() {
    raceSandwiches();
  });
});

function makeSandwiches() {
  sandwichOne.start();
  sandwichTwo.start();
  sandwichThree.start();
}

function raceSandwiches() {
  sandwichOne.race();
  sandwichTwo.race();
  sandwichThree.race();
}

// function popUp() {
//   sandwichOne.popUp();
// }

// function sandwichRace() {
//
// }

var sandwichOne = {
  
  bread: 0,
  cheese: 0,
  dressing: 0,
  protein: 0,
  veg: 0,
  xPos: 0,
  yPos: 0,
  height: 10,
  width: 100,
  xVel: 0, 
  score: 0,
  adj: 0,
  distance: 0,
  fate: 0, 
  finishLine: 0,
  
  start: function() {
    
    sandwichMaker(),
  
    this.bread = myBread,
    this.cheese = myCheese,
    this.dressing = myDressing,
    this.protein = myProtein,
    this.veg = myVeg,
    this.score = myScore,
    this.adj = myAdj,
    this.distance = myDistance,
    this.fate = myFate, 
    
    //console.log(this.protein.color),
    
    this.yPos = 100,
    this.xPos = 25,
    // this.finishLine = this.xPos + this.distance;
//     if (this.finishLine*10 <= 25) {
//       this.finishLine = 25;
//     }
//     console.log(this.xPos);
  
    $("#item-one-bread-one").css("background-color", this.bread.color),
    $("#item-one-bread-one").css("position", "absolute"),
    $("#item-one-bread-one").css("left", this.xPos),       
    $("#item-one-bread-one").css("top", this.yPos),
    $("#item-one-bread-one").css("height", this.height),
    $("#item-one-bread-one").css("width", this.width),
  
    $("#item-one-dressing").css("background-color", this.dressing.color),
    $("#item-one-dressing").css("position", "absolute"),
    $("#item-one-dressing").css("left", this.xPos),       
    $("#item-one-dressing").css("top", this.yPos+10),
    $("#item-one-dressing").css("height", this.height),
    $("#item-one-dressing").css("width", this.width),
  
    $("#item-one-veg").css("background-color", this.veg.color),
    $("#item-one-veg").css("position", "absolute"),
    $("#item-one-veg").css("left", this.xPos),       
    $("#item-one-veg").css("top", this.yPos+20),
    $("#item-one-veg").css("height", this.height),
    $("#item-one-veg").css("width", this.width),

    $("#item-one-cheese").css("background-color", this.cheese.color),
    $("#item-one-cheese").css("position", "absolute"),
    $("#item-one-cheese").css("left", this.xPos),       
    $("#item-one-cheese").css("top", this.yPos+30),
    $("#item-one-cheese").css("height", this.height),
    $("#item-one-cheese").css("width", this.width),

    $("#item-one-protein").css("background-color", this.protein.color),
    $("#item-one-protein").css("position", "absolute"),
    $("#item-one-protein").css("left", this.xPos),       
    $("#item-one-protein").css("top", this.yPos+40),
    $("#item-one-protein").css("height", this.height),
    $("#item-one-protein").css("width", this.width),

    $("#item-one-bread-two").css("background-color", this.bread.color),
    $("#item-one-bread-two").css("position", "absolute"),
    $("#item-one-bread-two").css("left", this.xPos),       
    $("#item-one-bread-two").css("top", this.yPos+50),
    $("#item-one-bread-two").css("height", this.height),
    $("#item-one-bread-two").css("width", this.width),

    $("#description-one").css("display", "none")
  },
  
  race: function() {
    
    this.finishLine = this.xPos + this.distance;
    if (this.finishLine*10 <= 25) {
      this.finishLine = 25;
    }
    
    $("#item-one-bread-one").css("left", this.finishLine*10),
    $("#item-one-dressing").css("left", this.finishLine*10),
    $("#item-one-veg").css("left", this.finishLine*10),
    $("#item-one-cheese").css("left", this.finishLine*10),
    $("#item-one-protein").css("left", this.finishLine*10),
    $("#item-one-bread-two").css("left", this.finishLine*10),
    
    $("#description-one").css("display", "inline-block"),
    $("#description-one").css("left", 25),

    document.getElementById("description-one").innerHTML = "<div>You are a "  + this.adj + " " + this.protein.name + " and " + this.cheese.name +" sandwich on " + this.bread.name + " with " + this.veg.name + " and " + this.dressing.name + ". " + this.fate + " You make it " + this.finishLine + " feet.</div>"
    
    console.log("You are a " + this.adj + " " + this.protein.name + " and " + this.cheese.name +" sandwich on " + this.bread.name + " with " + this.veg.name + " and " + this.dressing.name + ". " + this.fate + " You make it " + this.finishLine + " feet.")
  }
  
  // popUp: function() {
  //   $("#sandwich-one").hover(function(){
  //       $("#sandwich-one-description").css("display", "block");
  //       }, function(){
  //       $("#sandwich-one-description").css("display", "none");
  //   })
  // }
}

var sandwichTwo = {

  bread: 0,
  cheese: 0,
  dressing: 0,
  protein: 0,
  veg: 0,
  xPos: 0,
  yPos: 0,
  height: 10,
  width: 100,
  xVel: 0, 
  score: 0,
  adj: 0,
  distance: 0,
  fate: 0, 

  start: function() {
  
    sandwichMaker(),

    this.bread = myBread,
    this.cheese = myCheese,
    this.dressing = myDressing,
    this.protein = myProtein,
    this.veg = myVeg,
    this.score = myScore,
    this.adj = myAdj,
    this.distance = myDistance,
    this.fate = myFate, 
  
    //console.log(this.protein.color),
  
    this.yPos = 200,
    this.xPos = 25,
    this.finishLine = this.xPos + this.distance;
    if (this.xPos <= 25) {
      this.finishLine = 25;
    }
    // console.log(this.xPos);

    $("#item-two-bread-one").css("background-color", this.bread.color),
    $("#item-two-bread-one").css("position", "absolute"),
    $("#item-two-bread-one").css("left", this.xPos),       
    $("#item-two-bread-one").css("top", this.yPos),
    $("#item-two-bread-one").css("height", this.height),
    $("#item-two-bread-one").css("width", this.width),

    $("#item-two-dressing").css("background-color", this.dressing.color),
    $("#item-two-dressing").css("position", "absolute"),
    $("#item-two-dressing").css("left", this.xPos),       
    $("#item-two-dressing").css("top", this.yPos+10),
    $("#item-two-dressing").css("height", this.height),
    $("#item-two-dressing").css("width", this.width),

    $("#item-two-veg").css("background-color", this.veg.color),
    $("#item-two-veg").css("position", "absolute"),
    $("#item-two-veg").css("left", this.xPos),       
    $("#item-two-veg").css("top", this.yPos+20),
    $("#item-two-veg").css("height", this.height),
    $("#item-two-veg").css("width", this.width),

    $("#item-two-cheese").css("background-color", this.cheese.color),
    $("#item-two-cheese").css("position", "absolute"),
    $("#item-two-cheese").css("left", this.xPos),       
    $("#item-two-cheese").css("top", this.yPos+30),
    $("#item-two-cheese").css("height", this.height),
    $("#item-two-cheese").css("width", this.width),

    $("#item-two-protein").css("background-color", this.protein.color),
    $("#item-two-protein").css("position", "absolute"),
    $("#item-two-protein").css("left", this.xPos),       
    $("#item-two-protein").css("top", this.yPos+40),
    $("#item-two-protein").css("height", this.height),
    $("#item-two-protein").css("width", this.width),

    $("#item-two-bread-two").css("background-color", this.bread.color),
    $("#item-two-bread-two").css("position", "absolute"),
    $("#item-two-bread-two").css("left", this.xPos),       
    $("#item-two-bread-two").css("top", this.yPos+50),
    $("#item-two-bread-two").css("height", this.height),
    $("#item-two-bread-two").css("width", this.width),
    
    $("#description-two").css("display", "none")
  },
  
  race: function() {
    
    this.finishLine = this.xPos + this.distance;
    if (this.finishLine*10 <= 25) {
      this.finishLine = 25;
    }
    
    $("#item-two-bread-one").css("left", this.finishLine*10),
    $("#item-two-dressing").css("left", this.finishLine*10),
    $("#item-two-veg").css("left", this.finishLine*10),
    $("#item-two-cheese").css("left", this.finishLine*10),
    $("#item-two-protein").css("left", this.finishLine*10),
    $("#item-two-bread-two").css("left", this.finishLine*10),
    
    $("#description-two").css("display", "inline-block"),
    $("#description-two").css("left", 280),

    document.getElementById("description-two").innerHTML = "<div>You are a "  + this.adj + " " + this.protein.name + " and " + this.cheese.name +" sandwich on " + this.bread.name + " with " + this.veg.name + " and " + this.dressing.name + ". " + this.fate + " You make it " + this.finishLine + " feet.</div>"
    
        console.log("You are a "  + this.adj + " " + this.protein.name + " and " + this.cheese.name +" sandwich on " + this.bread.name + " with " + this.veg.name + " and " + this.dressing.name + ". " + this.fate + " You make it " + this.finishLine + " feet.")
    
  }
}

var sandwichThree = {


  bread: 0,
  cheese: 0,
  dressing: 0,
  protein: 0,
  veg: 0,
  xPos: 0,
  yPos: 0,
  height: 10,
  width: 100,
  xVel: 0, 
  score: 0,
  adj: 0,
  distance: 0,
  fate: 0, 

  start: function() {
  
    sandwichMaker(),

    this.bread = myBread,
    this.cheese = myCheese,
    this.dressing = myDressing,
    this.protein = myProtein,
    this.veg = myVeg,
    this.score = myScore,
    this.adj = myAdj,
    this.distance = myDistance,
    this.fate = myFate, 
  
    //console.log(this.protein.color),
  
    this.yPos = 300,
    this.xPos = 25,
    this.finishLine = this.xPos + this.distance;
    if (this.xPos <= 25) {
      this.finishLine = 25;
    }
    // console.log(this.xPos);

    $("#item-three-bread-one").css("background-color", this.bread.color),
    $("#item-three-bread-one").css("position", "absolute"),
    $("#item-three-bread-one").css("left", this.xPos),       
    $("#item-three-bread-one").css("top", this.yPos),
    $("#item-three-bread-one").css("height", this.height),
    $("#item-three-bread-one").css("width", this.width),

    $("#item-three-dressing").css("background-color", this.dressing.color),
    $("#item-three-dressing").css("position", "absolute"),
    $("#item-three-dressing").css("left", this.xPos),       
    $("#item-three-dressing").css("top", this.yPos+10),
    $("#item-three-dressing").css("height", this.height),
    $("#item-three-dressing").css("width", this.width),

    $("#item-three-veg").css("background-color", this.veg.color),
    $("#item-three-veg").css("position", "absolute"),
    $("#item-three-veg").css("left", this.xPos),       
    $("#item-three-veg").css("top", this.yPos+20),
    $("#item-three-veg").css("height", this.height),
    $("#item-three-veg").css("width", this.width),

    $("#item-three-cheese").css("background-color", this.cheese.color),
    $("#item-three-cheese").css("position", "absolute"),
    $("#item-three-cheese").css("left", this.xPos),       
    $("#item-three-cheese").css("top", this.yPos+30),
    $("#item-three-cheese").css("height", this.height),
    $("#item-three-cheese").css("width", this.width),

    $("#item-three-protein").css("background-color", this.protein.color),
    $("#item-three-protein").css("position", "absolute"),
    $("#item-three-protein").css("left", this.xPos),       
    $("#item-three-protein").css("top", this.yPos+40),
    $("#item-three-protein").css("height", this.height),
    $("#item-three-protein").css("width", this.width),

    $("#item-three-bread-two").css("background-color", this.bread.color),
    $("#item-three-bread-two").css("position", "absolute"),
    $("#item-three-bread-two").css("left", this.xPos),       
    $("#item-three-bread-two").css("top", this.yPos+50),
    $("#item-three-bread-two").css("height", this.height),
    $("#item-three-bread-two").css("width", this.width),
    
    $("#description-three").css("display", "none")
  },
  
  race: function() {
    
    this.finishLine = this.xPos + this.distance;
    if (this.finishLine*10 <= 25) {
      this.finishLine = 25;
    }
    
    $("#item-three-bread-one").css("left", this.finishLine*10),
    $("#item-three-dressing").css("left", this.finishLine*10),
    $("#item-three-veg").css("left", this.finishLine*10),
    $("#item-three-cheese").css("left", this.finishLine*10),
    $("#item-three-protein").css("left", this.finishLine*10),
    $("#item-three-bread-two").css("left", this.finishLine*10),
    
    $("#description-three").css("display", "inline-block"),
    $("#description-three").css("left", 535),

    document.getElementById("description-three").innerHTML = "<div>You are a "  + this.adj + " " + this.protein.name + " and " + this.cheese.name +" sandwich on " + this.bread.name + " with " + this.veg.name + " and " + this.dressing.name + ". " + this.fate + " You make it " + this.finishLine + " feet.</div>"
    
        console.log("You are a "  + this.adj + " " + this.protein.name + " and " + this.cheese.name +" sandwich on " + this.bread.name + " with " + this.veg.name + " and " + this.dressing.name + ". " + this.fate + " You make it " + this.finishLine + " feet.")
  }
}

