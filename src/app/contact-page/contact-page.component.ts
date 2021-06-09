import { Component } from '@angular/core';

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
