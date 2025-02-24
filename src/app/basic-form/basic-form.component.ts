import { Component, ViewChild } from '@angular/core';
import {NgModule} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';

import { Emp } from '../emp';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmpdetailsService } from '../empdetails.service';

@Component({
  selector: 'app-basic-form',
  standalone: true,
  imports: [FormsModule,RouterModule,CommonModule],
  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.css'
})
export class BasicFormComponent {
  @ViewChild('tempForm') tempForm!: NgForm;
  constructor(private empDetails: EmpdetailsService,private route: Router){}
onSubmit(event: any) {                                                      
  if(this.tempForm.valid){
    const content = {
      username: this.tempForm.controls['username'].value,
      name: this.tempForm.controls['name'].value,
      website: this.tempForm.controls['website'].value,
      id: ''
    };
    
    this.empDetails.enterDetails(content).subscribe({
      next: () => {
        this.route.navigate(['/'])
      },
      error: (error) => {
        console.error('Error submitting data:', error);
      }
    });
                                                                                                                        
  }
  else{
    window.confirm('it is invalid')
  }

}

// empArr : Emp[]=[]

employeeArr: Emp = {
  id:0,
  name:'',
  username:'',
  website:''
}
}
