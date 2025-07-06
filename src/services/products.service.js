import * as productModel from '../models/product.model.js';

export async function fetchAllProducts() {
  return await productModel.getAllProducts();
}

export async function fetchProductById(id) {
  return await productModel.getProductById(id);
}

export async function addNewProduct(productData) {
  return await productModel.createProduct(productData);
}

export async function removeProduct(id) {
  return await productModel.deleteProduct(id);
}
