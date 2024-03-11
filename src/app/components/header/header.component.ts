import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  keyword: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  search(){
    console.log('Keyword:', this.keyword);
    if (this.keyword) {
      this.router.navigate(['/search'], { queryParams: { keyword: this.keyword } });
    }
  }

}
