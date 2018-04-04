import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TopicServiceService } from '../topic-service.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  username : string;
  constructor(private router : Router,private topicArray : TopicServiceService) { }

  ngOnInit() 
  {

  }

  submit()
  {
   console.log("SUBMIT");
   this.router.navigate(['/forum/'+this.username]);//,{queryParams:{username:this.username}});
  }

  logUsername(f)
  {
    this.username=f.control.value;
    console.log(this.username);
    this.topicArray.username= this.username;
  }

}
