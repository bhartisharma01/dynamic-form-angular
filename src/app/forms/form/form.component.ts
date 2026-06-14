import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
@Component({
  standalone: true,
  selector: 'app-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  formFields = import('../../form.json');
  private fb = inject(FormBuilder)

  dynamicForm!: FormGroup
  fieldDetails: any[] = []

  ngOnInit() {
    this.getFormFields()
  }

  async getFormFields() {
    const result = await this.formFields;
    this.fieldDetails = result?.default;
    console.log("checking result fields...", result)
    this.dynamicForm = this.createForm(this.fieldDetails)
    // this.formReset()
  }


  createForm(formDetails: any[]): FormGroup {
    const type: any = {};

    formDetails.forEach((ele: any) => {
      if (ele.type === 'group') {
        type[ele.name] = this.createForm(ele.fields);
      }

      else if (ele.type === 'array') {
        type[ele.name] = this.fb.array([
          this.createForm(ele.fields)
        ]);
      }

      else {
        type[ele.name] = new FormControl(
          null,
          this.mapFormValidators(ele.validators)
        );
      }
    });

    return new FormGroup(type);

  }

  get form() {
    return this.dynamicForm
  }

  formReset() {
    this.dynamicForm.reset();
    this.dynamicForm.markAsPristine();
    this.dynamicForm.markAsUntouched();
  }

  mapFormValidators(validators: any[] = []) {
    const validatorList: any[] = [];

    if (!validators || !validators.length) return validatorList;

    validators.forEach(val => {
      switch (val.type) {
        case 'required':
          validatorList.push(Validators.required);
          break;

        case 'email':
          validatorList.push(Validators.email);
          break;

        case 'minLength':
          validatorList.push(Validators.minLength(val.value));
          break;

        case 'pattern':
          validatorList.push(Validators.pattern(val.value));
          break;
      }
    });

    return validatorList;
  }

  addContact() {
    const contacts = this.dynamicForm.get('contacts') as any;

    const contactFields = this.fieldDetails.find(f => f.name === 'contacts');

    const group = this.createForm(contactFields.fields);

    contacts.push(group);
  }

  removeContact(index: number) {
    const contacts = this.dynamicForm.get('contacts') as any;
    contacts.removeAt(index);
  }

  onFormSubmit() {
    if (this.form.invalid) {
      this.dynamicForm.markAllAsTouched();
      return;
    }
    console.log("checking form data...", this.form.value)
  }

  // create a form  with dynamic labels , validations 

}
