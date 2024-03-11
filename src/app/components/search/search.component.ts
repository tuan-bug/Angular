import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Goods } from 'src/app/model/goods.model';
import { GoodsService } from 'src/app/services/goods.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  keyword!: string;
  searchResult: any;
  constructor(private route: ActivatedRoute,private goodService: GoodsService){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.keyword = params['keyword'];
      console.log(this.keyword);
      if (this.keyword) {
        this.search();
      }
    });
  }

  search(){
    if (this.keyword.trim()) { // Kiểm tra từ khóa có giá trị không rỗng
      this.goodService.search(this.keyword.trim())
        .subscribe(results => {
          this.searchResult = results; // Gán kết quả tìm kiếm vào biến
          console.log('Search results:', this.searchResult);
        }, error => {
          console.error('Error searching:', error);
        });
    }
  }
}
