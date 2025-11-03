# How I Use AI Tools Personally - Website

This project is the website version of the article " [How I Use AI Tools Personally (May 2025)](https://joe-ai.pages.dev/) " by Joe Hu.

## Structure

- `index.html`: The main HTML file.
- `css/style.css`: Contains all the custom styles for the website.
- `js/script.js`: Contains JavaScript for theme switching and other dynamic functionalities.
- `assets/`: Directory for any static assets (currently empty).

## Original Article

The original content can be found on Notion: [How I Use AI Tools Personally (May 2025)](https://hubeiqiao.notion.site/how-i-use-ai-tools-personally?pvs=4) 

## Analytics & AI Referral Tracking

- Append AI-focused UTM tags to outbound share links. Recommended pattern: `utm_source=ai-overview`, `utm_medium=ai-referral`, `utm_campaign=how-i-use-ai-2025`, and `utm_content=<llm-or-agent-name>`. This keeps LLM traffic distinct from traditional search/social referrals.
- For bespoke share URLs (e.g., prompt libraries, research examples), include a stable `utm_term` to capture topic or workflow (such as `utm_term=cli-toolkit` or `utm_term=prompt-engineering`).
- In Google Analytics 4, create an exploration segment that filters `Session source` to `ai-overview`, `ai-summary`, `chatgpt`, `perplexity`, or any future AI-specific values; pair it with a breakdown by landing page to monitor which sections drive AI referrals.
- Mirror the same filter set in Microsoft Clarity (Segments → Add Condition → `Referrer contains ai.` or `utm_medium equals ai-referral`) to compare qualitative session replays with quantitative GA4 metrics.
