import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Product = db.define('produk',{
     
    nama: DataTypes.STRING,
    id_kategori: DataTypes.STRING,
    stok: DataTypes.DOUBLE,
    harga: DataTypes.DOUBLE
},{
    freezeTableName: true
});
 
export default Product;
 
(async()=>{
    await db.sync();
})();