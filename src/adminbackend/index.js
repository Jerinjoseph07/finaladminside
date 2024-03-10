const express=require("express")
const app=new express();
const cors=require("cors")


const multer = require('multer');

const data2model=require("./adminlog");
const Workermodel = require("./WorkerReg");
const Clientmodel = require("./ClientReg");

const storage = multer.memoryStorage(); // Store images in memory
const upload = multer({ storage: storage })
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());




app.get('/', (request,response) => {
    response.send("hai")
})
app.get('/view', async (request, response) => {
    var data = await Workermodel.find();
    // console.log(data)
    response.send(data)
})

    app.get('/cview', async (request, response) => {
        var data = await Clientmodel.find();
        // console.log(data)
        response.send(data)
    })



app.put('/edit/:id',async (request, response) => {
    let id = request.params.id;
    await Workermodel.findByIdAndUpdate(id,request.body)
    response.send("Data updated")

})

app.delete('/removeworker/:id',async(request,response)=>{
    let id = request.params.id
    await Workermodel.findByIdAndDelete(id)
    response.send("Record deleted")
    })
    



app.post('/adminlog',async(request,response)=>{
    const {username,password}=request.body;
    try{ const user=await data2model.findOne({username,password});
    if(user)
    {response.json({success: true,message:'Login Successfully'});}
    else
    {response.json({success: false,message:'Invalid Username and email'});}
    }
    catch(error)
    {
    response.status(500).json({sucess: false,message:'Error'})
    }
    })
    // app.listen(3005,(request,response)=>{
    // console.log("Port ok")
    // })
    

    app.put('/edit/:id',async (request, response) => {
        let id = request.params.id;
        await Workermodel.findByIdAndUpdate(id,request.body)
        response.send("Data updated")
    
    })
    
    app.delete('/removeworker/:id',async(request,response)=>{
        let id = request.params.id
        await Workermodel.findByIdAndDelete(id)
        response.send("Record deleted")
        })
        




app.listen(3005, (request, response) => {
    console.log("port is running 3005")
})