import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';
import { SubCategoryService } from '../../services/Sub-category/sub-category.service';
import { InnerCategoryService } from '../../services/inner-category/inner-category.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductSchema } from '../../constants/schemas';

@Component({
  selector: 'app-product-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-modal.component.html',
  styles: ``
})
export class ProductModalComponent implements OnInit {
  @Output() changeModal = new EventEmitter<boolean>()
  @Output() createProduct = new EventEmitter<ProductSchema>()
  @Output() UpdateProduct = new EventEmitter<{ id: string, data: ProductSchema }>()
  @Input() EditableProduct: any;

  constructor(private categoryService: CategoryService, private subCategoryService: SubCategoryService, private innerCategoryService: InnerCategoryService) { }

  category: any = []
  subCategory: any = []
  innerCategory: any = []

  Product: FormGroup = new FormGroup({
    title: new FormControl("", [Validators.required]),
    image: new FormControl("", [Validators.required]),
    productId: new FormControl("", [Validators.required,Validators.minLength(7)]),
    brand: new FormControl("", [Validators.required]),
    qty: new FormControl("", [Validators.required]),
    status: new FormControl(""),
    price: new FormControl("", [Validators.required]),
    type: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
    category: new FormControl("", [Validators.required]),
    subCategory: new FormControl("", [Validators.required]),
    innerCategory: new FormControl("", [Validators.required]),
  })


  HandleModal(x: boolean) {
    this.changeModal.emit(x)
  }
  ngOnInit(): void {
    this.categoryService.GetCategory().subscribe({
      next: (data) => {
        this.category = data
      },
      error: (err) => {
        console.log(err)
      }
    })
    if (this.EditableProduct) {
      this.Product.setValue({
        title: this.EditableProduct.title,
        image: this.EditableProduct.image,
        productId: this.EditableProduct.productId,
        brand: this.EditableProduct.brand,
        qty: this.EditableProduct.qty,
        status: this.EditableProduct.status,
        price: this.EditableProduct.price,
        type: this.EditableProduct.type,
        description: this.EditableProduct.description,
        category: this.EditableProduct.category,
        subCategory: this.EditableProduct.subCategory,
        innerCategory: this.EditableProduct.innerCategory,
      })
      this.OptionCategory(this.EditableProduct.category,this.EditableProduct.subCategory)
    }
  }

  SubCategoryChange(e: Event ) {
    const { value } = e.target as HTMLSelectElement
    this.subCategoryService.GetSubCategory().subscribe({
      next: (data) => {
        const filter = data.filter((item: any) => item.categoryId === value)
        this.subCategory = filter
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  InnerCategoryChange(e: Event) {
    const { value } = e.target as HTMLSelectElement
    this.innerCategoryService.GetInnerCategory().subscribe({
      next: (data) => {
        const filter = data.filter((item: any) => item.subCategoryId === value)
        this.innerCategory = filter
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  CreateProduct() {
    if(this.EditableProduct){
      let data = this.Product.value
      data = { ...data, status: Boolean(data.status) }
      data = {id:this.EditableProduct.id,data:data}
      this.UpdateProduct.emit(data)
    }else{
      let data = this.Product.value
      data = { ...data, status: Boolean(data.status) }
      this.createProduct.emit(data)
    }
    
  }

  OptionCategory(category:string,subCategory:string){

    this.subCategoryService.GetSubCategory().subscribe({
      next:(data)=>{
        const filter = data.filter((item: any) => item.categoryId === category)
        this.subCategory = filter
      },
      error:(err)=>{
        console.log(err)
      }
    })

    this.innerCategoryService.GetInnerCategory().subscribe({
      next:(data)=>{
        const filter = data.filter((item: any) => item.subCategoryId === subCategory)
        this.innerCategory = filter
      },
      error:(err)=>{
        console.log(err)
      }
    })

  }

}
