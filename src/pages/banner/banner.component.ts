import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BannerModalComponent } from '../../components/banner-modal/banner-modal.component';
import { BannerService } from '../../services/banner/banner.service';
import { BannerSchema } from '../../constants/schemas';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [MatIconModule, BannerModalComponent,CommonModule],
  templateUrl: './banner.component.html',
  styles: ``
})
export class BannerComponent implements OnInit {

  ShowModal: boolean = false;
  BannerData:any= [] ;
  Updateabledata:BannerSchema | null = null;

  constructor(private bannerService:BannerService){};

  handleModal(x: boolean) {
    this.ShowModal = x;
    this.Updateabledata = null
  };

  createBanner(data:BannerSchema){
    this.bannerService.CreateBanner(data).subscribe({
      next:()=>{
        this.ShowModal = false
        this.GetBanner()
      },
      error:(err)=>{
        console.log(err)
      }
    })
  };

  GetBanner(){
    this.bannerService.GetBanner().subscribe({
      next: (data) => {
       this.BannerData = data
      },
      error: (err) => {
        console.log(err)
      }
    })
  };

  ngOnInit(): void {
    this.GetBanner()
  };

  DeleteBanner(id:string){
    this.bannerService.DeleteBanner(id).subscribe({
      next: (data) => {
        this.GetBanner()
      },
      error: (err) => {
        console.log(err)
      }
    })
  };

  EditBanner(item:BannerSchema){
    this.ShowModal = true;
    this.Updateabledata = item
  }


  UpdateBanner(e:{id:string,data:BannerSchema}){
    this.bannerService.UpdateBanner(e.id,e.data).subscribe({
      next: (data) => {
        this.ShowModal = false
        this.GetBanner()
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  
}
