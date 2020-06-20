import { Component, OnInit } from '@angular/core';

// Importo el archivo JSON
// tslint:disable-next-line:import-spacing
import  *  as  questionsList  from  'src/assets/json/ejemplo.json';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnInit {

  checkArray = [];
   // Exporto los datos del archivo JSON a la  vista
   Questions: any = (questionsList as any).default;

  constructor() {
  }

 ngOnInit() {
 }


 validateAnswers = function() {
  let contador = 0;
  let contadorRespuestaMultiple = 0;
   for (let i = 0; i < this.Questions.length; i++) {
    for (let j = 0; j < this.Questions[i].answer.length; j++) {
      if (this.checkArray[this.Questions[i].answer[j]]) {
        contadorRespuestaMultiple++;
      }
    }
    for (let m = 0; m < this.Questions[i].badAnswer.length; m++) {
      if (this.checkArray[this.Questions[i].badAnswer[m]]) {
        contadorRespuestaMultiple = -1;
      }
    }
    if (this.Questions[i].answer.length === contadorRespuestaMultiple) {
      contador++;
    }
    contadorRespuestaMultiple = 0;
   }
   const result = (100 * contador) / this.Questions.length;
   console.log(result);
};

}
