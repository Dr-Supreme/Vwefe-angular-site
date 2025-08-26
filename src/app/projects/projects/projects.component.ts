import { Component, OnInit } from '@angular/core';
import { ProjectModel } from '../../core/models/project-model';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../core/services/project.service';
import { Observable } from 'rxjs';

// this is for lazy loading but we need the projects to have its own library or directory
// let const_routes = [
//   {
//   path: '',
//   component: ProjectsComponent,   
//   }
// ];
// then in the imports :
// imports : [RouterModule.forChild(const_routes)],
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
