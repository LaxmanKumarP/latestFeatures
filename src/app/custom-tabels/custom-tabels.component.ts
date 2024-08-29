import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalDismissReasons, NgbModal, NgbPagination, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterModule } from '@angular/router';
import { RatingComponent } from "../rating/rating.component";
import { PriceCalPipe } from "../price-cal.pipe";
import { CustomUpperCaseDirective } from '../custom-upper-case.directive';
import { SharedService } from '../shared.service';
import { AddressModelComponent } from '../address-model/address-model.component';

@Component({
  selector: 'app-custom-tabels',
  standalone: true,
  imports: [CommonModule, NgbPagination, FormsModule, RatingComponent, PriceCalPipe, CustomUpperCaseDirective, NgbTooltipModule, RouterModule, AddressModelComponent],
  templateUrl: './custom-tabels.component.html',
  styleUrl: './custom-tabels.component.css'
})
export class CustomTabelsComponent implements OnChanges,AfterViewInit {
 @Input() tableData: any;
 @Input() coldef: any;
 @ViewChild('addres',{static:true}) addModal!:AddressModelComponent //after V9 static false by default
 @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();
 page = 1;
 pageSize = 2;
 currentUser:any;
 collectionSize:any;
  selectedRating: any;
  closeResult: any;

 constructor(private router:Router, private modalService: NgbModal, private sharedService:SharedService){}

 ngOnInit(){
  console.log(this.tableData,'checking on load');
  console.log('view child', this.addModal);
 }

 ngOnChanges(){
  this.collectionSize = this.tableData?.length;
 }

 ngAfterViewInit(): void {
  console.log('view child', this.addModal);
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

showAddress(item:any){
 this.currentUser = Number(item.id);
}
}