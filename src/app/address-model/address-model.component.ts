import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { SharedService } from '../shared.service';
import { ModalDismissReasons, NgbModal, NgbModalRef, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-address-model',
  standalone: true,
  imports: [NgbRatingModule],
  templateUrl: './address-model.component.html',
  styleUrl: './address-model.component.css'
})
export class AddressModelComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() userId: any;
  selectedRating: any;
  // modalService: any;
  closeResult!: string;
  modalRef!:NgbModalRef
  @ViewChild('content')
  cnt!: TemplateRef<any>;
  address: any
  constructor(private sharedService: SharedService, private modalService:NgbModal) { }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.userId) {
      this.getSingleUserDetails();
    }
  }

  getSingleUserDetails() {
    this.sharedService.getSingleUsers(this.userId).subscribe(data => {
      console.log(data, 'data from address model');
      debugger;
      this.address = data.address;
      this.openModal(this.cnt);
    })
  }
  openModal(content: TemplateRef<any>) {
    debugger;
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


}
