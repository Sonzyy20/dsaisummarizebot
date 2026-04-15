import "dotenv/config"
import summarizeText from "./openai.js"

const myInput = process.argv.slice(2).join(" ")
if(myInput === undefined){
    console.log("Текст не обнаружен, попробуйте щее раз")
}else{
    console.log(myInput)
}

summarizeText(myInput)