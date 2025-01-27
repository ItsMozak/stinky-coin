import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    const audioElement = <HTMLAudioElement>document.getElementById('backgroundMusic');
    if (audioElement) {
      audioElement.muted = false; // Unmute the audio
      audioElement.play(); // Start playing the audio
    }
  }
}
