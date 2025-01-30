import { app } from "./App.js";
import dotenv from "dotenv"
dotenv.config({});
import { connectDB } from "./db/connection.js";
import taskRoutes from './routes/taskRoutes.js'; 
import { coreConnect } from "./db/coredbconnection.js";

// coreConnect()
// .then(()=>{
//         app.listen(process.env.PORT || 3000);
//         console.log("Server Listenig on port :",process.env.PORT || 3000);

//         app.on('error', ()=>{
//             console.log("Error occured on app.listen ! ");
//             throw error
//         })
// })
// .catch((error) => {
//     console.log("Error Occured while starting the server : ",error);
// })
// .finally(() => {
//     console.log("Server Started Sucessfully");
    
// })


// ;(() => {
//     try {
//         app.listen(process.env.PORT || 5000 , () => {
//             console.log("Server Listening on PORT ", process.env.PORT || 5000 );
//             app.on('error', (err) => {
//                 console.log("Error in listeingn",err);
                
//             })
//         })
//     } catch (error) {
//         console.log("Error Occured in Listening the server ", error);
        
//     }
// })();


const startServer = () => {
    try {
        app.listen(process.env.PORT || 5000, ()=> {
            console.log("Server Listening on PORT", process.env.PORT || 5000);
        })

        app.on('error',(err) => {
            console.log(err);
        })


    } catch (error) {
        console.log("Error OCcured",error);
        
    }
}




startServer();