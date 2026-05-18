# YouTube Summarizer LLM

An AI-powered YouTube video summarizer that extracts video transcripts and generates concise summaries using Large Language Models.

## What It Does

- Takes a YouTube video URL as input
- Extracts the video transcript automatically
- Feeds the transcript to an LLM for summarization
- Returns key points and a clean summary
- Angular-based web interface for easy interaction

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Angular, TypeScript, HTML/CSS |
| AI/ML | Python, Jupyter Notebook, LLM APIs |
| Core Logic | YouTube Transcript extraction, Text preprocessing, LLM-based summarization |

## Project Structure

```
├── src/                    # Angular frontend application
│   ├── app/               # Angular components and services
│   ├── assets/            # Static assets
│   ├── index.html         # Entry point
│   ├── main.ts            # Bootstrap file
│   └── styles.css         # Global styles
├── LLM Model/             # Python notebook for summarization
│   └── youtube_summarizer_llm.ipynb   # Core LLM logic
├── .vscode/               # VS Code configuration
├── angular.json           # Angular CLI config
├── package.json           # Node dependencies
└── tsconfig.json          # TypeScript config
```

## How It Works

1. User pastes a YouTube video URL in the web interface
2. The app extracts the video transcript using YouTube's transcript API
3. The transcript is sent to the LLM model for processing
4. The model generates a structured summary with key takeaways
5. The summary is displayed back to the user in a readable format

## Setup & Run

### Frontend
```bash
npm install
ng serve
```
Navigate to `http://localhost:4200/`

### LLM Notebook
Open `LLM Model/youtube_summarizer_llm.ipynb` in Jupyter Notebook and run all cells.

## Why I Built This

This was my first-ever experiment with LLMs — built out of pure curiosity after watching one too many hour-long tech talks and thinking "there has to be a faster way." It's not perfect, but it's where my AI journey started.

