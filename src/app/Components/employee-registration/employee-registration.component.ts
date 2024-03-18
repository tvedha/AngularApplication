import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddComponent } from '../emp-add/emp-add.component';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent {
constructor(private matDialog:MatDialog)
{

}
OpenForm(){
  this.matDialog.open(EmpAddComponent);
}

}
