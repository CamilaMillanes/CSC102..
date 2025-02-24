function validateStrings(){
    let firstNameElement = document.getElementById("firstName");
    let lastNameElement = document.getElementById("lastName");
    let zipcodeElement = document.getElementById("zipcode");

    console.log(firstNameElement.value);
    console.log(lastNameElement.value);
    console.log(zipcodeElement.value);

    let firstNameString = firstNameElement.value;
    let lastNameString = lastNameElement.value;
    let zipcodeString = zipcodeElement.value;

    let nameCombo = firstNameString + " " + lastNameString;

    console.log(nameCombo);
   console.log( nameCombo.length > 20)

    if (nameCombo.length > 20) {
        alert("Your name is greater than 20 letters");
        return;
    }

    console.log("Input validated");

    // If the zipcode is less than 5 then its incorrect
    if (zipcodeString.length == 5){
        alert("Your zipcode is too short. Please add more numbers.");
        return;
    }
}