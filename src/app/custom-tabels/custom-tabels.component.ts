import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-custom-tabels',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-tabels.component.html',
  styleUrl: './custom-tabels.component.css'
})
export class CustomTabelsComponent implements OnChanges {
 @Input() tableData: any
 @Input() coldef: any

 ngOnInit(){

 }

 ngOnChanges(){
  console.log(this.tableData);
  console.log(this.coldef);
 }
}
