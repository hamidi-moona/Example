import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
    
  isSubmitted  =  false;
  @ViewChild('User')
  User!: ElementRef;
 
  @ViewChild('Password')
  Password!: ElementRef;
 

  getUser:string = '';
  getPassword:string = '';
  isAdmin:boolean = false;

  constructor( private router: Router,
    private formBuilder:FormBuilder) {
   }

  ngOnInit()
  {
    this.loginForm = new FormGroup({
      name:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]+$')]),
      password:new FormControl('',[Validators.required])
    });
  }



  get name()
  {
    return this.loginForm.get('name'); 
  }

  get password()
  {
    return this.loginForm.get('password'); 
  }


  login(){

    this.getUser = this.User.nativeElement.value;
    this.getPassword = this.Password.nativeElement.value;
    if(this.getUser === 'admin' && this.getPassword === '123?')
    {
       localStorage.setItem("Token","Admin");
       this.router.navigate(['/adminPanel'],{queryParams:{User:'Admin'}});
    }
    else if(this.getUser === 'user1' && this.getPassword === '456?')
    {
      localStorage.setItem("Token","1");
      this.router.navigate(['/customerPanel'],{queryParams:{UserId:'1'}});
    }
    else if(this.getUser === 'user2' && this.getPassword === '789?')
    {
      localStorage.setItem("Token","2");
      this.router.navigate(['/customerPanel'],{queryParams:{UserId:'2'}});
    }
    else
    {
      alert('Error');
    }
    
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }



    // this.router.navigateByUrl('/admin');
  }
}
