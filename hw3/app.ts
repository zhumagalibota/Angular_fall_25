import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'De Nobis';
  subtitle = 'Excellentia in omnibus quae facimus';
  companyName = 'Societas Exemplum';
  mission = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  
  photoUrl = 'https://via.placeholder.com/500x400/adc178/ffffff?text=Imago+Societatis';
  isSubscribeDisabled = false;
  likes = 0;
  
  showThankYouMessage = false;
  subscribed = false;
  
  visitorName = '';
  visitorEmail = '';
  
  incrementLikes() {
    this.likes++;
  }
  
  toggleThankYouMessage() {
    this.showThankYouMessage = !this.showThankYouMessage;
  }
  
  subscribe() {
    if (this.visitorEmail.trim() !== '') {
      this.subscribed = true;
      this.isSubscribeDisabled = true;
    }
  }
  
  resetSubscription() {
    this.subscribed = false;
    this.visitorEmail = '';
    this.isSubscribeDisabled = false;
  }
}