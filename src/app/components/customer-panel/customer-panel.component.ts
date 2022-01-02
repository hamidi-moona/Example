import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeTaskService } from 'src/app/employee-task.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-customer-panel',
  templateUrl: './customer-panel.component.html',
  styleUrls: ['./customer-panel.component.css']
})
export class CustomerPanelComponent implements OnInit {

  Tasks: any[] = [];
  form!:FormGroup;
  isAddMode: boolean=false;
  titleModal:string ='';
  @ViewChild('closebutton') closebutton: any;
   UserId:number = this.route.snapshot.queryParams['UserId'];


  constructor(private route: ActivatedRoute, public service: EmployeeTaskService) { 
  }


  ngOnInit(): void {

    this.form = new FormGroup({
      userId: new FormControl(this.UserId),
      title: new FormControl('',[Validators.required]),
      body: new FormControl('',[Validators.required])
    });

    this.getAllUsers(this.UserId);
  }

  getAllUsers(UserId:any)
  {
    let UserTask = this.service.getAll().subscribe((data: any[]) => {
      this.Tasks = data;
      this.Tasks = this.Tasks.filter(item => item.userId == UserId);
      console.log(this.Tasks)
    });
  }
  deletePost(id: number){
    this.service.delete(id).subscribe(res => {

         this.Tasks = this.Tasks.filter(item => item.id !== id);

         console.log('Post deleted successfully!');
    })

  };

  get f()
  {
    return this.form.controls;
  }

  CreateTask()
  {
    this.service.create(this.form.value).subscribe(res => {
      console.log("Created:",res);
      this.closebutton.nativeElement.click();
    });
    
    this.getAllUsers(this.UserId);
  }

}
