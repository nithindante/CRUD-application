import { Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { EditformsComponent } from './editforms/editforms.component';

export const routes: Routes = [
    {path:'',component:EmployeeDetailsComponent},
    {path:'forms',component:BasicFormComponent},
    {path:`forms/:id`,component: EditformsComponent}
];
