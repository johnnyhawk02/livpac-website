# How to Add News Articles to the LivPaC Website

This guide explains how to add new articles to the News page using the component-based approach.

## Overview

The news system is structured as follows:

1. Individual news articles are stored as React components in the `src/components/news-articles/` directory
2. Each article component exports its content and metadata
3. The `index.js` file in the news-articles directory collects and sorts all articles
4. The main `News.jsx` page imports and displays the articles

## Step 1: Create a New Article Component

1. Create a new file in the `src/components/news-articles/` directory
2. Name the file descriptively, e.g., `NewSchool.jsx` or `FundingAnnouncement.jsx`
3. Use the following template structure:

```jsx
import React from "react";

export const metadata = {
  id: "unique-article-id",
  title: "Your Article Title Here",
  date: "YYYY-MM-DD",
  summary: "A brief summary of the article content."
};

export default function YourComponentName() {
  return (
    <div className="news-article">
      <p>First paragraph of your article...</p>
      
      <p>Second paragraph with <strong>bold text</strong> if needed.</p>
      
      <ul>
        <li>Bullet point 1</li>
        <li>Bullet point 2</li>
        <li>Bullet point 3</li>
      </ul>
      
      <p>Final paragraph with any concluding information.</p>
    </div>
  );
}
```

### About the Metadata

The metadata section defines key information about your article:

- `id`: A unique identifier for the article (use kebab-case)
- `title`: The headline that will be displayed
- `date`: The publication date in YYYY-MM-DD format (used for sorting)
- `summary`: A brief description shown in article listings

## Step 2: Add Your Article to the Index

After creating your article component, you need to register it in the index file:

1. Open `src/components/news-articles/index.js`
2. Import your new article component and its metadata:

```js
import YourComponent, { metadata as yourMetadata } from './YourComponentName';
```

3. Add it to the `newsArticles` array:

```js
export const newsArticles = [
  // Existing articles...
  {
    ...yourMetadata,
    Component: YourComponent
  }
];
```

4. The articles are automatically sorted by date, with newest first

## Step 3: Content Guidelines

Follow these guidelines when writing news articles:

- **Keep it concise**: Aim for 3-5 paragraphs per article
- **Use formatting** when appropriate:
  - `<strong>text</strong>` for bold/important information
  - `<em>text</em>` for emphasis/italics
  - Use bullet points (`<ul>` and `<li>`) for lists
- **Include details**: When discussing events, include dates, times, locations, and any registration information
- **Add context**: Explain why the news is relevant to the LivPaC community
- **Attribution**: If sourcing information from elsewhere, note the source

## Example of a Complete News Article

Here's an example of a complete news article component:

```jsx
import React from "react";

export const metadata = {
  id: "local-offer-live-2025",
  title: "SEND Local Offer LIVE 2025 Event Announced",
  date: "2024-03-25",
  summary: "Save the date for Liverpool's fifth annual Local Offer LIVE event, showcasing SEND services and support."
};

export default function LocalOfferLive() {
  return (
    <div className="news-article">
      <p><strong>Save the date!</strong> The fifth annual Local Offer LIVE event will take place on <strong>Wednesday, 18th June 2025</strong>, from 12 pm to 6 pm at St George's Hall in Liverpool.</p>
      
      <p>This free community information day – co-hosted by Liverpool City Council and LivPaC – brings together a wide range of service providers, support organizations, and experts all under one roof.</p>
      
      <p>It's a fantastic opportunity for parents, caregivers, and young people with SEND to meet local education, health, and social care services and discover what support is available.</p>
      
      <p>The event's focus this year is on <em>preparation for adulthood</em>, recognizing the extra challenges that teens with SEND face when transitioning out of school into college, employment, or adult services.</p>
      
      <p>Attendees will be able to:</p>
      <ul>
        <li>Gather information about community activities</li>
        <li>Learn about training and employment support</li>
        <li>Discover independent living resources</li>
        <li>Network with other families and professionals</li>
        <li>Ask questions directly to service providers</li>
      </ul>
      
      <p>No tickets are required; families can drop in anytime during the afternoon to browse stalls, join discussions, or simply pick up information.</p>
    </div>
  );
}
```

## Troubleshooting

- **Articles not showing up**: Make sure the article is properly imported and added to the newsArticles array in index.js
- **Articles not sorted correctly**: Check the date format (YYYY-MM-DD)
- **Styling issues**: Ensure you're using the proper HTML structure and the "news-article" CSS class 