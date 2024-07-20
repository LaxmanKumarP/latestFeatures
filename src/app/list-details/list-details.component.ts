import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from '../shared.service';
import { CommonModule } from '@angular/common';
import { CustomTabelsComponent } from "../custom-tabels/custom-tabels.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-list-details',
  standalone: true,
  imports: [CommonModule, CustomTabelsComponent,RouterOutlet],
  templateUrl: './list-details.component.html',
  styleUrl: './list-details.component.css'
})
export class ListDetailsComponent{

   }
   