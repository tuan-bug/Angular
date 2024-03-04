import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-category',
  templateUrl: './child-category.component.html',
  styleUrls: ['./child-category.component.scss']
})
export class ChildCategoryComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();
  message: string = '';

  sendMessage() {
    this.messageEvent.emit(this.message);
  }
  ngOnInit(): void {
    
  }

  
}
