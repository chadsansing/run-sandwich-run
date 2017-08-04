var myAdj;

this.myAdj = myAdj;

if (this.myScore >=1 && this.myScore <=5) {
  this.myAdj = "inoffensive";
}
else if (this.myScore >5 && this.myScore <=10) {
  this.myAdj = "tasty";
}
else if (this.myScore >10 && this.myScore <= 15) {
  this.myAdj = "yummy";
}
else if (this.myScore >15 && this.myScore <=20) {
  this.myAdj = "scrumptious";
}
else if (this.myScore > 20) {
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
