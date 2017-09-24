import { Component,ViewChild, OnInit } from '@angular/core';
import { Http,Headers,Response,RequestOptions } from '@angular/http';
import { FormGroup,FormBuilder,Validators } from '@angular/forms'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


import { ProductServer } from '../server/product.server';
import { UrlServer } from '../server/url.server';
import { CategoryServer } from '../server/category.server';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  ProductForm:FormGroup;
  ProductImageFile:File;
  @ViewChild('image') Product_Image;

  categories:any;
  products :any;
  constructor(private fb:FormBuilder, private http: Http,public productServer :ProductServer,public urlServer :UrlServer,public categoryServer : CategoryServer) {
      
      this.ProductForm = this.fb.group({
        'name':['',Validators.compose([Validators.required,Validators.minLength(2)])],
        'prixAchat':['',Validators.required],
        'prixVente':['',Validators.required],
        'category':['',Validators.required],
        'image':['',Validators.required],
        'description':['']
      })

      this.categoryGET();
      //console.log(this.categories);     
   }
  
  ngOnInit(): void {
    this.productGET();
  }

  categoryGET(){
      this.categoryServer.categoryGET().subscribe( res => this.categories = res );
  }

  productGET(){
      this.productServer.productGET().subscribe(res => this.products = res );
  }


  productPOST(value) {
      const Image = this.Product_Image.nativeElement;
      if(Image.files && Image.files[0]){
        this.ProductImageFile = Image.files[0]
      }
      const ImageFile: File =  this.ProductImageFile;
      console.log(ImageFile) 
      
      const formData: FormData = new FormData();
      formData.append('name',value.name);
      formData.append('image',ImageFile,ImageFile.name);
      formData.append('prixAchat',value.prixAchat);
      formData.append('prixVente',value.prixVente);
      formData.append('category',value.category);
      formData.append('description',value.description);

      this.productServer.submitData(formData)
      .subscribe(res => {
        this.products = "";
        //this.products = res;
        console.log(res);
        this.productGET();
      });
    }

  productDELETE(id:number){
    console.log("Donneés Supprimées: ");
    this.productServer.productDELETE(id)
    .subscribe(res => {
        this.products = res;
        this.productGET();
      });
  }
}
