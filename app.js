const container = document.querySelector(".container");
const gallery = document.querySelector(".gallery");
const left = document.querySelector("#left");
const right = document.querySelector("#right")
let index = 0;

const imageN = {
    "photo" : ["Screenshot (49).png", "Screenshot (50).png", "Screenshot (51).png", "Screenshot (52).png", "Screenshot (53).png", "Screenshot (54).png", "Screenshot (55).png", "Screenshot (56).png", "Screenshot (57).png", "Screenshot (58).png", "Screenshot (59).png", "Screenshot (60).png", "Screenshot (61).png", "Screenshot (62).png","Screenshot (63).png", "Screenshot (64).png"
    ]
}
// async function image() {
//     index++;
//     const URL = `/photo/`

//     let response = await fetch(URL);

//     let data = await response.text()
//     let imagedata = document.createElement("div")
//     imagedata.innerHTML = data
//     let imageName = imagedata.getElementsByClassName("name")

//     // for(let i = 1 ; i < imageName.length ; i++){
//     // }

//     display(imageName)

// }

const image = () => {
    const imageName = imageN["photo"] || [];
    display(imageName);
}

const display = (imageName) => {

    left.addEventListener("click", () => {
        // console.log(imageName)
        index = Math.max(0, index - 1)
        gallery.innerHTML = `<img src="photo/${imageName[index]}" class="galleryImage" >`
        const img = document.querySelector(".galleryImage");
        img.style.animation = 'none';
        img.offsetHeight;
        img.style.animation = '';
        
        img.style.animation = "animateright 2s"
    })
    
    right.addEventListener("click", () => {
        index = Math.min(imageName.length - 1, index + 1)
        gallery.innerHTML = `<img src="photo/${imageName[index]}" class="galleryImage" >`
        const img = document.querySelector(".galleryImage");
        img.style.animation = 'none';
        img.offsetHeight;
        img.style.animation = '';
        
        console.log("Right click")
        img.style.animation = "animateleft 2s"

    })
}
image()