import { defineType } from 'sanity'

// A heading that groups the public documents listed after it, e.g. "FEIS Addendum 9/17/15:"
export default defineType ({
    name: 'documentSectionLabel',
    title: 'Section Heading',
    type: 'object',
    fields: [
        {
            name: 'label',
            type: 'string',
            title: 'Label',
            validation: Rule => Rule.required(),
        },
    ],
    preview: {
        select: {
            title: 'label',
        },
        prepare({ title }) {
            return {
                title: title || 'Untitled section',
                subtitle: 'Section heading',
            }
        },
    },
  })
