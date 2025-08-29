import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { HomeComponent } from './overview/home/home.component';
import { ProjectsComponent } from './projects/projects/projects.component';
import { AboutMeComponent } from './about/about-me/about-me.component';
import { ContactMeComponent } from './contact/contact-me/contact-me.component';
import { PokedexComponent } from './projects/pokedex/pokedex.component';
import { MatrixComponent } from './projects/matrix/matrix.component';
import { ColorPickerComponent } from './projects/color-picker/color-picker.component';

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
    //loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) - this is for lazyloading but we need the projects to have its own module
  },
  {
    path: 'projects/pokedex',
    component: PokedexComponent // This should be a specific project component, but for now we use the same component
  },
  {
    path: 'projects/matrix',
    component: MatrixComponent
  },
  {
    path:'projects/color-picker',
    component: ColorPickerComponent
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
    enableTracing: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
