import {useState } from "react"
import imageCompression from "browser-image-compression"
import { saveAs } from "file-saver"
import './style.css'
import { createElement } from "react"
  const ImageCompressor = () => {
  const [images, setimage] = useState()
  const [allImage, setAllImage] = useState([])
  const [downloadImage, setDownloadImage] = useState()
  const[zipfile,setZipfile]=useState(false)
  // ............................//............/...................../....................
  const compressAndEncodeImage = async (imageFile, maxWidth, maxHeight, quality) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      console.log(reader, "reader")
      reader.onload = function (event) {
        const image = new Image();
        image.src = event.target.result;
        image.onload = function () {
          const canvas = document.createElement('canvas');
          let width = image.width;
          let height = image.height;
          if (width > height && width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          } else if (height > maxWidth) {
            width *= maxHeight / height;
            height = maxHeight; 
          }
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(image, 0, 0, width, height);
          canvas.toBlob(
            (blob) => {
              const reader = new FileReader();
              console.log(blob, "blob")
              // setDownloadImage(blob)
              reader.onloadend = () => {
              const base64Data = reader.result;
              resolve(base64Data);
              setDownloadImage(base64Data,"base64data")
            };
              reader.readAsDataURL(blob);
            },
            'image/png', 
            quality
          );
        };
      };
      reader.onerror = reject;
      reader.readAsDataURL(imageFile);
    });
  };
  //...............HandleFileChange Function............//..................................................
  let imageFile
  let resizeImg
  const handleFileChange = async (e) => {
     imageFile = Array.prototype.slice.call(e.target.files)
     console.log(imageFile,"image")
     const resizeImg = await Promise.all(
     imageFile.map((file) => compressAndEncodeImage(file, 400, 400, 0.5))
    );
    setimage(resizeImg)
    setAllImage((prevData)=>[...prevData,...resizeImg])
    setZipfile(!zipfile)
  }
  console.log(allImage,"alllimpage ===>>>>>")
  // download button function
  const downloadBtn = (i) => {
    const file = allImage[i];
    const base64Data = file.split(",")[1]; // Extract the Base64 data from the image source
    const byteCharacters = atob(base64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
      const slice = byteCharacters.slice(offset, offset + 1024);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = "image.png";
    // link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  // zip file function
const zipFile=()=>{
  var JSZip = require("jszip");
  var zip = new JSZip();
  zip.file("image.png",allImage);
  // const img=zip.folder("images")
  // img.file("")
  console.log(zip,"zippppp","===>>",allImage,"allimageds........../////")

//  img.file("image",allImage);
  zip.generateAsync({type:"blob"}).then((content)=>{
    const blob=new Blob([content])
    console.log(content,"content")
  const url=URL.createObjectURL(blob)
  console.log(url,"url")
  const link=document.createElement('a')
  link.href=url
  link.download="image.zip"
  link.click()
  URL.revokeObjectURL(url)
  })
}
  return (
    <>
      <h2 className="image_heading">Image Compression</h2>
      <input type="file" onChange={handleFileChange} multiple="multiple"/>
      <div className="images">
        {allImage.map((data, i) => {
          return (
            <>
              <div className="images_outer" key={i}>
                <img src={data} />
               <button className="download_btn" onClick={()=>downloadBtn(i)}>Download</button>
              </div>
            </>
          )
        })}
      </div>
      {
        zipfile? <button onClick={zipFile} height="40px" width="120px"> compressed to zip file</button>:""
      }
    
       
    </>
  )
}
export default ImageCompressor