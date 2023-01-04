// import db
const db  = require('./db')

//   get all products from database
const getAllproducts = () =>{
    //to fetch all products from mongodb
  return  db.Product.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode : 200,
                    Products : result
                }
            }else{
                return{
                    status : false,
                    statusCode : 402,
                    message :  'Product Not Found'
                }
            }

    }
    )
}

module.exports={
    getAllproducts
}