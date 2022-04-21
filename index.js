/*import*/

const express = require("express");
const repoContex= require("./repository/repository-wrapper");
 const validateSong=require("./middleware/song-validation.js")
 const songLogger=require("./middleware/songLogger");
const app=express();
/*Middleware*/

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
const PORT = process.env.PORT || 5005;
app.listen(PORT,() =>{
    console.log(`Server running on PORT:${PORT}`);
    });
//End Points
//http://localhost:5005 (BASE URL)

//GET All Songs
// http://localhost5005/api/Music



app.get("/api/Music/", (req,res) =>{
   const Music = repoContex.songs.findAllSongs()
return res.send(Music)
});

//GET all songs by id
//http:"//localhost5005/api/Music/:id"
app.get("/api/Music/:id",(req,res)=>{
    const id= req.params.id;
    const Songs= repoContex.songs.findSongById(id);
    return res.send(Songs);
});

//POST new Song
//http:"//localhost5005/api/Music
app.post("/api/Music/",[songLogger, validateSong ],(req,res) => {
const newSong= req.body;
const addedSong=repoContex.songs.createSong(newSong)
return res.status(403).send(addedSong);
});
//PUT an existing Song
//http:"//localhost5005/api/Music/
app.put("/api/Music/:id",(req,res)=>{
    const id= parseInt(req.params.id);
    const songPropertiesToModify=req.body;
    const songToUpdate=repoContex.songs.updateSong(id,songPropertiesToModify)
    return res.send(songToUpdate)
})
//Delete Song
//http:"//localhost5005/api/Music/
app.delete("/api/Music/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const deletedSongs=repoContex.songs.deleteSong(id);
    return res.send(deletedSongs);
})
//Song validation

/*Starting a Server*/

