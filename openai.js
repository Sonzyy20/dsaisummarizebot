export default async function summarizeText (myText){

    
    
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [
                { role: "system", content: "Ты мой помощник который дает мне краткий саммари из текста который получаешь" },
                { role: "user", content: `Summarize this text: ${myText}` }
            ]
        })
    })
    
    const data = await response.json()
    console.log(myText)
    console.log(data.choices[0].message)
    return(data.choices[0].message.content)
}

