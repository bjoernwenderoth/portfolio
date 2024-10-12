import { Component, signal, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { merge } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatButtonModule, MatListModule, MatBottomSheetModule, CommonModule, MatFormFieldModule, MatCheckboxModule, MatIconModule, MatInputModule, FormsModule, ReactiveFormsModule,],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {
  http = inject(HttpClient)

  contactData = {
    name: "",
    email: "",
    message: "",
    privacy: false
  }

  mailTest = true;
  post = {
    endPoint: 'https://bjoern-wenderoth.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid) {
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: "03c721ac-766b-4756-9796-c62240ef5ed9",
          name: this.contactData.name,
          email: this.contactData.email,
          message: this.contactData.message,
        })
      })
        .then(async (response) => {
          let json = await response.json();
        })
        .catch(error => {
          console.log(error);
        })

      console.log('Form Submitted!', this.contactData);
      this.openBottomSheet();
      // this.http.post(this.post.endPoint, this.post.body(this.contactData)).subscribe();
      ngForm.resetForm();
    }

    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
             // Verwende explizit `this`
            console.info('send post complete');
          }
    
          
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }

  readonly email = new FormControl('', [Validators.required, Validators.email]);

  errorMessage = signal('');

  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }

  private _bottomSheet = inject(MatBottomSheet);
  openBottomSheet(): void {
    console.log('openBottomSheet method called');
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
}


@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  template: `
    <div>
      <p>Deine Anfrage wurde versendet.</p>
    </div>
  `,
})

export class BottomSheetOverviewExampleSheet {
  
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {
    setTimeout(() => {
      this._bottomSheetRef.dismiss();
    }, 3000);
  }

  close(): void {
    this._bottomSheetRef.dismiss();
  }
}

