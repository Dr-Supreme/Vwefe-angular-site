import { Component, OnInit } from '@angular/core';
import { ProjectModel } from '../../core/models/project-model';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../core/services/project.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit{
    projects$!: Observable<ProjectModel[]>;

  constructor(
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
      this.projects$ = this.projectService.getProjects();
    }

}
