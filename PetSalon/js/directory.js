

function display(){
    // create the vars
    var pets=salon.pets;
    const petSection=document.getElementById("pets");
    var text="";
    var dogIcon=`<i class="fas fa-dog"></i>`;
    var catIcon=`<i class="fas fa-cat"></i>`;
    var birdIcon=`<i class="fas fa-crow"></i>`;

    
    //travel the salon.pets array

    for(var i=0;i<pets.length;i++){
        
        //display the icon of the type of pet
        //hit=if

        if(pets[i].type==="Dog"){
            icon=dogIcon;
        }else if(pets[i].type==="Cat"){
            icon=catIcon;
        }else if(pets[i].type==="Bird"){
            icon=birdIcon;
        }else{
            icon=`<i class="fas fa-question-circle"></i>`;
        }

        if(pets[i]==="Dog"){
            icon=dogIcon;
        }
        //create the HTML text

        text+=`
        <div class="pet">
            ${icon}
            <h2> Appointment: ${pets[i].appointment}</h2>
            <p> Name: ${pets[i].name}</p>
            <p> Age: ${pets[i].age} </p>
            <p> Genger: ${pets[i].gender} </p>
            <p> Type: ${pets[i].type} </p>
            <p> Breed: ${pets[i].breed} </p>
            <p> Service: ${pets[i].service} </p>
            <p> Price: ${pets[i].price}</p>
            <p> Payment: ${pets[i].paymentMethod}</p>
            <p> ownerName: ${pets[i].ownersName} </p>
            <p> contactPhone: ${pets[i].contactPhone} </p>
            </div>
        `;
    }
    petSection.innerHTML+=text;
 //display the HTML text into the DJM
}

        
//use the display function 

display();

// Extra HW
