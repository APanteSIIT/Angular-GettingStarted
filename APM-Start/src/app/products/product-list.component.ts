import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from '../shared/service/productService.component';



@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
   
    
})
export class ProductListComponent implements OnInit{
  
  
  showImage:boolean=false;
  messageFromStarComponent:string;
  imageWidth: number=50;
  imageMargin: number=2;
  errorMessage :string;
  _listFilter:string;
  get listFilter(){
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter=value;
    this.filteredProducts=this.listFilter ? this.performFilter(this.listFilter):this.products;
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy=filterBy.toLowerCase();
    return this.products.filter((value:IProduct)=>value.productName.toLowerCase().indexOf(filterBy)!==-1);
  }

  filteredProducts:IProduct[];
    products:IProduct[];
       
    constructor(private productService:ProductService){
      
      this.listFilter='';
    }

    getImage(){
      this.showImage=!this.showImage;
    }
    ngOnInit(): void {
        this.productService.getProducts().subscribe({
       next:products=>{
         this.products=products,
         this.filteredProducts=this.products
        },
       error:err =>this.errorMessage=err});
     
    }
    onNotify(message:string):void{
      this.messageFromStarComponent=message;
    }

   
}