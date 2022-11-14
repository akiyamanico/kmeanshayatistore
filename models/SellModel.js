import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Selling = db.define('penjualan',{
    id_produk: DataTypes.STRING,
    JAN: DataTypes.DOUBLE,
    FEB: DataTypes.DOUBLE,
    MAR: DataTypes.DOUBLE,
    APR: DataTypes.DOUBLE,
    MEI: DataTypes.DOUBLE,
    JUN: DataTypes.DOUBLE,
    JUL: DataTypes.DOUBLE,
    AGUST: DataTypes.DOUBLE,
    SEPT: DataTypes.DOUBLE,
    OKT: DataTypes.DOUBLE,
    DES: DataTypes.DOUBLE,
    total: DataTypes.DOUBLE

},{
    freezeTableName: true
});
 
export default Selling;
 
