
let myPinNumber = 1234;

let validateMyPin = myPinNumber
let validateMyPinTwo = myPinNumber

let openingBalance = 1500.00;

let currentBalance = openingBalance//.toPrecision(6) // this is a cheat as it need to be a decimal rounding not significant figures (.to fixed) works but also converts the number to a string

/* A ".prompt" will only output as a STRING so make sure to only have the user input == NOT === as it 
will compare an interger from myPinNumber variable to the user input from the prompt which is a string. 
A window prompt takes the userinput and if we store this as a variable then we can validate it aginst the stored 
variable of the actual PIN in this case named myPinNumber. */

pinNumberRequiredWindow();

function pinNumberRequiredWindow () {
  let inputFromUser = prompt ("PIN Number Required:", "Please enter pin") 
    if (inputFromUser == myPinNumber) {
      mainMenuWindow ()   // Do not use === as stated earlier. ** Clicking cancel returns a null to the program **.
     
    } else if (inputFromUser == "") {  // MAKE THIS WORK! I can see the console retun null but cant make use of it.
      alert("Please take card. Thanks for using the cashmachine")
      console.log('Have I been used?')
      }
      else if (inputFromUser !== myPinNumber ) {
        alert('Wrong pin.')
        pinNumberRequiredWindow()
        console.log('IS THIS BEING GREEDY?')
      }
        else {
          alert("Please take card. Thanks for using the cashmachine") 
    }
  };
 
function myBalanceWindow() {
      alert(`Your balance is $${currentBalance}.`)
      mainMenuWindow ()
 };


 function endCashMachine () {
    // send PIN and current balance to update "globalDataBase.js"
      alert ("Please remember to take your card. Thanks for using the cashmachine")
      
      console.log("myPinNumber") //checking values of myPinNumber at closing the program to update a possible master database. 
      console.log(myPinNumber)

      console.log("currentBalance") //checking values of currentBalance at closing the program to update a possible master database.
      console.log(currentBalance)
 }

function myWithdrawWindow () {
  let inputFromUser = prompt ("How much would you like to withdraw?", "Please enter amount")
       inputFromUser = parseInt(inputFromUser,10)
      if (inputFromUser > (currentBalance + 0.01)) {
        console.log("Here Three")
        alert ("Sorry insufficient funds available")
        //myWithdrawWindow() **TO Discuss
      } else if (inputFromUser <= 0.99 ) {
        console.log ("Here Too")
        alert ("Sorry please try again incorrect amount entered.")
        //myWithdrawWindow() **TO Discuss
      } else if (inputFromUser == null || undefined) {
        alert("Sorry please try again")
        console.log("Here 4")
        myWithdrawWindow()
      } else if (inputFromUser >= 0.10) {
        currentBalance = currentBalance - parseInt(inputFromUser,10)
        alert (`Your new balance is $${currentBalance}.`)
        console.log ("Here")
      } else { alert ("Back to main menu")
        mainMenuWindow()
    }
  };

  function myDepositWindow () {
    let inputFromUser = prompt ("How much would you like to deposit?", "Please enter amount")
         inputFromUser = parseInt(inputFromUser,10)
        if (inputFromUser >= 1.0) {
          currentBalance = currentBalance + parseInt(inputFromUser,10)
          alert (`Your new balance is $${currentBalance}.`)
          mainMenuWindow () //**TO Discuss
        } else if (inputFromUser <= 0.99 ) {
          alert ("Sorry please try again incorrect amount entered.")
          myDepositWindow()
        } else { alert ("Back to main menu")
          mainMenuWindow() }
    };

function changeMyPinFunction () {       // make sure to include a confirm window which returns boolean for OK / Cancel
  let inputFromUser = prompt ("Please confirm your current 4 digit PIN number.", "")
    inputFromUser = parseInt(inputFromUser,10);
    console.log (inputFromUser)
  if (myPinNumber !== inputFromUser) {
    alert ("Sorry incorrect PIN, please try again.")
    mainMenuWindow();
  } else if (myPinNumber === inputFromUser) {
    validatePinFunction();
  } else { 
  alert ("Back to main menu")
  mainMenuWindow();  
  }
};



function validatePinFunction () {
  let inputFromUser = prompt ("Please confirm your new 4 digit PIN number.", "")   // A new 4 digit number accepted as a string
      validateMyPin = parseInt(inputFromUser,10);                             // The new userInput number is converted to integer and stored in a temporary variable we'll call "validateMyPin"
      console.log (inputFromUser)                                             // inputfromUser is an integer at this point **checked**
      console.log (myPinNumber)                                               // myPinNumber (original variable) is still unaffected at this point
      console.log (validateMyPin)                                             // validateMyPin is now updated to a new one and is and integer at this point

  let inputfromUserTwo = prompt ("Please reconfirm your new 4 digit PIN number.", "")
      validateMyPinTwo = parseInt(inputfromUserTwo,10);                      // The new userInputTwo number is converted to integer and stored in a temporary variable we'll call "validateMyPinTwo"
      console.log (inputfromUserTwo)                                         // inputfromUser is an integer at this point **checked**
      console.log (myPinNumber)                                              // myPinNumber (original variable) is still unaffected at this point
      console.log (validateMyPinTwo)                                         // validateMyPin is now updated to a new one and is and integer at this point
      
  
  if (validateMyPin === validateMyPinTwo) {
      alert ("Your PIN number has now been changed")
    myPinNumber = validateMyPin
    console.log(myPinNumber)
    mainMenuWindow();
    console.log("Do you see this");
    
  } else if (validateMyPin !== validateMyPinTwo)  {
      alert ("Sorry PIN does not match, please try again.")
    validateMyPin = inputFromUser
    mainMenuWindow();

  } else {
     alert ("Invalid back to main menu")
  }
 
};



function mainMenuWindow () {
  let inputFromUser = prompt ("Select your number from the options below:\n\n1. Check Balance \n2. Withdraw\n3. Deposit Amount\n4. Change PIN\n5. Return Card" ,"")
    switch (inputFromUser) {
        case "1":
        myBalanceWindow (); // Alert window displaying current balance.
        break;
        case "2": 
        myWithdrawWindow(); // Prompt window with amount to withdraw (minus to myBalance) change the input to .parseInt so we can add to currentBalance.
        break;
        case "3":
        myDepositWindow();// Prompt window with deposit amount (add from myBalance)
        break;
        case "4":
        changeMyPinFunction();// Prompt window for updating the myPinNumber
        break;
        case "5":
        endCashMachine ();
         //  Close window "Thanks for using the cash machine" Update the global database see below fig 1.0.
        //currentBalance added to an object

        break;
        default:
        alert("Sorry please select from one of the 5 following options") // Alert window please Try Again send back to mainmenu as a capture all for unknow inputs in the switch case.
        mainMenuWindow();
 }

};






//The parseInt() method converts a string into an integer .

// The parseFloat() method converts a into a floatng number.

//alert("Alert Alert!");

//confirm("Please confirm")

//prompt("Enter PIN")


// fig 1.0 -- You'll need a closing balance updating to seperate file in and object. Which also includes the keys => Card/Name : PIN : Opening balance : Updated Closing Balance.
