import { Component } from '@angular/core';
import { ProjectModel } from '../../core/models/project-model';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
    projects: ProjectModel[] = [
    {
      title: 'Project One',
      description: 'This is the first project.',
      imageUrl: 'assets/images/project1.jpg',
      route: '/projects/project-one'
    },
    {
      title: 'Project Two',
      description: 'This is the second project.',
      imageUrl: 'assets/images/project2.jpg',
      route: '/projects/project-two'
    },
    {
      title: 'Project Three',
      description: 'This is the third project.',
      imageUrl: 'assets/images/project3.jpg',
      route: '/projects/project-three'
    }
  ]
}
