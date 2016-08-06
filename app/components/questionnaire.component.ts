import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Questionnaire } from '../models/questionnaire';
import { QuestionnaireService } from '../services/questionnaire.service';

@Component({
  selector: 'my-questionnaire',
  templateUrl: 'app/views/questionnaire.component.html'
})

export class QuestionnaireComponent implements OnInit {
  title = 'Questionnaire';

  questionnaire: Questionnaire = {
    dueDate: '',
    questions: [],
    questionnaireId: '',
    patientId: '',
    category: '',
    templateId: ''
  };

  constructor(
    private router: Router,
    private questionnaireService: QuestionnaireService
  ) {}

  getQuestionnaire() {
    this.questionnaireService.getQuestionnaire()
      .then(questionnaire => {
        this.questionnaire = questionnaire;
      });
  }

  ngOnInit() {
    this.getQuestionnaire();
  }

}
