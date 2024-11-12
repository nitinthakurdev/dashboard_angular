import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BannerSchema } from '../../constants/schemas';

@Component({
  selector: 'app-banner-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './banner-modal.component.html',
  styles: ``
})
export class BannerModalComponent implements OnInit {
  @Output() handleModal = new EventEmitter<boolean>()
  @Output() createBanner = new EventEmitter<BannerSchema>()
  @Output() UpdateBanner = new EventEmitter<{id:string,data:BannerSchema}>()
  @Input() Updateabledata:any


  changeModal(x:boolean){
    this.handleModal.emit(x)
  }

  Banner:FormGroup = new FormGroup({
    image: new FormControl("",[Validators.required]),
    alt: new FormControl("",[Validators.required]),
    redirectUrl: new FormControl("",[Validators.required]),
    bannerdeadline: new FormControl("",[Validators.required]),
  })


  CreateBanner() {
    if(this.Updateabledata){
      const data = {id:this.Updateabledata.id,data:this.Banner.value}
      this.UpdateBanner.emit(data)
    }else{
      this.createBanner.emit(this.Banner.value)
    }
  }

  ngOnInit(): void {
    if(this.Updateabledata){
      this.Banner.setValue({ image: this.Updateabledata.image, alt: this.Updateabledata.alt, redirectUrl: this.Updateabledata.redirectUrl, bannerdeadline:this.Updateabledata.bannerdeadline })
    }
  }


}
