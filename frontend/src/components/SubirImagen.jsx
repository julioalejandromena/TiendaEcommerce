import React, {useState, useEffect} from "react";
import Axios from "axios";  


function SubirImagen(){
  
  const [image, setImage] = useState([]);
   const [upload, setUpload] = useState(null);
   const [recargar, setRecargar] = useState(false)
 
   useEffect(() => {
 
     Axios.get("http://localhost:3001/api/select")
       .then(datos => {
         console.log(datos.data)
         setImage(datos.data)
       })
 
     setRecargar(false)
   }, [recargar]);
 
   const selectionImagen = (e) => {
     setUpload(e.target.files[0])
   }
 
   const sendHandler = (e) => {
     e.preventDefault()
 
     if (!upload) {
       alert("debes escojer una imagen!")
       return
     }
 
     const formdata = new FormData()
     formdata.append("image", upload)
 
     Axios.post("http://localhost:3001/api/insert", formdata, {
       Headers: { "Content-Type": "multipart/form-data" }
     })
     setRecargar(true)
     setUpload(null);
     document.getElementById("fileInput").value = null;
   }

   return (
    <>
      <div className="App">

        <form>
          <input id="fileInput" type="file" onChange={selectionImagen} name="sampleFile" />
          <button onClick={sendHandler}>Upload!</button>
        </form>
  </div>
  </>
  );
   }

   export default SubirImagen;