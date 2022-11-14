import express from "express";
import {
    getSell,
    getSellById,
    // saveProduct,
    // updateProduct,
    // deleteProduct
} from "../controllers/SellingController.js";
 
const routersell = express.Router();
 
routersell.get('/penjualan', getSell);
routersell.get('/penjualan/:id', getSellById);
// router.post('/products', saveProduct);
// router.patch('/products/:id', updateProduct);
// router.delete('/products/:id', deleteProduct);
 
export default routersell;