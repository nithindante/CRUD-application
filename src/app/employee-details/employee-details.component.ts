import { Component } from '@angular/core';
import { EmpdetailsService } from '../empdetails.service';
import { CommonModule } from '@angular/common';
import { Emp } from '../emp';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {

  deleteForm(item: Emp) {
    this.empDetails.deleteDetails(item.id).subscribe(() => {
      this.empDetails.getDetails().subscribe((employees) => {
        this.newArr = employees
      })
    }

    )
  }
  editForm(item: any) {
    this.route.navigate([`forms/${item.id}`])
  }
  constructor(private empDetails: EmpdetailsService, private route: Router) { }

  newArr: Emp[] = []


  details() {
  }

  ngOnInit() {
    this.empDetails.getDetails().subscribe((ele) => {
      this.newArr = ele
    })
  }
}

