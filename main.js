const printToDom = (divId, textToPrint) => {
  document.getElementById(divId).innerHTML = textToPrint;
};

const generateForm = () => {
  let domString = '';
    domString += '<form class="form-inline">'
    domString +=  '<div class="form-group">'
    domString +=    `<h3>Enter First Year's Name</h3>`
    domString +=  '</div>'
    domString +=  '<div class="form-row">'
    domString +=    '<div class="form-group mb-1">'
    domString +=      '<label for="staticEmail2" class="sr-only">Student</label>'
    domString +=      '<input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="Student Name:" required>'
    domString +=    '</div>'
    domString +=    '<div class="form-group mx-sm-3 mb-2">'
    domString +=      '<label for="inputPassword2" class="sr-only">Student Name Here</label>'
    domString +=      `<input type="text" class="form-control" id="inputname" placeholder="Neville Longbottom" onclick="this.value=''">`
    domString +=    '</div>'
    domString +=    '<button type="submit" class="btn btn-secondary mb-2" id="sort">Sort!</button>'
    domString +=  '</div>'
    domString += '</form>'
  
    printToDom('formBox', domString);
    document.getElementById('sort').addEventListener('click', makeStudent);

};

let studentArray = [];
let houses = ['Gryffindor', 'Ravenclaw', 'Hufflepuff', 'Slytherin'];

const makeStudent = () => {
  if (document.getElementById('inputname').value == '') {
    alert("Please enter First Year Name");
    return false;} else {
  const randomHouse = Math.floor(Math.random()*houses.length);
  const randomId = Math.random().toString(13).replace('0.', '');
  newStudent = {
    id: randomId,
    name: document.getElementById('inputname').value,
    house: `${houses[randomHouse]}`
  };
  studentArray.push(newStudent);

  makeCards();
}
};

const makeCards = () => {
  let domString = '';
  for (let i = 0; i < studentArray.length; i++) {
  domString += `<div class="card row-cols ${studentArray[i].house}" style="width: 18rem;" >`
  domString +=  '<div class="card-body">'
  domString +=    `<h5 class="card-title">${studentArray[i].name}</h5>`
  domString +=    `<p class="card-text">${studentArray[i].house}</p>`
  domString +=    `<button type="button" class="btn btn-dark" id="${studentArray[i].id}">Expel</button>`
  domString +=  '</div>'
  domString += '</div>'
  }
  printToDom('student-list',domString);

  let expellClass = document.getElementsByClassName('btn-dark');
  for (var i = 0; i < expellClass.length; i++) {
    expellClass[i].addEventListener('click', expelStudent);
  };

};

const expelStudent = (e) => {
  const studentId = e.target.id;
  console.log(`expel ${studentId}`);
  for(let i = 0; i< studentArray.length; i++) {
    if(studentArray[i].id == studentId) {
      studentArray.splice(i, 1);
    }
  }
  
  makeCards();
};



const events = () => {
document.getElementById('startSort').addEventListener('click', generateForm);
};

const init = () => {
  events();
};

init ();