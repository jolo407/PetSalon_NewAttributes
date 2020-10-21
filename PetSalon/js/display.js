//Document Object Model

/*var links=document.getElementsByTagName('a');



for(var i=0;i<links.length;i++){
   links[0].setAttribute('class', 'bordered'); 
   links[i].setAttribute('target','_blank');
} 


const pets=document.getElementById("pets");
var h1=document.createElement("h1");
console.log(h1)
var text=document.createTextNode("Hello world");
console.log(text);
h1.appendChild(text);
console.log(h1);



//display all the name and ages of the registered pets
//hint: for



var ul=document.createElement(`ul`);
for(var i=0;i<salon.pets.length;i++){
    var li=document.createElement(`li`);
    var text2=document.createTextNode(`${salon.pets[i].name} ${salon.pets[i].age}`);
li.appendChild(text2);
ul.appendChild(li);
}
pets.appendChild(ul); */




const petAge = [50,40,60,1,2]

const forLoopMinMax = () => {
  let min = petAge[0], max = petAge[0]

  for (let i = 1; i < petAge.length; i++) {
    let value = petAge[i]
    min = (value < min) ? value : min
    max = (value > max) ? value : max
  }

  return [min, max]
}

const [forLoopMin, forLoopMax] = forLoopMinMax()
console.log(`Minimum: ${forLoopMin}, Maximum: ${forLoopMax}`) 




