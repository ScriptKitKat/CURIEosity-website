import { useState } from 'react';

export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

interface FormData {
    email: string;
    message: string;
}

interface FetchResponse {
    ok: boolean;
}

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setStatus('Sending...');

    try {
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, message }),
        });
          

        if (response.ok) {
            setStatus('Message sent successfully!');
            setEmail('');
            setMessage('');
        } else {
            setStatus('Failed to send message. Please try again.');
        }
    } catch (error) {
        setStatus('Failed to send message. Please try again.');
    }
};

  return (
    <div className="max-w-2xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
    <p className="text-center mb-8">Interested in partnering with us? Send us a message!</p>
    <form onSubmit={handleSubmit} className="space-y-4">
        <div>
        <label htmlFor="email" className="block mb-2">Email</label>
        <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 rounded bg-[#2D1E2F] border border-pink-400 focus:border-pink-500 focus:ring focus:ring-pink-200"
            placeholder="e.g. jane@example.com"
        />
        </div>
        <div>
        <label htmlFor="message" className="block mb-2">Message</label>
        <textarea
            id="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full p-2 rounded bg-[#2D1E2F] border border-pink-400 focus:border-pink-500 focus:ring focus:ring-pink-200"
            placeholder="Your message here..."
        ></textarea>
        </div>
        <button type="submit" className="w-full bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition duration-300">
        Send Message
        </button>
    </form>
    {status && <p className="text-center mt-4">{status}</p>}
    </div>
  );
}
