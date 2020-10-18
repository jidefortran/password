import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';



  // tslint:disable-next-line: typedef
  onChangeLength(value: string) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  // tslint:disable-next-line:typedef
  onButtonClick() {
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()_?/';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }

    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];

    }
    console.log(generatedPassword);
    this.password = generatedPassword;
    // console.log(`About to generate password for the following
    //Include Syambols: ${this.includeSymbols}
    //Include Numbers: ${this.includeNumbers}
    // Include Letters: ${this.includeLetters}
    //`);

    //  this.password = 'MY PASSWORD!!';
  }

  // tslint:disable-next-line:typedef
  getPassword() {
    return this.password;
  }

  onChangeUseLetters() {

    this.includeLetters = !this.includeLetters;
  }

  // tslint:disable-next-line:typedef
  onChangeNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeSymbols() {
    this.includeSymbols = !this.includeSymbols;

  }

}
