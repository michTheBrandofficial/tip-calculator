let perPersonTotal = document.querySelector("#perPersonTotal");
let billInput,
  tipInput,
  totalPerPerson,
  inputs = document.querySelectorAll("input");
let numberOfPeopleElement = document.querySelector("#numberOfPeople");
let numberOfPeople = Number(numberOfPeopleElement.textContent);
const calculateBill = () => {
  //Make sure you typecast it. Typecasting is a process in which the interpreter converts one datetype into another.
  billInput = Number(document.querySelector("#billTotalInput").value);
  tipInput = Number(document.querySelector("#tipInput").value);
  totalPerPerson = (billInput + billInput * (tipInput / 100)).toFixed(2);
  totalPerPerson = (totalPerPerson / numberOfPeople).toFixed(2);
  perPersonTotal.textContent = `$${totalPerPerson}`;
};
const increasePeople = () => {
  numberOfPeople += 1;
  numberOfPeopleElement.textContent = numberOfPeople;
  calculateBill();
};
const decreasePeople = () => {
  numberOfPeople -= 1;
  //Use guard clause later.
  if (numberOfPeople === 0) {
    numberOfPeople = 1;
    throw "You cannot have less than one person!!!";
  }
  numberOfPeopleElement.textContent = numberOfPeople;
  calculateBill();
};
