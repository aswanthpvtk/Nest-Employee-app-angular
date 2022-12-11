import { Component } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  empid=""
  task=""
  date=""
  cdate=""


  readValues=()=>{
    let data:any={"empid":this.empid,"task":this.task,"date":this.date,"cdate":this.cdate}
    console.log(data);
  }

}
