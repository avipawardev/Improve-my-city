// Simple rule-based chatbot responses
const getChatbotResponse = (message) => {
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes('status') && lowerMessage.includes('complaint')) {
    return "To check your complaint status, please log in to your account and visit 'My Complaints' page.";
  }

  if (lowerMessage.includes('how') && lowerMessage.includes('report')) {
    return "To report an issue, log in and go to 'Report Issue' page. Fill in the details and upload photos if available.";
  }

  if (lowerMessage.includes('admin') || lowerMessage.includes('contact')) {
    return "For urgent issues, please contact the admin through the support email.";
  }

  return "I'm here to help with your civic issues. You can ask about reporting complaints, checking status, or general information.";
};

module.exports = { getChatbotResponse };