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
    domString +=      '<input type="text" class="form-control" id="inputname" placeholder="Neville Longbottom">'
    domString +=    '</div>'
    domString +=    '<button type="submit" class="btn btn-secondary mb-2" id="sort">Sort!</button>'
    domString +=  '</div>'
    domString += '</form>'
  
    printToDom('formBox', domString);
    document.getElementById('sort').addEventListener('click', makeCard);
};

let studentArray = [];

const makeCard = () => {
  let domString = '';
  let newStudent = [];
  domString += '<div class="card student-card" style="width: 18rem;">'
  domString +=  '<div class="card-body">'
  domString +=    '<h5 class="card-title">Student Name</h5>'
  domString +=    '<p class="card-text">House</p>'
  domString +=  '</<div>'
  domString += '</<div>'

  newStudent = [domString];
  printToDom('studentList', domString);
  //console.log(printToDom('studentList', domString));
  studentArray.push(newStudent);
  console.log('students', studentArray);
};





const events = () => {
document.getElementById('startSort').addEventListener('click', generateForm);

};

const init = () => {
  events();
};

init ();