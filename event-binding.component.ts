import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
 
  buttonName = "My Button"
     i = 0;
  constructor() { }
  
  spinnerMode ="determinate";
  btnEnable = false;
  text = true; 

  ngOnInit() {
  }
 
  save(){

    console.log("Click")

  }


  test(){

   console.log("click")

  }

  disable(){
    this.btnEnable = false;
    this.spinnerMode = "indeterminate";
    this.text = false;

      setTimeout(() => { 
         this.btnEnable = false;
         this.spinnerMode = "determinate";
         
      } , 1500 );
     
  }
    
  

 
  

  

    
    

 

}
