import {defineField} from 'sanity'

export default {
    title: 'Project',
    name: 'project',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Featured Image',
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
            name: 'project_desc',
            title: 'Description',
            type: 'blockContent',
        },
        {
            title: 'Services Rendered',
            name: 'services_rendered',
            type: 'array',
            description: 'List of the services performed on this project',
            of: [
              {
                type: 'reference',
                to: [
                  {type: 'service'}
                ]
              }
            ]
        },
        {
            title: 'Public Documents',
            name: 'public_documents',
            type: 'array',
            description: 'Upload documents and files that should be available for public review.',
            of: [
              {
                type: 'file',
              }
            ]
        },
        {
            title: 'Gallery',
            name: 'gallery',
            type: 'array',
            description: 'Gallery of images from project.',
            of: [
              {
                type: 'imageWithCaption',
              },
            ]
        },
      ],
}