import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {
submit(form:any) {
  var firstName = form.firstName;
  console.log(firstName);

  var lastName = form.lastName;
  console.log(lastName);

  var comment = form. comment;
  console.log(comment);

}
}





// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from "@angular/forms";

// @Component({
//   selector: 'app-reactive-form',
//   templateUrl: './reactive-form.component.html',
//   styleUrls: ['./reactive-form.component.css']
// })

// export class ReactiveFormComponent implements OnInit {

//   userForm: FormGroup;

//   constructor(public formBuilder: FormBuilder) { }

//   ngOnInit(): void {
//     this.userForm = this.formBuilder.group({
//       name: ['', [Validators.required, Validators.minLength(4)]],
//       email: ['', [Validators.required]],
//       phone: ['', [Validators.required]],
//       message: ['', [Validators.required]]
//     })
//   }

//   get getControl() {
//     return this.userForm.controls;
//   }

//   onSubmit() {
//     console.log(this.userForm);
//   }

// }
