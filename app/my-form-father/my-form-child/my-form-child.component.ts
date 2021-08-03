import { Component, ContentChild, ElementRef, Input } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray,
  NgModel,
  FormControlName,
  FormControlDirective,
  ControlContainer
} from '@angular/forms';
const originFormControlNgOnChanges = FormControlDirective.prototype.ngOnChanges;
FormControlDirective.prototype.ngOnChanges = function() {
  this.form.nativeElement = this.valueAccessor._elementRef.nativeElement;
  return originFormControlNgOnChanges.apply(this, arguments);
};

const originFormControlNameNgOnChanges = FormControlName.prototype.ngOnChanges;
FormControlName.prototype.ngOnChanges = function() {
  const result = originFormControlNameNgOnChanges.apply(this, arguments);
  this.control.nativeElement = this.valueAccessor._elementRef.nativeElement;
  return result;
};

@Component({
  selector: 'my-form-child',
  templateUrl: './my-form-child.component.html'
})
export class MyFormChildComponent {
  @Input() ageForm = FormGroup;
  @Input() testprop: string;
  @ContentChild(FormControlName)
  public controlName: FormControlName;
  constructor(
    private fb: FormBuilder,
    private element: ElementRef,
    public controlContainer: ControlContainer
  ) {}
  public ogFormGroup;
  ngOnInit() {
    console.log('from child - printing all controls');
    console.log(this.ageForm);

    console.log('from child - printing first control (input box) value');
    console.log(this.ageForm.controls.ChildCtrl1.value);

    console.log('from child - printing second control (drodpdown list) value');  
    console.log(this.ageForm.controls['ChildCtrl2'].value.Id);
    console.log(this.ageForm.controls['ChildCtrl2'].value.title);
    console.log(this.ageForm.controls['ChildCtrl2'].value.reporttype);
    

    console.log('from child - printing third control (checkbox ) value');
    console.log(this.ageForm.controls.ChildCtrl3.value);
  
    this.createForm();
  }

  createForm() {
    this.ageForm.addControl('age', new FormControl('', Validators.required));
  }
}
