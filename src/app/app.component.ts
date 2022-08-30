import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length=0;
  password='';
  includeLetters=false;
  includeNumbers=false;
  includeSymbols=false;

  onChangeLegth(value:string){
    const parsedValue=parseInt(value);
   
    if(!isNaN(parsedValue)){
    this.length=parsedValue;
    console.log("length of password",parsedValue);
    
  }
  }
  onChangeUseLetters(){
    this.includeLetters= !this.includeLetters;
    
  }
  onChangeUseNumbers(){
    this.includeNumbers= !this.includeNumbers;
    
  }
  onChangeUseSymbols(){
    this.includeSymbols= !this.includeSymbols;
    
  }

  onButtonClick(){
    // this.password='my password open at box'
    // console.log(`about to generate a password with following:
    // IncludeLetters:${this.includeLetters}
    // includeNumbers:${this.includeNumbers}
    // includeSymbols:${this.includeSymbols}`

    // );
    const letters='abcdefghijklmnopqrstuvwxyz';
  const numbers='1234567890';
  const symbols='!@#$%^&*()';

  let validChar='';
  if(this.includeLetters){validChar += letters }
  if(this.includeNumbers){validChar += numbers }
  if(this.includeSymbols){validChar += symbols}


  let generatedPassword='';
  for(let i=0;i<this.length;i++){
    const index = Math.floor(Math.random()*validChar.length);
    generatedPassword += validChar[index];
  }
  this.password=generatedPassword;
  }
}
