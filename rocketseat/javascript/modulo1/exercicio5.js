var usuarios = [
  {
    nome:"Diego",
    habilidades: ["Javascript","ReactJS", "Redux"]
  },
  {
    nome:"Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

var habilidades = [];
for (var hab of usuarios[0].habilidades){
  habilidades.push(hab);
}
console.log ("O "+usuarios[0].nome+" possui as habilidades: "+habilidades.join());

while(habilidades.length){
  habilidades.pop();
}

for (var hab of usuarios[1].habilidades){
  habilidades.push(hab);
}
console.log ("O "+usuarios[1].nome+" possui as habilidades: "+habilidades.join());

