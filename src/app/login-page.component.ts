import { Component } from '@angular/core';
import {UserServiceService} from './shared/services/user-service.service'

@Component({
  moduleId: module.id,
  selector: 'login-page-app',
  template: `  
  
  <div class="body"> 
  
  <form class="login">

  <fieldset>
    
  	<div class="legend">LOGIN <a href="" class="register"><span>New Here ?</span><br>
    <span style="margin-left: 10px;"> Register Now ! </span></a></div>
    
    <div class="input">
    	<input type="email" placeholder="Email" required  [(ngModel)]="email" name="email"/>
       <a href="" class="link">Forgot Username</a>
    </div>
    <div class="input">
    	<input type="password" (focus)="deleteError()" placeholder="Password" [(ngModel)]="password" name="password" required />
      <a href="" class="link">Forgot Password</a>
    </div>
    <div [hidden]="error" class="error"> password/e-mail doesnt match! </div>
    <button type="submit" (click)="checkUserCredentials()" class="btn btn-primary submit">Login</button>
    
  </fieldset>
</form>
</div>
    `,
  styleUrls: ['login-page.component.css'],
  providers: [UserServiceService]
})
export class LoginPageAppComponent {

  private password: string;
  private email: string;
  private error: boolean = true;
  private user: Object;

constructor(private userService: UserServiceService) {

}

  checkUserCredentials() {
    let response;
    let user = {email: this.email, password: this.password};
    this.userService.getUser(user).subscribe(
        (res) => {
          if(res.status != 200){
            this.error = false;
          }else{
            this.user = res;
          }
    },
    (err) => this.error = false);
  }
  deleteError() {
    this.error = true;
  }
}
