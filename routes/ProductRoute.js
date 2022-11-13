import express from "express";
import {
    getProducts,
    getProductById,
    saveProduct,
    updateProduct,
    deleteProduct
} from "../controllers/ProductController.js";
 
const routerproduct = express.Router();
 
routerproduct.get('/produk', getProducts);
routerproduct.get('/produk/:id', getProductById);
// router.post('/products', saveProduct);
// router.patch('/products/:id', updateProduct);
// router.delete('/products/:id', deleteProduct);
 
export default routerproduct;