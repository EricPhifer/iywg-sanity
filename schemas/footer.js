import { GiFootprint as icon } from 'react-icons/gi';

export default {
    name: 'footer',
    title: 'Footer',
    type: 'document',
    icon,
    fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'businessname',
          title: 'Business Name',
          type: 'string',
        },
        {
          name: 'privterms',
          title: 'Links to Privacy Policy and Terms & Conditions',
          type: 'array',
          of: [
            {type: 'privTerms'}
          ],
        },
        {
          name: 'dev', 
          title: 'Design & Development Credit', 
          type: 'string', 
        },
        {
          name: 'devlink', 
          title: 'URL for Developer', 
          type: 'url',
        },
    ],
  }