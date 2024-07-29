import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalDismissReasons, NgbModal, NgbPagination, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterModule } from '@angular/router';
import { RatingComponent } from "../rating/rating.component";
import { PriceCalPipe } from "../price-cal.pipe";
import { CustomUpperCaseDirective } from '../custom-upper-case.directive';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-custom-tabels',
  standalone: true,
  imports: [CommonModule, NgbPagination, FormsModule, RatingComponent, PriceCalPipe, CustomUpperCaseDirective, NgbTooltipModule, RouterModule],
  templateUrl: './custom-tabels.component.html',
  styleUrl: './custom-tabels.component.css'
})
export class CustomTabelsComponent implements OnChanges {
 @Input() tableData: any
 @Input() coldef: any
 @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();
 page = 1;
 pageSize = 2;
 collectionSize:any;
  selectedRating: any;
  closeResult: any;

 constructor(private router:Router, private modalService: NgbModal, private sharedService:SharedService){}
 

 ngOnInit(){
  console.log(this.tableData,'checking on load');
 }

 ngOnChanges(){
  this.collectionSize = this.tableData?.length;
 }

 refreshData(){
  this.pageChanged.emit(this.pageSize);
  console.log('c', this.pageSize)
}

openModal(rating: any, content: TemplateRef<any>) {
  this.selectedRating = rating;
  const modalElement = document.getElementById('ratingModal');
  this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
    (result) => {
      this.closeResult = `Closed with: ${result}`;
    },
    (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    },
  );
}

private getDismissReason(reason: any): string {
  switch (reason) {
    case ModalDismissReasons.ESC:
      return 'by pressing ESC';
    case ModalDismissReasons.BACKDROP_CLICK:
      return 'by clicking on a backdrop';
    default:
      return `with: ${reason}`;
  }
}

openInduvidualProduct(id:number){
this.sharedService.productId = id;
this.router.navigate(['detail']);
}

addressValue(item:any){
  this.sharedService.addressObs$.next(item);
  // this.sharedService.addressObs$.complete();
  // console.log(this.sharedService.addressObs$.next(item),'address');

}
}