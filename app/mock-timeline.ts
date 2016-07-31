import { Timeline } from './models/timeline';

export const TIMELINE: Timeline = {
  startDate: '2016-07-24',
  days: [{
      dayOfWeek: 'Sunday',
      sequence: 1,
      formattedDate: '2016-07-24',
      prescriptions: [{
        name: 'Lipitor',
        strength: '50 mg',
        instructions: 'Take one tablet three times a day.'
      }],
      appointments: [],
      checklists: [],
      questionnaires: []
    }, {
      dayOfWeek: 'Monday',
      sequence: 2,
      formattedDate: '2016-07-25',
      prescriptions: [],
      appointments: [],
      checklists: [],
      questionnaires: []
    }, {
      dayOfWeek: 'Tuesday',
      sequence: 3,
      formattedDate: '2016-07-26',
      prescriptions: [],
      appointments: [],
      checklists: [],
      questionnaires: []
    }, {
      dayOfWeek: 'Wednesday',
      sequence: 4,
      formattedDate: '2016-07-27',
      prescriptions: [],
      appointments: [],
      checklists: [],
      questionnaires: []
    }, {
      dayOfWeek: 'Thursday',
      sequence: 5,
      formattedDate: '2016-07-28',
      prescriptions: [],
      appointments: [],
      checklists: [],
      questionnaires: []
    }, {
      dayOfWeek: 'Friday',
      sequence: 6,
      formattedDate: '2016-07-29',
      prescriptions: [],
      appointments: [],
      checklists: [],
      questionnaires: []
    }, {
      dayOfWeek: 'Saturday',
      sequence: 7,
      formattedDate: '2016-07-30',
      prescriptions: [{
        name: 'Lipitor',
        strength: '50 mg',
        instructions: 'Take one tablet three times a day.'
      }],
      appointments: [{
        time: '13:00',
        provider: 'Dr. Robert',
        location: '1311 SE 3rd St., Atlanta, GA 30309'
      }],
      checklists: [],
      questionnaires: []
    }]
};
