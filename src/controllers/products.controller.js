import * as productService from '../services/products.service.js';

export async function getAllProducts(req, res) {
  try {
    const products = await productService.fetchAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
}

export async function getProductById(req, res) {
  try {
    const product = await productService.fetchProductById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener producto' });
  }
}

export async function createProduct(req, res) {
  try {
    const newProduct = await productService.addNewProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear producto' });
  }
}

export async function deleteProduct(req, res) {
  try {
    await productService.removeProduct(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar producto' });
  }
}
