(()=>{
const submitButton=document.querySelector("#submit")
const button1=document.querySelector(".button1")
const button2=document.querySelector(".button2")
const button3=document.querySelector(".button3")
const button4=document.querySelector(".button4")
const button5=document.querySelector(".button5")
const divWriting=document.querySelector(".writing-image")
const divButtons=document.querySelector(".buttons-paragraph")
let valueSelect;
// document.addEventListener("click",(event)=>{
// element=event.target
// if(element===divWriting || divButtons ||section || body) return valueSelect=undefined
// })
function replaceWritingImage(){
    const img=document.createElement("img")
    img.src="images/illustration-thank-you.svg"
    img.classList.add("thankYouIllustration")
    divWriting.innerHTML=""
    divWriting.appendChild(img)
}
function feedbackNote(){
     const p=document.createElement("p")
     p.innerHTML=`You selected ${valueSelect} out of 5`
     p.classList.add("paragraphValueSelect")
     divWriting.appendChild(p)
}
function replaceButtonsTitle(){
    const h1=document.createElement("h1")
    h1.innerHTML="Thank you!"
    h1.classList.add("titleThankYou")
    divButtons.innerHTML=""
    divButtons.appendChild(h1)
}
function replaceButtonsParagraph(){
    const p=document.createElement("p")
    p.innerHTML="We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
    p.classList.add("paragraphThankYou")
    divButtons.appendChild(p)
}
document.addEventListener("focusin",(event)=>{
const element=event.target
    if(element===button1)return valueSelect=1
    if(element===button2)return valueSelect=2
    if(element===button3)return valueSelect=3
    if(element===button4)return valueSelect=4
    if(element===button5)return valueSelect=5
})
submitButton.addEventListener("click",()=>{
    if(valueSelect!=undefined){
    replaceWritingImage()
    feedbackNote()
    replaceButtonsTitle()
    replaceButtonsParagraph()
}
})
})()