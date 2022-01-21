const express = require("express")
const mysql = require("mysql")
const cors = require("cors")
const path = require("path")
const fs = require("fs")
const multer = require("multer")

const app = express();

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "imagenes"
})

const port = process.env.PORT || 3001

app.use(cors())

app.use(express.json())
app.use(express.static(path.join(__dirname, 'dbimages')))


app.get("/api/select", async (req, res) => {

    const  sql = "SELECT * FROM image"

    await con.query(sql, (err, result) => {
        result.map((img) =>{
            
            fs.writeFileSync(path.join(__dirname, './dbimages/' + img.Id + '-julio.jpg-' + img.nombre_imagen), img.dato);
    
        })

        const imageDir = fs.readdirSync(path.join(__dirname, "./dbimages/"))
        res.json({imageDir, result})      
        
    })
})


const diskstorage = multer.diskStorage({
    destination : path.join(__dirname, "./images"),
    filename : (req, file, cb) =>
    {
        cb(null, Date.now() + "-julio-" + file.originalname)
    }
})

const fileUpload = multer({
    storage : diskstorage
}).single('image')

app.post("/api/insert", fileUpload, (req, res) => {
    

    if (!req.file || Object.keys(req.file).length === 0) {
        return res.status(400).send("No files were uploaded.");
    }

    const name = req.file.originalname
    const data = fs.readFileSync(path.join(__dirname, './images/'+ req.file.filename))
    
    const sqlInsert = "INSERT INTO image set ?";

    con.query(sqlInsert, [{nombre_imagen : name, dato : data}], (err, result) => {
        if (err) throw err
        console.log("inserted!");
    })

}) // fin del end point post

app.get("/api/getUsuario", (req, res)=>{
    const select_usuario = "select email, password from usuario";

    con.query(select_usuario, (err, result)=>{
        if(err) throw err
        console.log(result);
        res.json(result)
    })
})

app.listen(port, () => {
    console.log(`The app is listening at https://localhost:${port}`)
})