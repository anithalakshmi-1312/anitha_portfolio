/* Intro to JavaScript
1. Variables
2. Function
3. Pops Ups
4.Conditional ST.
5.Loops
6.Error handling
7.Event Listeners
8.DOM

*/




//let name = "Anitha lakshmi"; //hardcoding?

//let age = 18;

//alert("Welcome to my web app!" + name);


//Function definition
// function add(a,b){
// let num1 = a;
// let num2 = b;
// result = num1+num2;
// return result;
// }

// function def
// function greet(){
//alert("This is a greet function pop up!");
//}

//function call
//greet();

//let answer = add(3,4):
//console.log(answer);

 //Conditional statements

 //if(condition1a and condition1b) {
    //Code will execute if the condition is true
 //}
 //else if(condition2) {
// code will execute if the condition 1 is true
// }
 //else{
    //this code will execute if the condition is not true
 //}
 //if(grade>18) {
   //alert("You got D grade")
 //}
//else if (grade>=70) {
  // alert("You got B grade");
// }
// else{
// alert("You did not qualify");
//}
//for (let i=0; i<=10; i++) {
  // console.log(i);
//}

//const control_of_toggle_btn = document.getElementById("toggle-theme");

//control_of_toggle_btn.addEventListener('click', function(){
  // console.log("toggle button was clicked");
//}
//);
//document.addEventListener('keydown', function(event) {
  // console.log("Key down event triggered with: " + event.key);
//}
//);

//window.addEventListener('resize', function() {
  // console.log("Window was scolled");
//}
//);

//const control_of_contact_form = document.getElementById("contact-form");

//control_of_contact_form.addEventListener('submit', function() {
  //console.log("Contact Form was submitted");
//}
//);

//ERROR HANDLING

//function getUser(id){
  // const users = {
    //  1: "Anitha",
      //2: "Jeya"
   //};
//if (!users[id]) {
  // throw new Error('No user found with the idS{id}');
   //return users[id];
//}

//function runBroken() {
  // console.log("Fetching user 1:" + getUser(1));
  // console.log("Fetching user 2:" + getUser(2));
  //console.log("Fetching user 3:" + getUser(3));
//}

// function runHandled(){
// const ids = [1,2,3];

//ids.foreach(id => {
//try{
// console.log("Fetching user"+id+getUser(id));
//}
//catch(error) {
// console.log("Could not find user"+ id + error.message+ "/n");
//}
//finally{
//console.log("Done trying user"+id);
//}
//});
// console.log("Processing completed!");
//}

 //Tasks for JavaScript

 //1.Make the toggle button work
 //2.Make Admin Login button work
 //3.Make Contact Me section capture user data and store in DB
 //4.Make Admin Login section work- check creds and show responses.
 //5. Fetch User messages from the DB 

 //Task 2

const control_of_admin_btn - document.getElementbyId("admin-btn");
const control_of_admin_login-section = document.getElementById("admin-login");
const control_of_user_responses_section = document.getElementbyId("user-responses");

control_of_admin_btn.addEventListener('click', function(){
   control_of_admin_login_section.style.display = "block"; //from none to block
}
);

//Task toggle button work

const control_of_toggle_btn = document.getElementById("toggle-theme");

control_of_toggle_btn.addEventListener('click', function(){
  document.body.classList.toggle('dark-theme');
});

const db_url ="167eTeK8aJlbGMgnPgLyrh4qp4GZjIaohxYk4OS58-dkWXbARNGGBbrNy"//our API

//Task 3 - Capture info from the contact me form

const control_of_contact_form = document.getElementById("contact-form");

control_of_contact_form.addEventListener("submit", async function(event){
  let name = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;
  let msg = document.getElementById("input-msg").value;
   // let date = new Date().toLocaleString();

   try {
   let response = await fetch (
    db_url,
    {
      method: "POST",
      headers: {
         "Content-Type": 
           "text/plain;charset=utf-8"
    },
    body: JSON.stringify({
      action: "save_message",
      name: name,
      email: email,
      msg: msg
    })

   }
);
   let result = await response.json();
   if (result.success) {
      alert("Message submitted, will get back to you shortly");
   }
   else{
      alert("Message could not be saved!");
   }
}
   catch (error) {
      console.error(error);
      alert("There was a problem submitting the message!");
   }

});

//Task making the admin login section work
let control_of_admin_form = document.getElementById("admin-form");

control_of_admin_form.addEventListener("submit", async function(event){
   let username = document.getElementById("input-username").value;
   let password= document.getElementById("input-password").value;

try {
   let response = await fetch(
      db_url,
      {
         method: "POST",
         headers: {
            "Content-Type": "text/plain;charset=utf-8"
         },
         body: JSON.stringify({
            action: "login",
            username: username,
            password: password
         })
      }
   );
}
   let result = await response.json;
   if(result.success) {
      alert("Login successful!");

      // Admin section should sisappear and user responses section should come up!!
      control_of_admin_login.section.style.displayn= "none"; //Makes it invisible
      control_of_user_responses_section.style.display = "block"; //Makes it visible

      //Call the getUserMessages function here
      getUserMessages();
   }
   else{
      alert("Access denied, please try again!");
   }
}
   catch (error) {
      console.error(error);
      alert("There was a problem logging in!");
   }

}
)

async function getUserMessages() {
   try {
      let response = await fetch(
         db_url,
      );

      let result = await response.json();

      if(!result.success) {
         alert("Could not fetch the messages!");
         return; //the function will not run further once a return is encountered.
      }

      const control_of_user_messages_div = document.getElementById("user-messages");

      result.messages.forEach(
        response => {
         let control_of_new_div = document.createElement("div");

         let nameParagraph = document.createElement("p");
         nameParagraph.textContent = "Name: " + responses.name;

         let emailParagraph = document.createElement("p");
         email.Paragraph.textContent = "Email: " + responses.email;

         let messageParagraph = document.createElement("p");
         messageParagraph.textContent = "Message: " + responses.msg;

         let dateParagraph = document.createElement("p");
         dateParagraph.textContent = "Date: " + responses.date;

         let separater = document.createElement("hr");

         control_of_new_div.appendChild(nameParagraph);

         control_of_new_div.appendChild(emailParagraph);

         control_of_new_div.appendChild(messageParagraph);

         control_of_new_div.appendChild(dateParagraph);

         control_of_new_div.appendChild(separater);

         control_of_user_messages_div.appendChild(control_of_new_div);


        }
      )
   }

   catch(error) {
      console.error(error);
      alert("There was a problem in fetching messages from DB!");
   }
}