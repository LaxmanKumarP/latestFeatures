import { Component, Input } from '@angular/core';
import { CustomPipePipe } from "../custom-pipe.pipe";
import { FormsModule } from '@angular/forms';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CustomPipePipe,FormsModule, NgbRatingModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {
  constructor(config: NgbRatingConfig) {
		config.max = 5;
		config.readonly = true;
	}
  name:any='';

  @Input() Rating:any

}
