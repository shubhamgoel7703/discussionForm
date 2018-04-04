import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TopicServiceService } from '../topic-service.service';
import { Topic } from '../topic';

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.css']
})
export class CreateTopicComponent implements OnInit {

  topic :Topic;

  constructor(private topicArray : TopicServiceService) { }

  form =new FormGroup({
    subject : new FormControl(),
    description : new FormControl()
  });

  ngOnInit() 
  {
    console.log("Create Topic Component");
  }

  clickMethod()
  {
    if(confirm("Are you sure to add topic ? ")) 
    {
      console.log("ss");
      console.log(this.form.controls.description.value);
     
      this.topic = new Topic();
      this.topic.subject=this.form.controls.subject.value;
      this.topic.description=this.form.controls.description.value;
      //this.topic.comments=this.form.controls.topic.value;
      
      //this.topicArray.AddTopic(this.topic);
      this.topicArray.topicArray.push(this.topic);
      console.log(this.topicArray);
      if(confirm("Topic Successfully Added!")) 
      {
      }

      this.form.reset();

      console.log(this.topic);//this.topicArray.topicArray);
    }
  }
}
