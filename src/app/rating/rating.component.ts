import { Component, Input } from '@angular/core';
import { CustomPipePipe } from "../custom-pipe.pipe";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CustomPipePipe,FormsModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {
  name:any='';

  @Input() Rating:any

}
