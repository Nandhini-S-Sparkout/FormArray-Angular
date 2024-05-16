import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

myForm!:FormGroup;

public getJsonValue:any;
public postJsonValue:any;
constructor(){}

ngOnInit(){
 
  this.myForm=new FormGroup({
    'itemName':new FormControl(''),
    'subCategoryName':new FormArray([])
  })
}



get itemControls()
{
  return (<FormArray>this.myForm.get('subCategoryName')).controls;
}
onAddItems(){
     const itemsName=this.myForm.get('itemName')?.value.trim();
     if(itemsName !== '')
    {
      const itemNameControl=new FormControl(itemsName,Validators.required);
      (this.myForm.get('subCategoryName') as FormArray).push(itemNameControl);
      console.log(itemNameControl);
      
      this.myForm.get('itemName')?.setValue('');
    }

  }

  onRemoveItem(i:number)
  {
    (this.myForm.get('subCategoryName') as FormArray).removeAt(i);
  }

}
