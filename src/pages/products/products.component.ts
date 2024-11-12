import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ProductModalComponent } from '../../components/product-modal/product-modal.component';
import { ProductService } from '../../services/product/product.service';
import { Category, ProductSchema } from '../../constants/schemas';
import { CategoryService } from '../../services/category/category.service';
import { ActivatedRoute, Router, RouterLink, RouterModule} from '@angular/router';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatIconModule, CommonModule, ProductModalComponent,RouterModule,RouterLink],
  templateUrl: './products.component.html',
  styles: [`
    
  `]
})
export class ProductsComponent implements OnInit {

  constructor(private productservice:ProductService,private categoryService:CategoryService,private route:ActivatedRoute,private router:Router){}

  data:any = [];
  Category:Category[] | [] = [];
  showModal:boolean = false;
  Animation:boolean = false;
  icons:boolean = false;
  indexValue:number | null  = null;
  showAnimation:boolean = false;
  EditableProduct:ProductSchema | null = null
  query:{page:number,limit:number} = {
    page:1,
    limit:5
  }
  paramdata:number = 1
  NewData:any = []

  

  changeModal(x:boolean){
    this.showModal = x
    this.EditableProduct = null
  }

  ngOnInit(): void {
    this.getProduct() 
    this.categoryService.GetCategory().subscribe({
      next: (data) => {
        this.Category = data
      },
      error: (err) => {
        console.log(err)
      }
    })

    this.router.navigate([], {
      queryParams: this.query,
      queryParamsHandling: 'merge'
    });
    
      this.route.queryParams.subscribe(params => {
        const page = parseInt(params['page']) || this.query.page  ;
        const limit = parseInt(params['limit']) ||this.query.limit ;
        this.paramdata =  page 
        this.query = { page, limit };
        this.updateDataSlice();
      });

    this.router.navigate([], {
      queryParams: this.query,
      queryParamsHandling: 'merge'
    });

    
  }

  private updateDataSlice(): void {
    const start = (this.query.page - 1) * this.query.limit;
    const end = start + this.query.limit;
    this.data = this.NewData.slice(start, end);
    
  }

  createProduct(data:ProductSchema){
    this.productservice.CreateProduct(data).subscribe({
      next:()=>{
        this.showModal = false
        this.getProduct()
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  getProduct(){
    this.productservice.GetProduct().subscribe({
      next:(data)=>{
        this.NewData = data
        const start = (this.query.page - 1) * this.query.limit;
        const end = start + this.query.limit;
        this.data = data.slice(start, end);
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  Handlecategory(id:string):Category{
   
    let filter  = this.Category.filter((item)=>item.id === id)[0]
    return filter ?? {name:"category name "}
  }

  HandleAnimation(){
    this.showAnimation = !this.showAnimation
    this.Animation = !this.Animation
    if(this.icons){
      this.icons = false
    }else{
      setTimeout(()=>{
        this.icons = !this.icons
      },300)
    }
  }

  HandleIndex(i:number){
    this.indexValue = i
  }

  DeleteProduct(id:string ){
    this.productservice.DeteleProduct(id).subscribe({
      next:()=>{
        this.getProduct()
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  UpdateStatus(id:string,status:boolean){
    this.productservice.updateProductStatus(id, { status }).subscribe({
      next: () => {
        this.getProduct()
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  UpdateProduct(e:{id:string,data:ProductSchema}){
    this.productservice.UpdateProduct(e.id,e.data).subscribe({
      next:()=>{
        this.getProduct()
        this.showModal = false
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  EditProduct(data:ProductSchema){
    this.EditableProduct = data;
    this.showModal = true;
  }

  

  HandleQueryPrev() {
    if (this.query.page > 1) {
      this.query.page--;
      this.router.navigate([], {
        queryParams: this.query,
        queryParamsHandling: 'merge' 
      });
    }
   
  }

  HandleQueryNext() {
    if(this.data.length === this.query.limit){
      this.query.page++;
      this.router.navigate([], {
        queryParams: this.query,
        queryParamsHandling: 'merge'
      });
    }

  }

  chnageLimit(e:Event){
    const {value} = e.target as HTMLSelectElement
    const limit = parseInt(value)
    this.query.limit = limit
    this.router.navigate([], {
      queryParams: this.query,
      queryParamsHandling: 'merge'
    });
  }

  HandleSearch (e:Event){
    const {value} = e.target as HTMLInputElement;
    const data = this.NewData.filter((item:ProductSchema)=>item.title.toLocaleLowerCase().includes(value.toLocaleLowerCase()) )
    const start = (this.query.page - 1) * this.query.limit;
    const end = start + this.query.limit;
    this.data = data.slice(start, end);
  }



}
