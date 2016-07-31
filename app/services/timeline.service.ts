import { Injectable } from '@angular/core';
import { TIMELINE } from '../mock-timeline';

@Injectable()
export class TimelineService {
  getTimeline() {
    return Promise.resolve(TIMELINE);
  }
}
