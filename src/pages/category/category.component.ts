import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CategoryModalComponent } from '../../components/category-modal/category-modal.component';
import { CategoryService } from '../../services/category/category.service';
import { Category, InnerCategory, SubCategory } from '../../constants/schemas';
import { SubCategoryService } from '../../services/Sub-category/sub-category.service';
import { InnerCategoryService } from '../../services/inner-category/inner-category.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, MatIconModule, CategoryModalComponent],
  templateUrl: './category.component.html',
  styles: ``
})
export class CategoryComponent implements OnInit {

  showModal: boolean = false;
  val: number | undefined | null = 1;
  category: any = [];
  subCategory: any = [];
  innerCategory: any = [];
  updateData: Category | null = null;
  Categorydata:{category:Category[]| [],subCategory:SubCategory[] | [],innerCategory:InnerCategory[] | []} = {category:[],subCategory:[],innerCategory:[]}
  constructor(private categoryService: CategoryService, private subCategoryService: SubCategoryService, private innerCategoryService: InnerCategoryService) { }

  changeval(x: number) {
    this.val = x
  }

  handleModal(x: boolean) {
    this.showModal = x
    this.updateData = null
  }

  ngOnInit(): void {
    this.GetCategory()
    this.GetSubCategory()
    this.GetInnerCategory()
  }

  createcategory(data: Category) {
    this.categoryService.addCategory(data).subscribe({
      next: (da) => {
        console.log(da);
        this.showModal = false
        this.GetCategory()
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  GetCategory() {
    this.categoryService.GetCategory().subscribe({
      next: (data) => {
        this.category = data
        this.Categorydata.category = data
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  deletCategory(id: string) {
    this.categoryService.Deletecategory(id).subscribe({
      next: (data) => {
        this.GetCategory()
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  UpdateCategory(e: { id: string, data: Category }) {
    this.categoryService.UpdateCategory(e.id, e.data).subscribe({
      next: (data) => {
        this.GetCategory()
        this.showModal = false
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  edittask(item: any) {
      this.updateData = item
      this.showModal = true
  }

  CreateSubCategory(data: SubCategory) {
    this.subCategoryService.CreateSubCategory(data).subscribe({
      next: (da) => {
        console.log(da)
        this.showModal = false
        this.GetSubCategory()
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  GetSubCategory() {
    this.subCategoryService.GetSubCategory().subscribe({
      next: (data) => {
        this.subCategory = data
        this.Categorydata.subCategory = data
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  HandleSubcategory(id: string): Category {
    const filter = this.category.filter((item: any) => item.id === id)[0]
    return filter ?? { image: "", name: "" }
  }

  DeletSubCategory(id: string) {
    this.subCategoryService.DeteleSubCategory(id).subscribe({
      next: (data) => {
        this.GetSubCategory()
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  UpdateSubCategory(e: { id: string, data: SubCategory }) {
    this.subCategoryService.UpdateSubCategory(e.id, e.data).subscribe({
      next: (data) => {
        this.showModal = false
        this.GetSubCategory()
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  CreateInnerCategory(data: InnerCategory) {
    this.innerCategoryService.CreateInnercategory(data).subscribe({
      next: (data) => {
        this.showModal = false
        this.GetInnerCategory()
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  GetInnerCategory() {
    this.innerCategoryService.GetInnerCategory().subscribe({
      next: (data) => {
        this.innerCategory = data
        this.Categorydata.innerCategory = data
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  HandleInnerCategory(categoryId: string, subCategoryId: string) {
    let filter = this.category.filter((item: any) => item.id === categoryId).map((item: Category) => ({ categoryName: item.name, image: item.image }))[0]
    filter = this.subCategory.filter((item: any) => item.id === subCategoryId).map((item: SubCategory) => ({ ...filter, subCategory: item.name }))[0]
    return filter ?? { categoryName: "", image: "", subCategory: "" }
  }

  DeleteinnerCategory(id:string){
    this.innerCategoryService.DeleteInnerCategory(id).subscribe({
      next:(da)=>{
        this.GetInnerCategory()
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  UpdateInnerCategory(e: { id: string, data: InnerCategory }) {
    this.innerCategoryService.UpdateInnercategory(e.id, e.data).subscribe({
      next: (data) => {
        this.showModal = false
        this.GetInnerCategory()
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  HandleSearch(e:Event){
    const {value} = e.target as HTMLInputElement
    if(this.val === 1||this.val === undefined || this.val === null  ){
      const data  = this.Categorydata.category.filter((item:Category)=>item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
      this.category = data
    }else if(this.val === 2){
      const data = this.Categorydata.subCategory.filter((item: SubCategory) => item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
      this.subCategory = data
    }else{
      const data = this.Categorydata.innerCategory.filter((item: InnerCategory) => item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
      this.innerCategory = data
    }
  }



}
