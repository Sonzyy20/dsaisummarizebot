import fs from "fs"
import "dotenv/config"
import summarizeText from "./openai.js";


    const filePath = process.argv[2];
    const fileBuffer = fs.readFileSync(filePath)
    const blob = new Blob([fileBuffer])
    const form = new FormData()
    form.append("file", blob, "test.mp3")
    form.append("model", "whisper-1")
    const response = await fetch('https://api.openai.com/v1/audio/transcriptions',{
        method:"POST",
        headers: {
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: form
    })
const data = await response.json()
summarizeText(data.text)
console.log(data)