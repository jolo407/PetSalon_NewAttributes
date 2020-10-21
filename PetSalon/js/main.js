var salon={
    name:"The Fashion Pet",
    address:{
        street:"Ave University",
        number:"2569"
    },
    hours:{
        open:"8:00 a.m.",
        close:"8:00 p.m."
    },
    pets:[
    {
        name:"Scooby",
        age: "50",
        gender:"Male",
        type:"Dog",
        breed:"Dane",
        service:"Full Service",
        ownersName:"Shaggy",
        contactPhone:"555-555-5555"
    },
    {
        name:"Scrappy",
        age: "40",
        gender:"Male",
        type:"Dog",
        breed:"Dane",
        service:"Nails Cuty",
        ownersName:"Shaggy",
        contactPhone:"555-555-5555"
    },
    {
        name:"Tweety",
        age: "60",
        gender:"Male",
        type:"Bird",
        breed:"Mixed",
        service:"Full Service",
        ownersName:"Silvester",
        contactPhone:"910-543-9888"
    },
    
]
}

//document.write("Pets registered: " + salon.pets.length + "<br>" + "<br>");
//document.write("Pet names: " + "<br>" + "1." + salon.pets[0].name + "<br>","2." + salon.pets[1].name + "<br>","3." + salon.pets[2].name + "<br>","4.");




//display information on the footer

text=`
${salon.name}, ${salon.address.street} ${salon.address.number} <br>
It is open from ${salon.hours.open} to ${salon.hours.close}
`;

document.getElementById(`footer-info`).innerHTML=text;

constructor 
class Pet{
    constructor(name,age,gender,type,breed,service,price,ownersName,contactPhone){
        this.appointment=appointment;
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.type=type;
        this.breed=breed;
        this.service=service;
        this.price=price;
        this.payment=paymentMethod;
        this.ownersName=ownersName;
        this.contactPhone=contactPhone;
}
}

var scooby=new Pet("Scooby",50,"Male","Dog","Dane","Full Service",19.99,"Shaggy","555-555-555")
var champ=new Pet("Champ","1","Male","Dog","Pit","Nails",10.5,"Joel","897-898-0765");
var tweety=new Pet("Tweety",2,"Female","Bird","Canarian","Full Service",19.99,"Silvester","555-555-555")



salon.pets.push(scooby);
salon.pets.push(champ);
salon.pets.push(tweety);

const txtAppointment=document.getElementById('appointment');
const txtName=document.getElementById('petName');
const txtAge=document.getElementById('petAge');
const txtGender=document.getElementById('petGender');
const txtType=document.getElementById('petType');
const txtBreed=document.getElementById('petBreed');
const txtService=document.getElementById('service');
const txtPrice=document.getElementById(`servicePrice`)
const txtPayment=document.getElementById('paymentMethod');
const txtOwner=document.getElementById('petownersName');
const txtPhone=document.getElementById('petcontactPhone');


function register(){
    var thePet = new Pet(txtAppointment.value,txtName.value,txtAge.value,txtGender.value,txtType.value,txtBreed.balue,txtService.value,txtPayment.value,txtPrice.value,txtOwner.value,txtPhone.value);
   salon.pets.push(thePet);
   console.log(thePet);
   display();
   clear();
   registeredPets();
   profitCalculation();
}

function clear(){
    txtAppointment.value="";
    txtName.value="";
    txtAge.value="";
    txtGender.value="";
    txtType.value="";
    txtBreed.value="";
    txtService.value="";
    txtPrice.value="";
    txtPayment.value="",
    txtOwner.value="";
    txtPhone.value="";
}


function registeredPets(){
    document.getElementById('registeredPets').innerHTML=`Number of pets: ${salon.pets.length}`;
}
registeredPets();

function profitCalculation(){
    var total=0;
    for(var i=0;i<salon.pets.length;i++){
        total=total + salon.pets[i].price;
    }
    
    document.getElementById('profits').innerHTML=`Profits: $ ${total}`;
}

profitCalculation();