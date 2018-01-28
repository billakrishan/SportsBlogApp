const mongoose=require('mongoose');

//category schema
const categorySchema=mongoose.Schema({
  title:{
    type:String
  },
  description:{
    type:String
  }
});
const Category = module.exports=mongoose.model('Category',categorySchema);


//Get Categories
module.exports.getCategories=function(callback,limit){
  Category.find(callback).limit(limit).sort([['title','ascending']]);
}

//Add Cagtegory
module.exports.addCategory=function(category,callback){
Category.create(category,callback);
}

//get Single Category by ID
module.exports.getCategoryById= function(id,callback){
  Category.findById(id,callback);
}

//update category
module.exports.updateCategory= function(query,update,options,callback){
Category.findOneAndUpdate(query,update,options,callback);
}

//remove category
module.exports.removeCategory= function(query,callback){
Category.remove(query,callback);
}
