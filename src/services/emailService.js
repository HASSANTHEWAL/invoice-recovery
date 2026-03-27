/**
 * Email Service API Integration
 * 
 * NOTE: For security reasons, you should NEVER put your secret Email API keys 
 * (like SendGrid, Resend, or Mailgun keys) directly in this React frontend code.
 * Instead, this service should make a request to your own backend server or 
 * a serverless function (like Vercel Functions or AWS Lambda), which then securely forwards the email via the API.
 */

// Replace this with your actual backend endpoint that handles the email sending
const EMAIL_API_ENDPOINT = import.meta.env.VITE_EMAIL_API_URL || "https://your-backend-api.com/api/send-email";

/**
 * Sends an email to a client using the configured email API.
 * 
 * @param {Object} payload 
 * @param {string} payload.to - The recipient's email address
 * @param {string} payload.subject - The subject of the email
 * @param {string} payload.body - The HTML or text content of the email
 * @returns {Promise<boolean>} - True if successful, false otherwise
 */
export const sendClientEmail = async ({ to, subject, body }) => {
    try {
        const response = await fetch(EMAIL_API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Uncomment and use this if your backend requires authentication:
                // 'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
            },
            body: JSON.stringify({
                to,
                subject,
                html: body,
            }),
        });

        if (!response.ok) {
            throw new Error(`Email API failed with status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Email sent successfully:", data);
        return true;

    } catch (error) {
        console.error("Error sending email:", error);
        return false;
    }
};
