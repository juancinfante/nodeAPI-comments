let comentarios = [
    {
      id: 1,
      nombreUsuario: "usuario1",
      comentario: "¡Excelente trabajo!",
      fecha: "2023-06-28"
    },
    {
      id: 2,
      nombreUsuario: "usuario2",
      comentario: "No puedo creer lo increíble que es esto.",
      fecha: "2023-06-30"
    },
    {
      id: 3,
      nombreUsuario: "usuario3",
      comentario: "Me encanta, ¡quiero más!",
      fecha: "2023-06-29"
    },
    {
      id: 4,
      nombreUsuario: "usuario4",
      comentario: "Fascinante. No puedo dejar de mirarlo.",
      fecha: "2023-06-27"
    },
    {
      id: 5,
      nombreUsuario: "usuario5",
      comentario: "¿Cómo lo hacen? Es impresionante.",
      fecha: "2023-06-26"
    },
    {
      id: 6,
      nombreUsuario: "usuario6",
      comentario: "Increíble trabajo. Me dejaste sin palabras.",
      fecha: "2023-06-25"
    },
    {
      id: 7,
      nombreUsuario: "usuario7",
      comentario: "Esto supera todas mis expectativas. Bravo.",
      fecha: "2023-06-24"
    },
    {
      id: 8,
      nombreUsuario: "usuario8",
      comentario: "No puedo parar de aplaudir. Bravo, bravo.",
      fecha: "2023-06-23"
    },
    {
      id: 9,
      nombreUsuario: "usuario9",
      comentario: "¡Qué experiencia tan maravillosa! Sin palabras.",
      fecha: "2023-06-22"
    },
    {
      id: 10,
      nombreUsuario: "usuario10",
      comentario: "Simplemente asombroso. No tengo palabras.",
      fecha: "2023-06-21"
    }
  ];


const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors)
  
app.listen(5000,()=>{
    console.log("Servidor corriendo en puerto: 5000")
})


// ERROR 404

// const logger = ((req,res,next) =>{
//   console.log(req.method)
//   console.log(req.path)
//   console.log(req.body)
//   next()
// })
// app.use(logger)

// app.use((req,res) =>{
//   res.status(404).json({
//     error: 'Not Found'
//   })
// })

app.get('/', (req,res)  =>{
    res.send('<h1>HOME</h1>')
})

app.get('/api/comentarios', (req,res)  =>{
    res.json(comentarios)
})

app.get('/api/comentarios/:id', (req,res)  =>{
    const id = Number(req.params.id)
    const comment = comentarios.find(com => com.id === id)
    if(comment){
        res.json(comment)
    }else{
        res.status(404).end()
    }
})

app.delete('/api/comentarios/:id', (req, res) =>{
    const id = Number(req.params.id)
    comentarios = comentarios.filter(com => com.id !== id)
    res.status(204).end()
})