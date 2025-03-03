import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  try {
    const { message } = await req.json();
    const OPENAI_API_KEY = "your-openai-api-key"; // Replace with your API Key

    const res = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "system", content: "You are an AI assistant." }, { role: "user", content: message }],
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json({ response: res.data.choices[0].message.content });
  } catch (error) {
    return NextResponse.json({ error: "Error fetching response" }, { status: 500 });
  }
}
