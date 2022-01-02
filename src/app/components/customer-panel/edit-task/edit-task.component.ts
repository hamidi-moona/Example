import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeTaskService } from 'src/app/employee-task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  id!:number;
  userId!:any;
  task:any;
  editForm!:FormGroup;

  constructor(
    public service:EmployeeTaskService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void
  {
    this.id = this.route.snapshot.params['taskId'];
    this.userId = localStorage.getItem("Token");

    this.service.find(this.id).subscribe((data:any) => {
      this.task = data;
    });

    this.editForm = new FormGroup({
      title: new FormControl('',[Validators.required]),
      body: new FormControl('',Validators.required)
    });
  }

  get f()
  {
    return this.editForm.controls;
  }

  submit()
  {
    console.log(this.editForm.value);
    this.service.update(this.id,this.editForm.value).subscribe(res => {
      this.router.navigate(['/customerPanel'],{queryParams:{UserId: this.userId}});
    })
  }


  back()
  {
    this.router.navigate(['/customerPanel'],{queryParams:{UserId: this.userId}});
  }
}
