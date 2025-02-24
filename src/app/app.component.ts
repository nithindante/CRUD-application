import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet,RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[HttpClient]
})
export class AppComponent {
  title = 'crud';
}
