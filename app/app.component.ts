import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { TimelineService } from './services/timeline.service';
import { QuestionnaireService } from './services/questionnaire.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    TimelineService,
    QuestionnaireService
  ]
})

export class AppComponent {
  title = 'WeDOCare Patient Portal';
}
