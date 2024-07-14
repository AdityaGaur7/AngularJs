import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { NotFoundError } from 'rxjs';
import { NotfoundComponent } from './notfound/notfound.component';
import { Component } from '@angular/core';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AboutyouComponent } from './aboutyou/aboutyou.component';

export const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
   
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
        {
          path: 'you',
          component: AboutmeComponent,
        },
        {
          path: 'me',
          component: AboutyouComponent,
        },
      ],
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];
