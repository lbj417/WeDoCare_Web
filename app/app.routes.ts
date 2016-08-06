import { provideRouter, RouterConfig } from '@angular/router';
import { TimelineComponent } from './components/timeline.component';
import { QuestionnaireComponent } from './components/questionnaire.component';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'timeline',
    component: TimelineComponent
  },
  {
    path: 'questionnaire/:id',
    component: QuestionnaireComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
