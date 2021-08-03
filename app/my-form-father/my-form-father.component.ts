import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'my-form-father',
  templateUrl: './my-form-father.component.html'
})
export class MyFormFatherComponent {
  public testarry: Test[] = [];
  myFormFather: FormGroup;

  websiteList: any[] = [
    {
      name: 'sample 1',
      id: 1
    },
    {
      name: 'sample 2',
      id: 2
    },
    {
      name: 'sample 3',
      id: 3
    }
  ];

  checkboxes = [
    {
      name: 'Value 1',
      value: 'value-1'
    },
    {
      name: 'Value 2',
      value: 'value-2'
    },
    {
      name: 'Value 3',
      value: 'value-3'
    }
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
    //setting default values for demo example
    this.myFormFather.controls.ChildCtrl1.value = 'from parent';
    this.myFormFather.controls.ChildCtrl3.value = true;
    testlist.subscribe(response => {
      this.testarry = response;
      this.myFormFather.controls['ChildCtrl2'].setValue(this.testarry[2]);
    });
  }

  createForm() {
    this.myFormFather = this.fb.group({
      nickName: ['', [Validators.required]],
      name: ['', [Validators.required]],
      ChildCtrl1: ['', [Validators.required]],
      ChildCtrl2: new FormControl(null),
      ChildCtrl3: ['', [Validators.required]],
      email: [''],
      fullname: ['Bill Gates'],
      phone: [
        {
          value: '0497 88 88 88',
          disabled: true
        }
      ]
    });
  }
}

export class Test {
  public Id: number;
  public title: string;
}

export const testlist = of([
  { Id: 1, title: 'test1' },
  { Id: 2, title: 'test2' },
  { Id: 3, title: 'test3' },
  { Id: 4, title: 'test4' },
  { Id: 5, title: 'test5' }
]);
