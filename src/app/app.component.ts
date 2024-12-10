import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FriendlyCaptchaComponent } from './friendly-captcha/friendly-captcha.component';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    FriendlyCaptchaComponent
  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Hier kun je de logica toevoegen om het formulier te verzenden
    } else {
      console.log('Formulier is ongeldig');
    }
  }
}
