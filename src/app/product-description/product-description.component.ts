import { Component, OnInit } from "@angular/core";
import { Album } from "../album";
import { ProductService } from "../product.service";

export class ProductDescriptionComponent implements OnInit {
  albumInfo: Album;

  constructor(private _productService: ProductService) {}

  ngOnInit() {
    this._productService
      .getAlbum(1)
      .subscribe(response => this.albumInfo = response);
  }
}
