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
      title: 'Project One',
      description: 'This is the first project.',
      imageUrl: '../assets/images/project1.jpg',
      route: '/projects/pokedex'
    },
    {
      id:'matrix',
      title: 'Project Two',
      description: 'This is the second project.',
      imageUrl: '../assests/images/matrix.jpg',
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
