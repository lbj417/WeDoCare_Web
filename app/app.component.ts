import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { TimelineService } from './services/timeline.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    TimelineService
  ]
})

export class AppComponent {
  title = 'WeDOCare Patient Portal';
}
