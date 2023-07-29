import { defineType } from 'sanity'

export default defineType ({
    name: 'imageWithCaption',
    type: 'object',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: 'caption',
            type: 'string',
            title: 'Caption',
        },
    ]
  })

