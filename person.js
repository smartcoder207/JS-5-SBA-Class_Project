/*
  in this file, write your person class to be exported to your main.js file
  take care not to unintentionally change the name of the class or the export statement!!!
*/

class Person {
  
constructor(firstName, lastName, age) {

this.firstName = firstName;
this.lastName = lastName;
this.age = age;
    }
}

function display(){
let per=new Person(document.form.firstName.value,document.form.lastName.value,document.form.age.value);

console.log(per);

alert(JSON.stringify({"FirstName":per.firstName,"LastName":per.lastName,"Age":per.age}));
}

export default Person;



//const wrapper= document.querySelector['.wrapper'],
     // form=wrapper.querrySelectorAll('.form'),
  //submitInput    = form[0].querrySelector('inout[type="Submit"]');
//function getDataForm(e) {
 // e.preventDefault();
 // var formData = new FormData(form[0]);
//}
//creating DOM content loaded for this website

//document.addEventListener('DOMContentLoaded', function(){submitInput.addEventlisterner('click' , getDataForm, false);
//}, false);


/* Please, ignore this line of practice (trier and error)below:

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person('Lydia', 'Hallie');
Person.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());
*/
