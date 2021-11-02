const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(()=>console.log("connexion a la base reussie"))
.catch((err)=>console.log(err))