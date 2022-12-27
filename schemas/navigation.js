import { BsSegmentedNav as icon } from 'react-icons/bs';

export default {
    name: 'navigation',
    title: 'Navigation',
    type: 'document',
    icon,
    fields: [
      { 
        name: 'title', 
        title: 'Title for CMS Display', 
        type: 'string' 
      },
      { 
        name: 'navlogo', 
        title: 'Logo', 
        type: 'image',
        options: {
          hotspot: true
        }
      },
      { 
        name: 'mainalt', 
        title: 'Alternative text for Main Logo', 
        type: 'string',
      },
      { 
        name: 'mobilelogo', 
        title: 'Mobile Logo', 
        type: 'image',
        options: {
          hotspot: true
        }
      },
      { 
        name: 'mobilealt', 
        title: 'Alternative text for Mobile Logo', 
        type: 'string' 
      },
    ],
  }