import { DataService } from './../../services/data.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items : any;

  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.items = this.data.getMenu();
  }

}
