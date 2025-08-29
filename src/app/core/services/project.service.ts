import { Injectable } from '@angular/core';
import { ProjectModel } from '../models/project-model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
 private projects: ProjectModel[] = [
    {
      id:'pokedex',
      title: 'Pokemon Pokedex',
      description: 'Research your fav for pokemons',
      imageUrl: '/images/lvp.jpeg',
      route: '/projects/pokedex'
    },
    {
      id:'Matrix',
      title: 'Project Two',
      description: 'Get lost in the abyss of the matrix.',
      imageUrl: '/images/matrix.png',
      route: '/projects/matrix'
    },
    {
      id: 'color-picker',
      title: 'Color Picker',
      description: 'Pick and display your favorite colors.',
      imageUrl: '/images/color-picker.jpeg', // make a small screenshot for card
      route: '/projects/color-picker'
    }
  ];

  constructor() { }
  
  getProjects(): Observable<ProjectModel[]> {
    return of(this.projects);
  }

  getProjectById(id: string): Observable<ProjectModel | undefined> {
    return of(this.projects.find(p => p.id === id));
  }
}
