import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";
import { app, server } from "./lib/socket.js";



// const app = express();
const __dirname = path.resolve();




// make ready for deployment
if(ENV.NODE_ENV=== "production"){
    app.use(express.static(path.join(__dirname, "../../frontend/dist")));

    // React routing fallback
    app.get("*", (_, res)=>{
        res.sendFile(path.join(path.join(__dirname, "../../frontend/dist/index.html")));
    })
}





app.use(express.json({ limit : '10mb'})); // req.body
app.use(express.urlencoded({ limit : '10mb', extended: true }));
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true}));
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);







// Server Starter
const PORT = ENV.PORT || 4080;
server.listen(PORT, (err)=> {
    if(err){
        console.log('Server Error to start', err);
    }
    else {
        console.log(`Server is running on port:${PORT}`);
        connectDB();
    }
})