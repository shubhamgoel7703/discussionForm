import { RouterModule, Routes } from "@angular/router";
import { CreateTopicComponent } from './create-topic/create-topic.component';
import { ExploreComponent } from './explore/explore.component';

export const Sub_Routes : Routes=
[
    {path:'createtopic',component:CreateTopicComponent},
    {path:'exploretopic',component:ExploreComponent}
]