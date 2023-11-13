import axios from "axios";
const express = require("express");
const app = express();

// Define chatbot API route
app.post("/api/chatbot", (req, res) => {
  // Handle chatbot API logic here
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// Function to send user query to the chatbot API
export const sendMessageToChatbot = async (query) => {
  try {
    // Send POST request to the backend API
    const response = await axios.post("/api/chatbot", { query });

    // Return the chatbot response
    return response.data;
  } catch (error) {
    console.error("Error sending message to chatbot:", error);
    throw error;
  }
};
