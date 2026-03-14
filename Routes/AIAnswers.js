import OpenAI from "openai";
import express from 'express'

const router = express.Router()

router.post('/', async (req, res) => {
    try{
    const {goal} = req.body

    const client = new OpenAI({
        apiKey: process.env.API_KEY,
        baseURL: "https://api.groq.com/openai/v1"
    })

    const response = await client.responses.create({
      model: "llama-3.1-8b-instant",
      input: `
You are an expert behavioral scientist.

User goal: ${goal}

Your task is to generate EXACTLY 3 human traits (1-2 words each) needed to achieve this goal.

Rules:
- Maximum 2 words per trait
- Traits only (e.g., discipline, persistence, focus)
- Do NOT generate names
- Output MUST be in JSON format like:
{"identities":["trait1","trait2","trait3"]}

Always output exactly 3 traits, never more, never less.
`
    })


    let parsed;

    try {
      parsed = JSON.parse(response.output_text);
    
      if (!Array.isArray(parsed.identities)) {
        parsed.identities = [];
      }
    
    } catch {
      parsed = { identities: [] };
    }
    
    res.json(parsed);
    }catch(err){
        console.log(err)
        res.status(500).json({error: "Something went wrong"})
    }
})

export default router