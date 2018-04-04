import { Injectable } from '@angular/core';
import { Topic } from './topic';

@Injectable()
export class TopicServiceService {


public topicArray : Topic[]=[];
public username : string;
topic : Topic;
  constructor() 
  {
    this.topic = new Topic();

    this.topic.subject="How to expertise Angular6";
    this.topic.description="I want to be an expert angular developer like Sonali";
    this.topic.comments.push("Tharani : PLease help");
    this.topic.comments.push("Tharani : guide me");

    //topicArray.AddTopic(this.topic);

    this.topicArray.push(this.topic);
    console.log(this.topicArray);
  }

}
