var john = {
  bill: [124, 48, 268, 180, 42],
  calTip: function(){
    this.tips = [];
    this.finalPaid = [];
    for( var i = 0; i<this.bill.length; i++){
      if (this.bill[i]<50){
        this.tips[i] = this.bill[i] * 0.2;
        this.finalPaid[i] =  this.tips[i] + this.bill[i];
      }else if (this.bill[i]>=50 && this.bill[i]<=200){
        this.tips[i] = this.bill[i] * 0.15;
        this.finalPaid[i] =  this.tips[i] + this.bill[i];
      }else{
        this.tips[i] = this.bill[i] * 0.1;
        this.finalPaid[i] =  this.tips[i] + this.bill[i];
      }
    }
  }
};

var mark = {
  bill: [77,375,110,45],
  calTip: function(){
    this.tips = [];
    this.finalPaid = [];
    for( var i = 0; i<this.bill.length; i++){
      if (this.bill[i]<100){
        this.tips[i] = this.bill[i] * 0.2;
        this.finalPaid[i] =  this.tips[i] + this.bill[i];
      }else if (this.bill[i]>=100 && this.bill[i]<=300){
        this.tips[i] = this.bill[i] * 0.1;
        this.finalPaid[i] =  this.tips[i] + this.bill[i];
      }else{
        this.tips[i] = this.bill[i] * 0.25;
        this.finalPaid[i] =  this.tips[i] + this.bill[i];
      }
    }
  }
};

function averageTip (tip){
  var average = 0;
  for (var i = 0; i < tip.length; i++){
    average += tip[i];
  }
  return (average / tip.length);
}

john.calTip();
var johnTip = averageTip(john.tips);
mark.calTip();
var markTip = averageTip(mark.tips);

if (johnTip > markTip){
  console.log("John's family paid the highest tips, with an average of $" +johnTip);
}else if (johnTip < markTip) {
  console.log("Mark's family paid the highest tips,with an average of $" +markTip);
}else {
  console.log("Both families paid the same tips on average")
} 