/* 1.Zaprojektuj i stwórz obiektową reprezentację dziennika ocen. Do dziennika można dodawać (ale nie edytować czy usuwać) oceny, podając nazwę przedmiotu, 
stopień (w skali akademickiej: 2, 3, 3.5, 4, 4.5 lub 5) oraz datę. Dziennik powinien pozwolić na policzenie średniej ocen z każdego przedmiotu oraz 
średniej ogólnej (czyli średniej wszystkich średnich, to nie to samo co średnia wszystkich stopni).
 *Stwórz interfejs w HTML, który pozwoli na posługiwanie się dziennikiem. */



class Gradebook {
    constructor() {
        this.grades = [];
    }
    addGrade() {
        let grade = document.getElementById('gradeI').value;
        let subject = document.getElementById('subjectI').value;
        let date = document.getElementById('dateI').value;

        this.grades.push(`${subject} ${grade} ${date}`);
        console.log(this.grades);
        const gradePlace = document.getElementById('info');
        gradePlace.innerHTML = this.grades;
    }
    //averageGrade() {
      //  for(i=0; i<=this.grades.length; i++) {
       //     grade[i] 
       // }
   // }
}

let gradebook1 = new Gradebook();

const btnAccept = document.getElementById('accept');

btnAccept.addEventListener('click', gradebook1.addGrade());
