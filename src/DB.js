const sqlite3 = require('sqlite3');

module.exports = {
    createDB() {

        var db = new sqlite3.Database('./example.db');

        db.serialize(function() {
            db.run("CREATE TABLE IF NOT EXISTS Cliente (id INTEGER PRIMARY KEY, cpf TEXT, nascimento TEXT, UF TEXT)");
        
            db.run("CREATE TABLE IF NOT EXISTS Emprestimos (id INTEGER PRIMARY KEY, cpf_fgkey TEXT, nascimento TEXT, UF TEXT)");
            
            db.run("CREATE TABLE IF NOT EXISTS Parcelas (id INTEGER PRIMARY KEY, cpf_fgkey TEXT, nascimento TEXT, UF TEXT)");


            db.run("INSERT INTO Cliente (cpf, nascimento, UF) VALUES ('08241094574', '22/07/2022', 'MG')");

           
            db.each("SELECT id, cpf, uf FROM Cliente", function(err, row) {
              console.log(row.id + ": " + row.cpf);
            });
           });
           
        db.close();
    },
}