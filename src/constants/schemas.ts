export interface User {
    id?: string
    title: string,
    Description: string,
    date: string,
    status:string
}


export interface Category {
    id?: string
    name:string,
    image:string,
    isActive:boolean
}

export interface SubCategory {
    id?: string
    categoryId:string,
    name:string,
    isActive:boolean
}

export interface InnerCategory {
    id?: string
    categoryId: string,
    subCategoryId: string,
    name: string,
    isActive: boolean,
}
export interface ProductSchema{
    id?:string
    title: string,
    image: string,
    productId: string,
    brand: string,
    qty: string,
    status: boolean,
    price: number,
    type: string,
    description: string,
    category: string,
    subCategory: string,
    innerCategory: string,
}

export interface BannerSchema {
    id?:string,
    image:string,
    alt:string,
    redirectUrl:string,
    bannerdeadline:string
}