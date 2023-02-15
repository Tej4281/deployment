import { Component } from '@angular/core';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.css']
})
export class ECommerceComponent {

  data:any=[
    {
      'img':'/assets/images/invent man.png',
      'name':'Inventory Management',
      'text':'When it comes to inventory management in WordPress, you have got a lot of options. You can add products, edit products and their attributes, delete products—and even send notifications when your product inventory is running low.'
    },
    {
      'img':'/assets/images/invent dilie.png',
      'name':'Order Management',
      'text':'If you are a business owner, you know how important it is to keep your customers happy. Thats why we have made it easy for you to manage orders on your website. We Will help you create and fulfill orders..'
    },
    {
      'img':'/assets/images/invent user.png',
      'name':'User Management',
      'text':'WooCommerce has a powerful customer management system. You can now add new customers and assign them roles in your store, edit existing customers, delete them, place orders on behalf of existing customers.'
    },
    {
      'img':'/assets/images/invent coupns.png',
      'name':'Coupons and Discounts',
      'text':'When you are selling products, coupons and discounts are the best way to get a sale. And when you sell on WooCommerce, you can do that with ease. With a few clicks of your mouse, you can create coupons that are tailored to your brand, add them to your products, and even assign them category-wise (so they are applicable to items in specific categories)..'
    },

    {
      'img':'/assets/images/payment tax.png',
      'name':'Payments and Taxes',
      'text':'When you are selling products, coupons and discounts are the best way to get a sale. And when you sell on WooCommerce, you can do that with ease. With a few clicks of your mouse, you can create coupons that are tailored to your brand, add them to your products, and even assign them category-wise (so they are applicable to items in specific categories).'
    },

    {
      'img':'/assets/images/shoping cart.png',
      'name':'Shopping cart and Checkout',
      'text':'With WooCommerce, you can take care of your customers online shopping experience—from the products you have to sell, to the checkout process. The cart system lets you set up an account. You can even use our easy-to-use checkout system to collect payments and fulfill orders in just a few clicks. With WooCommerce, it i  s as easy as 1-2-3!'
    },

    {
      'img':'/assets/images/ratings.png',
      'name':'Ratings & Reviews',
      'text':'When you are selling products, coupons and discounts are the best way to get a sale. And when you sell on WooCommerce, you can do that with ease. With a few clicks of your mouse, you can create coupons that are tailored to your brand, add them to your products, and even assign them category-wise (so they are applicable to items in specific categories.'
    },

    {
      'img':'/assets/images/notification.png',
      'name':'Notifications',
      'text':'Notifications You can set up emails or popups to notify customers when they make a purchase on your WooCommerce site. Email notifications are the most common type of notification you’ll want to use with WooCommerce. You can also use SMS or Whatsapp notifications .'
    },

    {
      'img':'/assets/images/reports.png',
      'name':'Reports',
      'text':'WooCommerce offers an inbuilt report system to help you track and analyze your sales data. You can create different types of reports based on your needs. You can track the number of sales, average order value, average order size and many more..'
    },
  ]
}
