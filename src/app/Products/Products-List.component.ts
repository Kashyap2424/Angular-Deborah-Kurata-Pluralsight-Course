import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { IProduct } from "./Product";
import { ProductService } from "./Product.service";

@Component({
  selector: "pm-products",
  templateUrl: "./Products-List.component.html",
  styleUrls: ["./Products-List.component.css"],
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle: string = "Product List";

  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  private _listFilter: string = "";
  errorMeassage: string = "";
  sub!: Subscription;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log("In set listFilter", value);

    this.filteredProducts = this.performFilter(this.listFilter);
  }

  filteredProducts: IProduct[] = [];

  products: IProduct[] = [];

  constructor(private productService: ProductService) {}

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProducts = this.products;
      }, // next
      error: (err) => (this.errorMeassage = err),
      complete: () => console.log("completed"),
    });
    this.filteredProducts = this.products;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onRatingClicked(message: string): void {
    this.pageTitle = "Product List: " + message;
  }
}
