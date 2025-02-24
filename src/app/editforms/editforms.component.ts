import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpdetailsService } from '../empdetails.service';
import { log } from 'node:console';
import { FormsModule, NgForm } from '@angular/forms';
import { Emp } from '../emp';
import { map } from 'rxjs';

@Component({
  selector: 'app-editforms',
  imports: [FormsModule],
  templateUrl: './editforms.component.html',
  styleUrl: './editforms.component.css'
})

export class EditformsComponent {
  @ViewChild('tempForm') tempForm!: NgForm;

  employeeArr : Emp = {
    id : 0,
    name: "",
    username:"",
    website:""
  };
onSubmit(editForm: NgForm) {
  this.empDetails.editEmpDetails(this.employeeArr).subscribe({
    next: ()=> {
        this.router.navigate(['/'])
    },
    error(err) {
        console.error(err)
    },
  })
}

constructor(private route: ActivatedRoute,private empDetails: EmpdetailsService, private router : Router){}
id: number = 0;
ngOnInit(){
this.id = Number(this.route.snapshot.paramMap.get('id'))
this.empDetails.getEmpDetails(this.id).subscribe((response)=>{
  this.employeeArr = response;
})
}
}
