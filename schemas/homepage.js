import { AiOutlineHome as icon } from 'react-icons/ai';

export default {
    name: 'homepage',
    title: 'Homepage',
    type: 'document',
    icon,
    fields: [
        {
          name: 'title',
          title: 'Title for CMS display',
          type: 'string',
        },
        {
          name: 'message',
          title: 'Welcome Message in Header',
          type: 'array',
          of: [{type: 'post'}]
        },
        {
          name: 'image', 
          title: 'Header Image', 
          type: 'image',
          options: {
            hotspot: true
          } 
        },
    ],
  }