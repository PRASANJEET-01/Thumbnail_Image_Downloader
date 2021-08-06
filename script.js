const urlField = document.querySelector(".field input"),
previewArea = document.querySelector(".preview-area"),
imgTag = previewArea.querySelector(".thumbnail"),
hiddenInput=document.querySelector(".hidden-input");

urlField.onkeyup = () =>{
    let imgUrl = urlField.value;//getting user entered value
    console.log(imgUrl);
    previewArea.classList.add("active") //adding class active to the preview area   
// https://www.youtube.com/watch?v=1qwdD2ivIbM this is youtube url
    if(imgUrl.indexOf("https://www.youtube.com/watch?v=")!=-1){
        //if entered url is youtube url
        let vidId =imgUrl.split("v=")[1].substring(0,11);
        // after splitting we get v=1qwdD2ivIbM video id which is unique
        // console.log(vidId);
        let ytImgUrl = `https://img.youtube.com/vi/${vidId}/maxresdefault.jpg`; //passing entered url video id inside yt thumbnail url
        // console.log(ytImgUrl);
        imgTag.src = ytImgUrl;



    }else if(imgUrl.indexOf("https://youtu.be/")!=-1){     //if url looks like this
        
    //if entered url is youtube url
        let vidId =imgUrl.split("be/")[1].substring(0,11);
        // after splitting we get be/=1qwdD2ivIbM video id which is unique
        // console.log(vidId);
        let ytImgUrl = `https://img.youtube.com/vi/${vidId}/maxresdefault.jpg`; //passing entered url video id inside yt thumbnail url
        // console.log(ytImgUrl);
        imgTag.src = ytImgUrl;

    
    
    


    }else if(imgUrl.match(/\.(jpe?g|png|gif|bmp|webp)$/i)){

        imgTag.src = imgUrl;

    }
    else{
        imgTag.src = ""
        previewArea.classList.remove("active");
    }
    hiddenInput.value = imgTag.src;


}


