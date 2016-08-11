import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TimelineService {
  private getTimelineUrl = 'https://erdn9n97nk.execute-api.us-east-1.amazonaws.com/phase1/patient/61DCADA0-59AF-11E6-99DB-F58697120F48/timeline';

  constructor(private http: Http) {}

  getTimeline(startDate) {
    let url = this.getTimelineUrl;
    if (startDate) {
      url += '?startDate=' + startDate;
    }
    return this.http.get(url)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
