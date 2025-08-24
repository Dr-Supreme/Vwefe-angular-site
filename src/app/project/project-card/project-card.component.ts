import { Component, Input} from '@angular/core';
import { ProjectModel } from '../../core/models/project-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-card',
  standalone: false,
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() project!: ProjectModel;

  constructor(private router: Router) {}

  navigateToProject() {
    this.router.navigate([this.project.route]);
  }
}
