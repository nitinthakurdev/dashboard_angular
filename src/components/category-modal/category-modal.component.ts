import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Category, InnerCategory, SubCategory } from '../../constants/schemas';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-modal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './category-modal.component.html',
  styles: ``
})
export class CategoryModalComponent implements OnInit {
  @Output() handleModal = new EventEmitter<boolean>()
  @Output() createCategory = new EventEmitter<Category>()
  @Input() changecategory: number | null | undefined;
  @Input() categoryData: any | [];
  @Input() UpdatecategoryData: any;
  @Input() SubCategory:any;
  @Output() UpdateCategory = new EventEmitter<{id:string,data:Category}>()
  @Output() CreateSubCategory = new EventEmitter<SubCategory>()
  @Output() UpdateSubCategory = new EventEmitter<{id:string,data:SubCategory}>()
  @Output() createInnerCategory = new EventEmitter<InnerCategory>()
  @Output() UpdateInnerCategory = new EventEmitter<{id:string,data:InnerCategory}>()


  category: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required]),
    image: new FormControl("", [Validators.required]),
    isActive: new FormControl(null, [Validators.required])
  })

  subCategory:FormGroup = new FormGroup({
    categoryId: new FormControl("", [Validators.required]),
    name: new FormControl("", [Validators.required]),
    isActive: new FormControl("")
  })

  InnerCategory:FormGroup = new FormGroup({
    categoryId:new FormControl("",[Validators.required]),
    subCategoryId:new FormControl("",[Validators.required]),
    name:new FormControl("",[Validators.required]),
    isActive:new FormControl(""),
  })

  OptionCategory: any | [] = []
  OptionSubCategory:any = []

  handleChnageModal(x: boolean) {
    this.handleModal.emit(x)
  }

  CreateCategory() {
    
      let data = this.category.value
      if (this.UpdatecategoryData) {
        data = { ...data, isActive: Boolean(data.isActive) }
        const newData = { id: this.UpdatecategoryData.id, data: data }
        this.UpdateCategory.emit(newData)
      } else {
        data = { ...data, isActive: Boolean(data.isActive) }
        this.createCategory.emit(data)
      }
  }

  createSubCategory(){
    let data = this.subCategory.value
    if(this.UpdatecategoryData){
      data = { ...data, isActive: Boolean(data.isActive) }
      let newdata = { id: this.UpdatecategoryData.id, data: data }
      this.UpdateSubCategory.emit(newdata)
    }else{
      data = { ...data, isActive: Boolean(data.isActive) }
      this.CreateSubCategory.emit(data)
    }
  
  }

  CreateInnerCategory(){
    let data = this.InnerCategory.value
    if(this.UpdatecategoryData){
      data = { ...data, isActive: Boolean(data.isActive) }
      const newData = { id: this.UpdatecategoryData.id,data:data}
      this.UpdateInnerCategory.emit(newData)
    }else{
      data = {...data,isActive:Boolean(data.isActive)}
      this.createInnerCategory.emit(data)
    }
  }

  ngOnInit(): void {
    this.categoryda()
    if(this.changecategory === 1 || this.changecategory === undefined || this.changecategory === null){
      if(this.UpdatecategoryData){
        this.category.setValue({ name: this.UpdatecategoryData.name, image: this.UpdatecategoryData.image, isActive: this.UpdatecategoryData.isActive, })
      }
    }else if(this.changecategory === 2){
      if(this.UpdatecategoryData){
        this.subCategory.setValue({categoryId:this.UpdatecategoryData.categoryId, name:this.UpdatecategoryData.name,isActive:this.UpdatecategoryData.isActive})
      }
    }else{
      if(this.UpdatecategoryData){
        const filter = this.SubCategory.filter((item: any) => item.categoryId === this.UpdatecategoryData.categoryId)
        this.OptionSubCategory = filter
        this.InnerCategory.setValue({
          categoryId: this.UpdatecategoryData.categoryId,
          subCategoryId: this.UpdatecategoryData.subCategoryId,
          name: this.UpdatecategoryData.name,
          isActive: this.UpdatecategoryData.isActive,
})
      }
    }
  }

  categoryda() {
    this.OptionCategory = this.categoryData
  }

  handleData(e:Event){
    let {value} = e.target as HTMLSelectElement
    const filter = this.SubCategory.filter((item: any) => item.categoryId === value)
    this.OptionSubCategory = filter
  }


}
