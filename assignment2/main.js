document.addEventListener("copy",(e)=>{
    alert("Copy Not allowed");
    e.clipboardData.setData('text','');
    e.preventDefault();
    return false;
})

document.body.addEventListener("paste",(e)=>{
    alert("Pasting Not allowed");r
    e.preventDefault();
    return false;
})
document.body.addEventListener("contextmenu",(e)=>{
    alert("Pasting Not allowed");
    e.preventDefault();
    return false;
})