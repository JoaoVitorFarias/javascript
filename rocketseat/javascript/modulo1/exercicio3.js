function temHabilidade (skills){
 var idx = skills.indexOf("Javascript",)
 if (idx >= 0 || idx <= skills.length()){
   return console.log(true);
 }else{
   return console.log(false);
 }
}

var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills);