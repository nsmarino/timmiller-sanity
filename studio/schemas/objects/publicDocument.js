import { defineType } from 'sanity'

export default defineType ({
    name: 'publicDocument',
    title: 'Document',
    type: 'object',
    fields: [
        {
            name: 'label',
            type: 'string',
            title: 'Label',
            validation: Rule => Rule.required(),
        },
        {
            name: 'file',
            type: 'file',
            title: 'File',
            validation: Rule => Rule.required(),
        },
    ],
    preview: {
        select: {
            title: 'label',
            filename: 'file.asset.originalFilename',
        },
        prepare({ title, filename }) {
            return {
                title: title || 'Untitled document',
                subtitle: filename || 'No file uploaded',
            }
        },
    },
  })
