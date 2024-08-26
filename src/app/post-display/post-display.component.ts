import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-post-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-display.component.html',
  styleUrl: './post-display.component.css'
})
export class PostDisplayComponent implements OnInit{
  commentDetails:any = [];
  myArray:any;
  postDetails:any = {};


  constructor(private http:HttpClient,private router: ActivatedRoute, private roots:Router) { }
  ngOnInit() {

    let id = Number(this.router.snapshot.paramMap.get('id'));
    // this.sharedService.getSingleProduct(id).subscribe(res => {
    //   this.productDetails = res;
    // console.log(this.productDetails);
    // })
    // this.router.navigate(['posts:id']);


    this.http
    .get('https://jsonplaceholder.typicode.com/posts/' + id)
    .pipe(map(response => {
    this.postDetails = response;
      return response
  }),
      mergeMap((res: any) =>
        this.http.get(
          'https://jsonplaceholder.typicode.com/posts/'+ res.id+'/comments'
        )
      )
    )
    .subscribe({
      next: (comments: any) => {
        this.commentDetails = comments;
        console.log(this.commentDetails, 'chkmerge');
    },error: (err) => {
      console.error('Error occurred:', err);
      // Handle the error here
      if(err.status == 404){
        this.roots.navigate(['/posts']);
      }
    }
  });
}


}
