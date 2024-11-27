 const con = require ('../connect/database')

 const create = (req, res) => {
    let nome = req.body.nome;
    let pagamento = req.body.pagamento;

    let query = 'INSERT INTO cliente (nome,pagamento)VALUES'
    query += `('${nome}','${pagamento}')`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
 }


 const read = (req,res) => {
    con.query('SELECT * FROM cliente', (err, result) =>{
        if (err){
            res.status(500).json(err)
        }else{
            res.status(201).json(result)
        }
    })
}


 const update = (req, res) => {
    let id = Number(req.params.id);
    let nome = req.body.nome;
    let pagamento = req.body.pagamento;

    const query = `UPDATE cliente SET nome = '${nome}', pagamento ='${pagamento}' WHERE  idCli = ${id} `;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
             res.status(201).json(result)
         }
    })
}

const deletar = (req, res) => {
    const id = Number(req.params.id)
    const query = `DELETE FROM cliente WHERE  idCli = ?`
    con.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
             res.status(201).json(result)
         }
    })
}


module.exports = {
    create,
    read,
    update,
    deletar
}
