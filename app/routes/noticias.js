//var dbConnection = require('../../config/dbConnection');
module.exports = function(app){

   app.get('/noticias', function(req, res){    
      var connection = app.config.dbConnection();  
      var sql = "SELECT * FROM noticias";
      connection.query(sql, function(error, result){
         res.render("noticias/noticias", {noticias: result});         
      });
   });
  
}