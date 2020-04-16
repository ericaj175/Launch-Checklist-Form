
 
 
window.addEventListener("load", function(event) {
    let form = document.querySelector("form");

    let faultyItemsDiv = document.getElementById("faultyItemsDiv");
    faultyItemsDiv.style.display = "none"   
     
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let pilotNameInput = document.querySelector("input[name=pilotName]")
        let copilotNameInput = document.querySelector("input[name=copilotName]")
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]")
        let cargoMassInput = document.querySelector("input[name=cargoMass]")

        if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
            alert("all fields are required");
        }

        if (isNaN(Number(fuelLevelInput.value)) || isNaN(Number(cargoMassInput.value))){
         alert("must enter number")}
        


    if(fuelLevelInput.value > 10000){
      faultyItemsDiv.style.display = "none"

      let launchStatus = document.getElementById("launchStatus")
        launchStatus.style.color = "green"
         launchStatus.innerHTML = "Shuttle is ready for Launch"
         
    
         let fuelStatus = document.getElementById("fuelStatus") 
         fuelStatus.innerHTML = "Fuel level high enough for launch"
    }
    else {
          faultyItemsDiv.style.display = ""
          launchStatus.style.color = "red"
           launchStatus.innerHTML = "Shuttle is not ready for Launch"
           fuelStatus.innerHTML = "Fuel level is to low for launch"
           
    }
    if(cargoMassInput.value < 10000){
      faultyItemsDiv.style.display = "none"
      
    
    let cargoStatus = document.getElementId("cargoStatus")
      cargoStatus.style.color = green
      
      launchStatus.innerHTML = "Shuttle ready to Launch"
   }
   else{
     
       faultyItemsDiv.style.display = ""
        cargoStatus.innerHTML = "there is too much mass for the shuttle to take off"
        launchStatus.style.color = "#ff0000"
         launchStatus.innerHTML = "Shuttle not ready to Launch"
      
   

   }
  
 
     
    })
    })
;