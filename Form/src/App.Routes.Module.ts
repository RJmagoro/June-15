import { ViewComponent } from "./app/component/view/view.component";
import { RegisterComponent } from "./app/component/register/register.component";
import { DetailsComponent } from "./app/component/details/details.component";
import { EventComponent } from "./app/component/event/event.component";





export const AppRoutes  = [

   
    
    { path: '', component: RegisterComponent},    
    { path: 'details', component: DetailsComponent, children: [
        { path: 'event', component: EventComponent },      
        { path: 'view', component: ViewComponent }
    
    
    
 ]}



];

