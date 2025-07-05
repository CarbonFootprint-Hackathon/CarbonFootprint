import {GoogleGenAI} from "@google/genai"

const ai = new GoogleGenAI({ apiKey:"AIzaSyAFD6rvUPtHj08ewDn7ftuD46hLmPFS594"});

const Chatbot = async(req,res)=> {
    const { input } = req.body;
    console.log(req.body)
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: input,
    });
    console.log(response.text);
    res.send(response.text)
}

export default Chatbot