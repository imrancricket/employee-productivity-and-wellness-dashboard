import React, { useState } from "react";
import faqList from "../../../faq.json";

const Chatbot = () => {
  const apiKey = import.meta.env.VITE_OPEN_AI_KEY
  const aiUrl = import.meta.env.VITE_OPEN_AI_CHAT_URL;

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi! How can I help you today? 😊" },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const generatePrompt = () => {
    const faqText = faqList
      .map(
        (item, index) => `${index + 1}. Q: ${item.question}\n A: ${item.answer}`
      )
      .join("\n\n");
    return `You are a helpful assistant. Only answer questions based on the following FAQs. If the question is not related to these FAQs, respond with "Sorry, I can only help with specific work-related FAQs."\n\nFAQs:\n: ${faqText}`;
  };

  const handleSend = async () => {
    try {
      if (!input.trim()) return;
      setMessages([...messages, { type: "user", text: input }]);
      const prompt = generatePrompt();
      const res = await fetch(`${aiUrl}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: prompt },
            {
              role: "user",
              content: input,
            },
          ],
        }),
      });
      const data = await res.json();
      const botReply = { type: "bot", text: data.choices[0].message.content };
      setMessages((prev) => [...prev, botReply]);
    } catch (error) {
      console.log(error.message, "+-----------error");
    }
    setInput("");
    // setTimeout(() => {
    //   setMessages((prev) => [
    //     ...prev,
    //     { type: "bot", text: "I'm here to assist you!" },
    //   ]);
    // }, 1000);
  };

  return (
    <>
      <div className="fixed bottom-20 right-4 z-50">
        {isOpen && (
          <div className="bg-white border-[#c1c1bc] rounded-xl shadow-lg w-80 h-[420px] flex flex-col">
            <div className="bg-blue-600 text-white p-3 rounded-t-xl text-lg font-semibold flex justify-between">
              Chat Assistant
              <button onClick={toggleChat} className="text-white">
                ✖
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-lg max-w-[75%] ${
                    msg.type === "user"
                      ? "bg-blue-100 self-end ml-auto"
                      : "bg-gray-200 self-start"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            {messages.length <= 1 && (
              <div className="p-2">
                <button
                  style={{ borderRadius: "6px" }}
                  className="p-1 max-w-[50%] bg-[#82fd3f] self-start"
                  onClick={() =>
                    setInput("what's this feature on slack means?")
                  }
                >
                  <p className="text-[10px]">
                    what's this feature on slack means?
                  </p>
                </button>
              </div>
            )}
            <div className="flex p-2 border-t">
              <input
                type="text"
                className="flex-1 px-2 py-1 border rounded-l focus:outline-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type a message..."
              />
              <button
                className="bg-blue-600 text-white px-4 rounded-r"
                onClick={handleSend}
              >
                <p style={{ color: "#fff" }}>Send</p>
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={toggleChat}
          style={{ borderRadius: "50%" }}
          className="bg-blue-600 text-white p-4 shadow-lg hover:bg-blue-700"
        >
          💬
        </button>
      </div>
    </>
  );
};

export default Chatbot;
