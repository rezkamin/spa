import { Component, NgModule } from '@angular/core';
import { Headcom } from "../headcom/headcom";
import { FormsModule } from '@angular/forms';



@Component({
  
  selector: 'app-contact',
  imports: [Headcom,FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
isTypedUser:boolean=false;
isTypedAge:boolean=false;
isTypedEmail:boolean=false;
isTypedPass:boolean=false;
texeInInPut:string="";
texeTypedAge:string="";
texeTypedEmail:string="";
texeTypedPass:string="";

  

}
