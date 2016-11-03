import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public employees: FirebaseListObservable<any>;
  updateForm = new Array();
  addForm = {firstname:'',lastname:'', age:''};
  alertText:string;

  constructor(af: AngularFire) {
    this.employees = af.database.list('/employees');

  }
  addEmployee( firstname: string, lastname:string, age:number , sex: string) {
    this.employees.push({ firstname: firstname, lastname: lastname, age: age, sex:sex});
    alert('Employee add completed');
    this.addForm = {firstname:'',lastname:'', age:''}

  }
  updateEmployee(key: string, firstname: string, lastname:string, age:number , sex: string) {
    this.employees.update(key, { firstname: firstname, lastname: lastname, age: age, sex:sex } );
    alert('Employee update completed');
  }
  deleteEmployee(key: string) {    
    this.employees.remove(key); 
  }
  confirmDialogue(text: string){
    return confirm(text);
  }
  validateEmployeeForm(firstname: boolean, lastname: boolean, age:boolean){
    if(firstname && lastname && age){
      return true;
    }
    alert('Please fill all fields!');
    return false;
  }

  clearPristine(firstname: FormControl, lastname: FormControl, age: FormControl){
    firstname.pristine = false;
    lastname.pristine = false;
    age.pristine = false;
    console.log(age.pristine);
    return true;
  }
  dumpData(){
    // For made dump data
    this.employees.push({ firstname: "Thanaphol", lastname: "Sartpetch", age: 24, sex:"Male"});
    this.employees.push({ firstname: "Manlika", lastname: "Dangkamol", age: 23, sex:"Female"});
    this.employees.push({ firstname: "Kunlanid", lastname: "Sartpetch", age: 2, sex:"Female"});
    this.employees.push({ firstname: "Thanachat", lastname: "Sartpetch", age: 26, sex:"Male"});
  }

  ngOnInit() { 
    let thisApp = this;

    this.employees.subscribe(employee => employee.forEach(function(e) {
      thisApp.updateForm.push({
        firstname: '',
        lastname: '',
        age: ''
      });
    }));

  }  
}