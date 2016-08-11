import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Day } from '../models/day';
import { Timeline } from '../models/timeline';
import { TimelineService } from '../services/timeline.service';

declare var moment: any;

@Component({
  selector: 'my-timeline',
  templateUrl: 'app/views/timeline.component.html',
  styleUrls: ['app/styles/timeline.component.css']
})

export class TimelineComponent implements OnInit {
  title = 'Timeline';

  timeline: Timeline = {
    startDate: '',
    days: []
  };

  selectedDay: Day;

  formattedDay: '';

  startDate: '';

  constructor(
    private router: Router,
    private timelineService: TimelineService
  ) {}

  getTimeline() {
    this.timelineService.getTimeline(null)
      .then(timeline => {
        this.startDate = timeline.days[0].formattedDate;
        this.timeline = timeline;
      });
  }

  ngOnInit() {
    this.getTimeline();
  }

  goToDay(day: Day) {
    this.selectedDay = day;
    this.formattedDay = moment(day.formattedDate).format('dddd MMMM D, YYYY');
  }

  prevWeek() {
    let startDate = moment(this.startDate).subtract(1, 'week').format('YYYY-MM-DD');
    this.timelineService.getTimeline(startDate)
      .then(timeline => {
        this.startDate = timeline.days[0].formattedDate;
        this.timeline = timeline;
      });
  }

  nextWeek() {
    let startDate = moment(this.startDate).add(1, 'week').format('YYYY-MM-DD');
    this.timelineService.getTimeline(startDate)
      .then(timeline => {
        this.startDate = timeline.days[0].formattedDate;
        this.timeline = timeline;
      });
  }
}
