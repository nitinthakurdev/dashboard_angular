import { Routes } from '@angular/router';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ProductsComponent } from '../pages/products/products.component';
import { InboxComponent } from '../pages/inbox/inbox.component';
import { TodoComponent } from '../pages/todo/todo.component';
import { CalenderComponent } from '../pages/calender/calender.component';
import { BannerComponent } from '../pages/banner/banner.component';
import { CategoryComponent } from '../pages/category/category.component';
import { CouponComponent } from '../pages/coupon/coupon.component';
import { ReturnComponent } from '../pages/return/return.component';
import { UserComponent } from '../pages/user/user.component';
import { OrderComponent } from '../pages/order/order.component';

export const routes: Routes = [
    {
        path:"",
        component: DashboardComponent
    },
    {
        path:"products",
        component: ProductsComponent
    },
    {
        path:"inbox",
        component: InboxComponent
    },
    {
        path:"to-do",
        component: TodoComponent
    },
    {
        path:"calender",
        component: CalenderComponent
    },
    {
        path:"banners",
        component: BannerComponent
    },
    {
        path:"categories",
        component: CategoryComponent
    },
    {
        path:"coupons",
        component: CouponComponent
    },
    {
        path:"return-order",
        component: ReturnComponent
    },
    {
        path:"users",
        component: UserComponent
    },
    {
        path:"order-list",
        component: OrderComponent
    },
    
];
