function sandwichMaker (myBread, myCheese, myProtein, myDressing, myVeg, myFate, myAdj, myDistance) {
    
  this.myBread = breads[Math.round(Math.random()*(breads.length-1))];
  this.myCheese = cheeses[Math.round(Math.random()*(cheeses.length-1))];
  this.myProtein = proteins[Math.round(Math.random()*(proteins.length-1))];
  this.myDressing = dressings[Math.round(Math.random()*(dressings.length-1))];
  this.myVeg = veggies[Math.round(Math.random()*(veggies.length-1))];
  this.myFate = fates[Math.round(Math.random()*(fates.length-1))];
  
  var myScore = (this.myBread.score + this.myCheese.score + this.myDressing.score + this.myProtein.score + this.myVeg.score) - (this.myBread.soggy + this.myCheese.soggy + this.myDressing.soggy + this.myProtein.soggy + this.myVeg.soggy);
  
  this.myScore = myScore;
  
  this.myDistance = distances[Math.round(Math.random()*(distances.length-1))] + this.myScore;

  this.myAdj = myAdj;

  if (this.myScore >=1 && this.myScore <=10) {
    this.myAdj = "inoffensive";
  }
  else if (this.myScore >10 && this.myScore <=15) {
    this.myAdj = "tasty";
  }
  else if (this.myScore >15 && this.myScore <= 20) {
    this.myAdj = "yummy";
  }
  else if (this.myScore >20 && this.myScore <=30) {
    this.myAdj = "scrumptious";
  }
  else if (this.myScore > 30) {
    this.myAdj = "heavenly";
  }
  else if (this.myScore <= -1 && this.myScore >= -5) {
    this.myAdj = "rank";
  }
  else if (this.myScore < -5 && this.myScore >= -10) {
    this.myAdj = "nasty";
  }
  else if (this.myScore < -10 && this.myScore >= -15) {
    this.myAdj = "disgusting";
  }
  else if (this.myScore < -15) {
    this.myAdj = "foul";
  }
  else if(this.myScore==0) {
    this.myAdj = "bland";
  }
  
  // console.log(this.myBread.name, this.myCheese.name, this.myDressing.name, this.myProtein.name, this.myVeg.name, this.myFate, this.myScore, this.myAdj, this.myDistance);
}