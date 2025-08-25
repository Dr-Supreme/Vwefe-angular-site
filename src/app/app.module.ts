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
import { RouterLink, RouterLinkActive } from '@angular/router';

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
    MatrixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterLink,
    RouterLinkActive
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
