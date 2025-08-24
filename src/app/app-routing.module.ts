import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { HomeComponent } from './overview/home/home.component';
import { ProjectsComponent } from './projects/projects/projects.component';
import { AboutMeComponent } from './about/about-me/about-me.component';
import { ContactMeComponent } from './contact/contact-me/contact-me.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path:'projects',
    component: ProjectsComponent,
  },
  {
    path: 'about',
    component: AboutMeComponent
  },
  {
    path: 'contact',
    component: ContactMeComponent
  }

  //this must stay at the end of tis array:
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
