import express from "express";
import cors from "cors";
// import { addNewVideo, getAllVideos, getPreviousResponseById, updateResponse } from './controllers/video/video.controller.js';

const PORT = process.env.PORT || 8000;
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  const data = Math.random().toString();
  console.log("This Route works!!", data);
  res.send({ hello: data });
});

app.listen(PORT, () => {
  console.log(`App is runing on the Port---${PORT}`);
});
