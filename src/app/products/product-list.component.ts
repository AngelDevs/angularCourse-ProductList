import { Component, OnInit } from '@angular/core';
import products, { Product } from 'src/api/products/products';
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  private _filterValue = 'cart';

  showImage = true;

  pageTitle = 'Product List';

  products = products;
  filteredProducts: Product[] = products;

  get filterValue(): string {
    return this._filterValue;
  }

  set filterValue(value: string) {
    this._filterValue = value;
    this.filteredProducts = this.filterProductsByName();
  }

  ngOnInit(): void {
    this._filterValue = 'cart';
  }

  toggleImageVisibility(): void {
    this.showImage = !this.showImage;
  }

  filterProductsByName(): Product[] {
    return this.products.filter((product: Product) =>
      product.productName
        .toLocaleLowerCase()
        .includes(this._filterValue.toLocaleLowerCase())
    );
  }

  onRatingClicked(value: string) {
    alert(value);
  }
}
