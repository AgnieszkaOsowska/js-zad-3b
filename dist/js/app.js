'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* 1.Zaprojektuj i stwórz obiektową reprezentację dziennika ocen. Do dziennika można dodawać (ale nie edytować czy usuwać) oceny, podając nazwę przedmiotu, 
stopień (w skali akademickiej: 2, 3, 3.5, 4, 4.5 lub 5) oraz datę. Dziennik powinien pozwolić na policzenie średniej ocen z każdego przedmiotu oraz 
średniej ogólnej (czyli średniej wszystkich średnich, to nie to samo co średnia wszystkich stopni).
 *Stwórz interfejs w HTML, który pozwoli na posługiwanie się dziennikiem. */

var Gradebook = function () {
    function Gradebook() {
        _classCallCheck(this, Gradebook);

        this.grades = [];
    }

    _createClass(Gradebook, [{
        key: 'addGrade',
        value: function addGrade() {
            var grade = document.getElementById('gradeI').value;
            var subject = document.getElementById('subjectI').value;
            var date = document.getElementById('dateI').value;

            this.grades.push(subject + ' ' + grade + ' ' + date);
            console.log(this.grades);
            var gradePlace = document.getElementById('info');
            gradePlace.innerHTML = this.grades;
        }
        //averageGrade() {
        //  for(i=0; i<=this.grades.length; i++) {
        //     grade[i] 
        // }
        // }

    }]);

    return Gradebook;
}();

var gradebook1 = new Gradebook();

var btnAccept = document.getElementById('accept');

btnAccept.addEventListener('click', gradebook1.addGrade());
//# sourceMappingURL=app.js.map