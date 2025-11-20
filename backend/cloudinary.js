import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import 'dotenv/config'

// console.log(process.env.CLOUDINARY_CLOUD_NAME);
// console.log(process.env.CLOUDINARY_API_KEY);
// console.log(process.env.CLOUDINARY_API_SECRET);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: "flyers",
//     allowed_formats: ["jpg", "jpeg", "png"],
//   },
// });

const image = './images/Lorenz.png';

cloudinary.uploader.upload(image).then(result => {
    console.log(result)
})