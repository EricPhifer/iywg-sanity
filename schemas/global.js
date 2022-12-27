import { AiOutlineGlobal as icon } from 'react-icons/ai';

export default {
    name: 'global',
    title: 'Global',
    type: 'document',
    icon,
    fields: [
        {
          name: 'title',
          title: 'Title for CMS display',
          type: 'string',
        },
        {
          name: 'image', 
          title: 'Background SVG', 
          type: 'image',
          options: {
            hotspot: true
          } 
        },
    ],
  }