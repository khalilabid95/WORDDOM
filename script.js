const boldBtn = document.getElementById('bold');
const italicBtn = document.getElementById('italic');
const underlineBtn = document.getElementById('underline');
const colorBtn = document.getElementById('color');
const upSizeBtn = document.getElementById('up-size');
const downSizeBtn = document.getElementById('down-size');
const textArea= document.getElementById('text');
//let fontSize = getComputedStyle(textArea).fontSize;

boldBtn.addEventListener("click", ()=>{
    textArea.classList.toggle('bold');
    boldBtn.classList.toggle('border')

})

italicBtn.addEventListener("click", ()=>{
    textArea.classList.toggle('italic');
    italicBtn.classList.toggle('border')
})
underlineBtn.addEventListener("click", ()=>{
    textArea.classList.toggle('underline');
    underlineBtn.classList.toggle('border')
})
colorBtn.addEventListener("click", ()=>{
    textArea.classList.toggle('color');
    colorBtn.classList.toggle('border')
    colorBtn.classList.toggle('color')
})

 upSizeBtn.addEventListener("click", ()=>{
     let fontSize = getComputedStyle(textArea).fontSize;
    fontSize= fontSize.slice(0,fontSize.length-2)
     
     textArea.style.fontSize = Number(fontSize) + 2 + "px"
 })
 downSizeBtn.addEventListener("click", ()=>{
     let fontSize = getComputedStyle(textArea).fontSize;
    fontSize= fontSize.slice(0,fontSize.length-2)
     
     textArea.style.fontSize = Number(fontSize) - 2 + "px"
 })
