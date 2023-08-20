const footertext = document.getElementById("footertext")
const codingLanguages = ["HTML", "CSS", "JavaScript"];
let footer = "";
let ggg = "";

for (let i=0; i < codingLanguages.length-1; i++ ){
    ggg += codingLanguages[i] + ","   
}
footer = `This website has been created with:${ggg} and ${codingLanguages[codingLanguages.length -1]}`;
console.log(footer);

footertext.innerText = footer;