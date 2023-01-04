import { AiOutlineHome as icon } from 'react-icons/ai';
import { defineField } from 'sanity';

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
        defineField({
          name: 'video',
          title: 'Main video',
          type: 'mux.video',
        }),
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