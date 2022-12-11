import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-regis',
  templateUrl: './emp-regis.component.html',
  styleUrls: ['./emp-regis.component.css']
})
export class EmpRegisComponent {

  name=""
designation=""
salary=""
cname=""
mob=""

uname=""
psw=""

  // constructor(private api:ApiService){}

  readValues=()=>
  {
    let data:any={"name":this.name,"designation":this.designation,"salary":this.salary,"cname":this.cname,"mob":this.mob,"uname":this.uname,"psw":this.psw}
    console.log(data)
    // this.api.addEmp(data).subscribe(
    //   (response:any)=>
    //   {
    //     console.log(response)
    //     if (response.status == "success") {

    //       alert("Successfully added")
  
    //       this.name=""
  
    //       this.designation=""

    //       this.salary=""
  
    //       this.cname=""
  
    //       this.mob=""
  
    //       this.uname=""

    //       this.psw=""
  
    //     } else {
  
    //       alert("Something went wrong")
  
    //     }
    //   }
    // )
  }

}



