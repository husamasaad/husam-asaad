import axios from "axios"
import { Phone } from "lucide-react";


export const sendToTelegram = async (obj) => {

  const { name, email, phone, description, message, subject } = obj

  try {

    const result = await axios.post(`https://api.telegram.org/bot6895856909:AAHCdU5pJsu-zWEE0mT8NQ6WOKELIZUjgaE/sendMessage`, {
      chat_id: '397371054',
      text: `
        a New message from Your Portfolio
        
        - Name :
          ${username}

        - Email : 
          ${email}

        - phone : 
          ${phone}

        - subject : 
          ${subject}

        - description : 
          ${description}

        - message : 
          ${message}  
        `
    })

    return result

  } catch (error) {
    console.error('Error sending object to API:', error);
    throw error;
  }

}