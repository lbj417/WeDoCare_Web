import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class QuestionnaireService {
  private getQuestionnaireUrl = 'https://erdn9n97nk.execute-api.us-east-1.amazonaws.com/phase1/questionnaire/5C871DC0-59CF-11E6-BE93-5B26498BEA89';

  constructor(private http: Http) {}

  getQuestionnaire() {
    return this.http.get(this.getQuestionnaireUrl)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
