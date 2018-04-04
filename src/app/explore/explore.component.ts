import { Component, OnInit } from '@angular/core';
import { TopicServiceService } from '../topic-service.service';
import { Topic } from '../topic';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  topic : Topic;
  constructor(private topicArray : TopicServiceService) { 
   /* this.topic = new Topic();

    this.topic.subject="How to expertise Angular6";
    this.topic.description="I want to be an expert angular developer like Sonali";
    this.topic.comments.push("Tharani : PLease help");
    this.topic.comments.push("Tharani : guide me");

    //topicArray.AddTopic(this.topic);

    this.topicArray.topicArray.push(this.topic);
    console.log(this.topicArray); */
  }

  ngOnInit() 
  {
    
  }

  addComment(input : any , index : any)
  {
    console.log("in add comment");
    console.log(input.value);
   
    console.log(index);

    this.topic = this.topicArray.topicArray[index];
    this.topic.comments.push(this.topicArray.username+ " : "+ input.value);

    input.value="";

    

      
    //console.log(this.topicArray.topicArray[index]);
  }


}
