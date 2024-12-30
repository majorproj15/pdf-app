import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PdfCreationComponent } from './pdf-creation/pdf-creation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PdfCreationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pdf-app';
}
