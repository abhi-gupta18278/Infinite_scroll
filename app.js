const image_container = document.getElementById("image-container")
const loader = document.getElementById("loader")
let photoArrey = [];


//api call

const Count = 20;
let api_key ='0seO5EUp2ICexVg8G15RLRuFDiaM2S7ygLV6rg_WwKY'; 
const ApiUrl = `https://api.unsplash.com/photos/random?client_id=${api_key}&count=${Count}`;

//displayphoto fun call
  function displayPhoto(){
    photoArrey.forEach((photo) => {
        //create the a tag and add the link in the href
        const item = document.createElement('a');
        item.setAttribute("href", photo.links.html);
        item.setAttribute("target","_blank");
        // create image for photo
        const img = document.createElement("img");
        img.setAttribute("src", photo.urls.regular);
        img.setAttribute("alt", photo.alt_description);
        img.setAttribute("title", photo.alt_description);

        //put the <a> tag inside the <img> tag for display the image in the 
        item.appendChild(img);
        image_container.appendChild(item); 
        
    });
}
//get photo
async function getPhoto(){
    try{
        const photo = await fetch(ApiUrl);
        photoArrey = await photo.json();
        // console.log(photoArrey);
        displayPhoto(); 
    }
    catch(err){
        console.log("we find some error",err);
    }

    window.addEventListener("scroll",()=>{
        if(window.innerHeight + window.scrollY>=document.body.offsetHeight){
            getPhoto();
        }
    })
}
getPhoto();

