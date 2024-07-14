import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { NotFoundError } from 'rxjs';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'user/:id',
        component: UserComponent
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '**',
        component: NotfoundComponent
    }
];
