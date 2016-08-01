import { provideRouter, RouterConfig } from '@angular/router';
import { TimelineComponent } from './components/timeline.component';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'timeline',
    component: TimelineComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
