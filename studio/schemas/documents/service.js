import {defineField} from 'sanity'

export default {
    title: 'Service',
    name: 'service',
    type: 'document',
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
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: Rule => [
              Rule.required(),
            ],
        },
        {
            name: 'service_desc',
            title: 'Service Description',
            type: 'blockContent',
        },
        {
            name: 'contact',
            title: 'Contact',
            type: 'reference',
            to: [{type: 'staff'}]
        }
      ],
}