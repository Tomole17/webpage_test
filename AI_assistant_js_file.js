// script.js
const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const conversation = document.getElementById('conversation');

sendBtn.addEventListener('click', function() {
    let userMessage = userInput.value;
    if (userMessage.trim() === '') return;
    
    // Display user message in chat
    let userMessageElem = document.createElement('div');
    userMessageElem.innerHTML = `<strong>You:</strong> ${userMessage}`;
    conversation.appendChild(userMessageElem);
    
    // Simulate AI therapist response
    setTimeout(() => {
        let aiResponse = getAiResponse(userMessage);
        let aiMessageElem = document.createElement('div');
        aiMessageElem.innerHTML = `<strong>AI Therapist:</strong> ${aiResponse}`;
        conversation.appendChild(aiMessageElem);
        conversation.scrollTop = conversation.scrollHeight;
    }, 1000);
    
    // Clear input field
    userInput.value = '';
});

// Simple AI Response Logic
function getAiResponse(message) {
    // Basic response logic
    if (message.toLowerCase().includes('sad')) {
        return 'I\'m sorry to hear that. Do you want to talk more about it?';
    } else if (message.toLowerCase().includes('happy')) {
        return 'That\'s great! What has been making you feel this way?';
    } else {
        return 'Can you tell me more about how you\'re feeling?';
    }
}
