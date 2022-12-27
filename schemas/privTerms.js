import { defineType } from "sanity"

export default defineType ({
    name: 'privTerms',
    type: 'object',
    fields: [
        { 
            name: 'pagename', 
            title: 'Page Name', 
            type: 'string'
        },
        { 
            name: 'pagelink', 
            title: 'Page Link', 
            type: 'string' 
        },
    ]
})