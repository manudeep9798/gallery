const photo1=document.getElementById('photo1');
const photo2=document.getElementById('photo2');
const photo3=document.getElementById('photo3');
const photo4=document.getElementById('photo4');
const photo5=document.getElementById('photo5');
const displayPhoto= document.getElementById('enlargedPhoto')
photo1.addEventListener("click",()=>{
    document.getElementById('enlargedPhoto').style.display = "block";
    document.getElementById('enlargedPhoto').style.backgroundImage='url("photo1.jpg")';
    document.getElementById('enlargedPhoto').style.backgroundSize="100% 600px"
})
photo2.addEventListener("click",()=>{
    document.getElementById('enlargedPhoto').style.display = "block";
    document.getElementById('enlargedPhoto').style.backgroundImage='url("photo2.jpg")';
})
photo3.addEventListener("click",()=>{
    document.getElementById('enlargedPhoto').style.display = "block";
    document.getElementById('enlargedPhoto').style.backgroundImage='url("photo3.jpg")';
})
photo4.addEventListener("click",()=>{
    document.getElementById('enlargedPhoto').style.display = "block";
    document.getElementById('enlargedPhoto').style.backgroundImage='url("photo4.jpg")';
})
photo5.addEventListener("click",()=>{
    document.getElementById('enlargedPhoto').style.display = "block";
    document.getElementById('enlargedPhoto').style.backgroundImage='url("photo5.jpg")';
})


// const selector= document.getElementsByClassName('selector');


// selector.forEach(element => {
//     element.addEventListener("click",)
// });
