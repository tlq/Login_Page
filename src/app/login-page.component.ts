import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'login-page-app',
  template: `  
  
  <div class="body"> 
  
  <form class="login">

  <fieldset>
    
  	<div class="legend">Login <a href="www.hotmail.com" class="register"><span>New Here ?</span><br>
    <span style="margin-left: 10px;"> Register Now ! </span></a></div>
    
    <div class="input">
    	<input type="email" placeholder="Email" required />
       <a href="" class="link">Forgot Username</a>
    </div>
    <div class="input">
    	<input type="password" (focus)="deleteError()" placeholder="Password" [(ngModel)]="password" name="password" required />
      <a href="" class="link">Forgot Password</a>
    </div>
    <div [hidden]="error" class="error"> password/e-mail doesnt match! </div>
    <button type="submit" (click)="checkPassword()"  class="submit"><i class="fa fa-long-arrow-right"></i></button>
    
  </fieldset>
  
  <div class="feedback">
  	login successful <br />
    redirecting...
  </div>
  
</form>
</div>
    `,
  styleUrls: ['login-page.component.css']
})
export class LoginPageAppComponent {
  title = 'login-page works!';
  password;
  password1 = "12345"
  error: boolean = true;

  checkPassword() {
    if(this.password1 != this.password ){
        this.error = false;
    }else {
      this.error = true;
    }
  }
  deleteError() {
    this.error = true;
  }
}
