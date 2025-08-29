import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects/projects.component';
import { ProjectCardComponent } from './project/project-card/project-card.component';
import { AboutMeComponent } from './about/about-me/about-me.component';
import { ContactMeComponent } from './contact/contact-me/contact-me.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { HomeComponent } from './overview/home/home.component';
import { FormsModule } from '@angular/forms';
import { PokedexComponent } from './projects/pokedex/pokedex.component';
import { MatrixComponent } from './projects/matrix/matrix.component';
import { PreloadAllModules, RouterLink, RouterLinkActive, provideRouter, withPreloading } from '@angular/router';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ColorPickerComponent } from './projects/color-picker/color-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    ProjectCardComponent,
    AboutMeComponent,
    ContactMeComponent,
    LoginPageComponent,
    HomeComponent,
    PokedexComponent,
    MatrixComponent,
    SideMenuComponent,
    ColorPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterLink,
    RouterLinkActive
  ],
  providers:[],
  // providers: [provideRouter(withPreloading(PreloadAllModules))],
  // this above is how to enable preloading of lazy loaded modules, to load all lazy loaded component right after the page first loads
  bootstrap: [AppComponent]
})
export class AppModule { }
