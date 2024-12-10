import { FriendlyCaptchaSDK } from "@friendlycaptcha/sdk"; //v2
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-friendly-captcha',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './friendly-captcha.component.html',
  styleUrl: './friendly-captcha.component.css'
})
export class FriendlyCaptchaComponent implements AfterViewInit {
  @ViewChild('frccaptcha', { static: false })
  friendlyCaptcha!: ElementRef<HTMLElement>;
  sitekey: string = environment.fcSiteKey;

  ngAfterViewInit() {
    const sdk = new FriendlyCaptchaSDK();

    const element = this.friendlyCaptcha.nativeElement;

    const myWidget = sdk.createWidget({
      element: element,
      sitekey: this.sitekey,
      startMode: "auto",
    });

    myWidget.addEventListener("frc:widget.complete", (event) => {
      const detail = event.detail;
      console.log("V2 Widget completed, the response: ", detail.response)
    })

    myWidget.addEventListener("frc:widget.error", (event) => {
      const detail = event.detail;
      console.error("V2: Something went wrong in solving the captcha: ", detail.error)
    })

    myWidget.addEventListener("frc:widget.expire", (event) => {
      console.warn("V2: The captcha solution is no longer valid, the user waited too long.")
    })
  }
}
