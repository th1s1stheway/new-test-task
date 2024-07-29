import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { UserListComponent } from './app/pages/user-list/user-list.component';
import { UserInfoComponent } from './app/pages/user-info/user-info.component';

const routes = [
  //{ path: '', component: UserListComponent, pathMatch: 'full' },
  { path: 'userInfo', component: UserInfoComponent },
  { path: 'userList', component: UserListComponent }
];

bootstrapApplication(AppComponent,  {providers: [provideHttpClient(), provideRouter(routes)]})
  .catch((err) => console.error(err));
