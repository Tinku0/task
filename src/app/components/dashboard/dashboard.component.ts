import { DataService } from './../../services/data.service';
import { FakejsonService } from './../../services/fakejson.service';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild('closeModal') closeModal: any;

  name : any;
  products : any;
  latestprod : any;
  users : any;
  prodCat : any;
  comForm : any;
  np : boolean = true;
  lp : boolean = true;
  latestp : boolean = true;
  pc : boolean = true;
  lu : boolean = true;

  constructor(private product:FakejsonService,private data:DataService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:any)=>{
      console.log(params.params.name);
      if(params.params.name){
        this.data.getMenu().forEach(
          (i:any)=>{
            console.log(i.name.trim(),params.params.name.trim())
            if(i.name.trim() == params.params.name.trim()){
              this.np = i.access.np ? i.access.np : false;;
              this.lp = i.access.lp ? i.access.lp : false;;
              this.latestp = i.access.latestp ? i.access.latestp : false;;
              this.pc = i.access.pc ? i.access.pc : false;;
              this.lu = i.access.lu ? i.access.lu : false;
            }
          }
        );
      }
    })
    this.comForm = new FormGroup({
      np:new FormControl(),
      lp:new FormControl(),
      latestp:new FormControl(),
      pc:new FormControl(),
      lu:new FormControl()
    })
    this.product.getProducts().subscribe(
      (data:any)=>{
        console.log(data);
        this.products = data;
        this.latestprod = this.products[0];
      }
    );
    this.product.getUsers().subscribe(
      (data:any)=>{
        console.log(data);
        this.users = data;
      }
    );
    this.product.getProdCat().subscribe(
      (data:any)=>{
        console.log(data);
        this.prodCat = data;
      }
    );
  }

  check(){
    console.log(this.name,this.comForm.value);
    this.data.setMenu(this.name,this.comForm.value);
    this.name = '';
    this.comForm.reset();
    this.closeModal.nativeElement.click()
  }

}
