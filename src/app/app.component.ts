import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularBlog';
data = 'Code with Jeet';   // This is called Dynamic Data which is  going to app.component.html
// getValue(){
//   return "Hi this is function. Called from app.component.html and writen in app.component.ts file"
// }

// getFunction(){
//   alert("This function is called from app.compenent.ts");
// }

// getName(name: any){
//   alert("Jeet");
// }
// getNumber(numbers: string){
//   alert("123");

// }

// getEvent(val: string){
//   console.warn(val);
// }

displayValue:string = ""
getValue(val: string){
  console.warn(val)
  this.displayValue = val
}

}
