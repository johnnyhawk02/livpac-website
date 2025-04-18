// Import news article components
import SummerActivities, { metadata as summerMetadata } from './SummerActivities';
import SupportGroup, { metadata as supportGroupMetadata } from './SupportGroup';
import SurveyResults, { metadata as surveyMetadata } from './SurveyResults';

// Define an array of news articles with their metadata and components
export const newsArticles = [
  {
    ...summerMetadata,
    Component: SummerActivities
  },
  {
    ...supportGroupMetadata,
    Component: SupportGroup
  },
  {
    ...surveyMetadata,
    Component: SurveyResults
  }
];

// Sort articles by date (newest first)
newsArticles.sort((a, b) => new Date(b.date) - new Date(a.date)); 