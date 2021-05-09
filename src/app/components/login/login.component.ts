import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public vm: Login = new Login();

  constructor(private loginService: LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  login(res){
    this.loginService.login(res).subscribe((response)=>{
      debugger
      console.log(response);
            if (response.Success == true) {
                console.log(response.message);
                // $scope.message = "Login Successful";
                let token = response.token;
                localStorage.setItem("token", token);
                let id = response.userid;
                localStorage.setItem("userid", id);
                let username = response.username;
                localStorage.setItem("username",username);
                this.router.navigateByUrl('/peer')
            }
            else if (response.Success == false) {
                console.log("username/password is invalid");
                // $scope.message = "Login Unsuccessful"
            }
      
    })
  }

}
