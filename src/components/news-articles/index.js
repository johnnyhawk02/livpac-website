// Import news article components
import SummerActivities, { metadata as summerMetadata } from './SummerActivities';
import SupportGroup, { metadata as supportGroupMetadata } from './SupportGroup';
import SurveyResults, { metadata as surveyMetadata } from './SurveyResults';
import TransportPolicy, { metadata as transportMetadata } from './TransportPolicy';
import FundingBoost, { metadata as fundingMetadata } from './FundingBoost';
import NewSchool, { metadata as newSchoolMetadata } from './NewSchool';
import LocalOfferLive, { metadata as localOfferMetadata } from './LocalOfferLive';
import NeurodiversityShow, { metadata as neuroShowMetadata } from './NeurodiversityShow';
import HeliosExhibition, { metadata as heliosMetadata } from './HeliosExhibition';

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
  },
  {
    ...transportMetadata,
    Component: TransportPolicy
  },
  {
    ...fundingMetadata,
    Component: FundingBoost
  },
  {
    ...newSchoolMetadata,
    Component: NewSchool
  },
  {
    ...localOfferMetadata,
    Component: LocalOfferLive
  },
  {
    ...neuroShowMetadata,
    Component: NeurodiversityShow
  },
  {
    ...heliosMetadata,
    Component: HeliosExhibition
  }
];

// Sort articles by date (newest first)
newsArticles.sort((a, b) => new Date(b.date) - new Date(a.date)); 