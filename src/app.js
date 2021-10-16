const express = require("express");
const cors = require("cors");

const { v4: uuid, validate: isUuid } = require('uuid');
//const { v4: uuidv4 } = require('uuid');
const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  //
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
   const {title , url , techs} = request.body;
   const likes =0;
   const repository ={
    id : uuid() , title , url ,techs  ,likes
   };
  //  console.log(` Recebi os parametro titulo como :${title}`);
  //  console.log(` Recebi os parametro url como :${url}`)
  //  console.log(` Recebi os parametro techs como :${techs}`)
    repositories.push(repository);
    return response.json(repositories);
  });

app.put("/repositories/:id", (request, response) => {
   const { id } = request.params;
   console.log(id);
   console.log(repositories);
   const resultado = repositories.find(i=>i.id === id);
   console.log(`Resultado = ${resultado} `);
   console.log(repositories.findIndex (x=>x.id === id));
   const indiceRepo = repositories.findIndex (x=>x.id === id) ;
   if(indiceRepo < 0)
   {
      return response.status(400).json({error :"Repository not Found"});
   }
    const { title , url,techs } = request.body;
    
    const newRepository ={
        "title" : title ,
        "url" : url,
        "techs":techs
    }

    repositories[indiceRepo]=  newRepository;

  
     

   return response.json(repositories);

});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const indiceRepo = repositories.findIndex (x=>x.id === id) ;
   if(indiceRepo < 0)
   {
      return response.status(400).json({error :"Repository not Found"});
   }
   repositories.splice(indiceRepo);
   return response.json(repositories);

});

app.post("/repositories/:id/like", (request, response) => {
    const { id } = request.params;
    const indiceRepo = repositories.findIndex (x=>x.id === id) ;
    if(indiceRepo < 0)
    {
       return response.status(400).json({error :"Repository not Found"});
    }
    const testeLike =  repositories[indiceRepo].likes;
    repositories[indiceRepo].likes +=1 ;
    return response.json({ likes:testeLike});
    


});

module.exports = app;
