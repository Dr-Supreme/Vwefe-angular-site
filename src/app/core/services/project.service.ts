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
      id:'p3',
      title: 'Project Three',
      description: 'This is the third project.',
      imageUrl: 'assets/images/project3.jpg',
      route: '/projects/project-three'
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
