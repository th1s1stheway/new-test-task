import { Routes } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';

export const routes: Routes = [
    //{ path: '', component: UserListComponent, pathMatch: 'full' },
    { path: 'userInfo', component: UserInfoComponent },
    { path: 'userList', component: UserListComponent }
];
