import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterModel } from 'src/app/models/register.model';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public vm: RegisterModel = new RegisterModel();

  constructor(private registrationService: RegisterService, private router:Router) {}

  ngOnInit(): void {}

  register(res: RegisterModel) {
    debugger;
    this.registrationService.registerUser(res).subscribe((response) => {
      debugger;
      console.log(response);
      if (response.Success == true) {
        console.log('successful');
        // $scope.message = "Registration Successful";
        this.router.navigateByUrl('/login')
      } else if (response.Success == false) {
        console.log(response.message);
        // $scope.message = response.data.message;
      }
    },(error)=>{
      debugger;
      console.error(error)
    });
  }
}
