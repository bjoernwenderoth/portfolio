import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  FormsModule,
  NgForm,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
 
import { CommonModule } from '@angular/common';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
 
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    TranslateModule,
    MatButtonModule,
    MatListModule,
    MatBottomSheetModule,
    CommonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  };
  formSubmitAttempted = false;
  private _bottomSheet = inject(MatBottomSheet);
 
  constructor(private router: Router) {}

  submitForm(form: NgForm) {
    this.formSubmitAttempted = true;
    
    if (form.valid) {
      this.onSubmit(form);
    }
  }
 
  onSubmit(ngForm: NgForm) {
    if (ngForm.valid) {
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '03c721ac-766b-4756-9796-c62240ef5ed9',
          name: this.contactData.name,
          email: this.contactData.email,
          message: this.contactData.message,
        }),
      })
        .then(async (response) => {
          let json = await response.json();
        })
        .catch((error) => {
          console.log(error);
        });
 
      console.log('Form Submitted!', this.contactData);
      this.openBottomSheet();
      this.formSubmitAttempted = false;
      ngForm.resetForm();
    }
  }
 
  navigateToPrivacy(event: Event) {
    event.stopPropagation();
    this.router.navigate(['/privacy-policy']);
  }
 
  openBottomSheet(): void {
    console.log('openBottomSheet method called');
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
}
 
@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <div>
      <p>{{ 'CONTACT_COMPONENT.FORM_FEEDBACK' | translate }}</p>
    </div>
  `,
})
export class BottomSheetOverviewExampleSheet {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>
  ) {
    setTimeout(() => {
      this._bottomSheetRef.dismiss();
    }, 3000);
  }
  close(): void {
    this._bottomSheetRef.dismiss();
  }
}
 