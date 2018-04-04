import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forum-component',
  templateUrl: './forum-component.component.html',
  styleUrls: ['./forum-component.component.css']
})
export class ForumComponentComponent implements OnInit {
  username : string;
  
  constructor(private route : ActivatedRoute) { }

  ngOnInit() 
  {

  this.route.paramMap.subscribe(params => 
  {
    this.username = params.get('username');
    console.log(this.username);
  })

  }

}
