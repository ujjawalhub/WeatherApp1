import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  @ViewChild('user') pass: ElementRef;
  @ViewChild('pass') user: ElementRef;

  public canActivate: boolean;  

  constructor(private router: Router) {
  }

  tryLogin() {
    console.log(this.user.nativeElement.value);
    if(this.user.nativeElement.value  && this.pass.nativeElement.value == "webmobi"){
     this.router.navigate(['/', 'weather']);
     this.canActivate = true;
    } else{ this.router.navigateByUrl('/');
    this.canActivate = false;
  }
  }
}