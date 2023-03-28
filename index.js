/*IMPORT DO PACOTE EXPRESS*/
const express = require('express');

/*INSTANCIA EXECUTAVEL DO EXPRESS*/
const app = express();

/*
testa de rota http
2 parametros
  1 - nome da rota
  2 - callback que executa a ação
*/
app.use(express.json());

/*habilita a aplicaçaão a trabalhar com dados*/
app.use(express.urlencoded({extended:true}))


//app.get('/testeGET', (req, res)=>{
//console.log('ROTA DE TESTE DE GET1!!');
//console.log('ROTA DE CONSOLE')
//    res.send('TALVEZ O MUNDO NÃO SEJA PEQUENO, E NEM SEJA A VIDA UM FATO CONSUMADO');
// });
// app.post('/testePOST', (req, res)=>{
//   res.send('deu certo post');
//  });
//  app.put('/testePUT', (req, res)=>{
//   res.send('deu certo PUT');
//   });
//  app.delete('/testeDELETE', (req, res)=>{
//   res.send('deu certo delet');
//  });
 

/*
CRIAÇÃO DO SERVIDOR HTTP:
PARAMETROS:
1 - PORTA LÓGICA
2 - CALLBACK: 
*/

app.listen(3000, ()=>{ 
    console.log('SERVIDOR RODANDO EM - http://localhost:3000'); 
});
