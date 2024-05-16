import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nested-form-array',
  templateUrl: './nested-form-array.component.html',
  styleUrls: ['./nested-form-array.component.css']
})
export class NestedFormArrayComponent implements OnInit{

myForm!: FormGroup;

constructor(private fb: FormBuilder) {}

ngOnInit() {
  this.myForm = this.fb.group({
    subCategoryName: this.fb.array([])
  });
}

get subCategoryName(): FormArray {
  return this.myForm.get('subCategoryName') as FormArray;
}

newItem(): FormGroup {
  return this.fb.group({
    mainItemName: '',
    subItemName: '',
    subNewItem: this.fb.array([])
  });
}

addItem() {
  if(this.myForm.valid){
  this.subCategoryName.push(this.newItem());
  }
}
// addItem(){
// const itemsName=this.myForm.get('subNewCategoryName')?.value.trim();
//      if(itemsName !== '')
//     {
//       const itemNameControl=new FormControl(itemsName,Validators.required);
//       (this.myForm.get('subCategoryName') as FormArray).push(itemNameControl);
//       console.log(itemNameControl);
      
//       this.myForm.get('subNewCategoryName')?.setValue('');
//     }
    

//   }
removeItem(index: number) {
  this.subCategoryName.removeAt(index);
}

subNewItemList(index: number): FormArray {
  return this.subCategoryName.at(index).get('subNewItem') as FormArray;
}

newSubItemList(): FormGroup {
  return this.fb.group({
    newItemName: '',
    subNewCategoryName: ''
  });
}

addSubNewItemList(index: number) {
  this.subNewItemList(index).push(this.newSubItemList());

}

removeSubNewItemList(parentIndex: number, childIndex: number) {
  this.subNewItemList(parentIndex).removeAt(childIndex);
}

onSubmit() {
  console.log(this.myForm.controls['subCategoryName'].value);
}
}
