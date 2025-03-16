# AI-Powered Requirement Extractor

This is a Next.js web application that extracts structured software requirements from unstructured text using an LLM (Hugging Face Mistral-7B). The app also includes credit management, where each extraction deducts 1 credit.

Live Demo: https://your-vercel-url.vercel.app

---

## Features

- Extracts structured software requirements using an LLM
- Credit Management System (Users start with 20 credits)
- Dark Mode Toggle (Using TailwindCSS)
- Frontend with Next.js + TailwindCSS + ShadCN/UI
- Backend API using Next.js API routes

---

## Tech Stack

| Technology              | Usage                          |
| ----------------------- | ------------------------------ |
| Next.js 15              | Frontend & Backend             |
| TailwindCSS             | Styling                        |
| ShadCN/UI               | UI Components                  |
| React Hooks             | State Management               |
| Hugging Face Mistral-7B | LLM for requirement extraction |
| Vercel                  | Deployment                     |
| GitHub                  | Version Control                |

---

## Setup Instructions

1. Clone the Repository:

2. Install Dependencies:
   npm install

3. Set Up Environment Variables:

- Create a `.env.local` file in the root directory.
- Add the following content:
  ```
  HUGGINGFACE_API_KEY=your_huggingface_api_key
  ```

4. Run Locally:
   npm run dev

The app will be available at `http://localhost:3000`.
