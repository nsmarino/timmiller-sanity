import {defineField} from 'sanity'

export default {
    title: 'Settings',
    name: 'settings',
    type: 'document',
    fields: [
        defineField({
            name: 'mainImage',
            title: 'Hero Image',
            type: 'image',
            options: {
              hotspot: true,
            },
        }),
        defineField({
          name: 'homepage_desc',
          title: 'Homepage Description',
          type: 'blockContent',
        }),
        defineField({
          name: 'public_review_desc',
          title: 'Public Review Description',
          type: 'blockContent',
        }),
        defineField({
            title: 'Hero Links',
            name: 'names',
            type: 'array',
            of: [{type: 'linkBtn'}],
            validation: Rule => [
                Rule.max(3),
              ],
          }),
        {
            title: 'Office Telephone',
            name: 'telephone',
            type: 'string',
        },
        {
            title: 'Office Fax',
            name: 'fax',
            type: 'string',
        },
        {
            title: 'Office Email',
            name: 'email',
            type: 'string',
        },
        {
            title: 'Office Address',
            name: 'address',
            type: 'string',
        },
      ],
}