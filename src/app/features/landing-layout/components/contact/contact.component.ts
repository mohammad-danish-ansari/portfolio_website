import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ValidationService } from 'src/app/features/service-guard/form-validation';
import { ContactService } from './../../../../services/contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
   constructor(
    private toaster: ToastrService,
    private validationService: ValidationService,
    private contactService : ContactService
  ) {}
form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^[7-9][0-9]{9}$'),
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl(''),
   
  });
 REGISTER_FORM = [
    {
        message: "Name is Required",
        key: "name"
    },
    {
        message: " phoneNo is Required & must be 10",
        key: "phone"
    },
    {
        message: "subject is Required",
        key: "subject"
    },
  
    
];

  submit() {
    this.form.enable;
    if (this.validationService.checkErrors(this.form, this.REGISTER_FORM)) {
      return;
    }
    let formData = this.form.value;
    this.createBooking(formData);
  }

  createBooking(formData: any) {
    this.contactService.create(formData).subscribe(
      (success) => {
        this.toaster.success(success.message);
        this.form.reset()
      },
      (err) => {
        console.error('failed:', err);
        const errorMessage = err.error?.message;
        this.toaster.error(errorMessage, 'Error');
      }
    );
  }
}
