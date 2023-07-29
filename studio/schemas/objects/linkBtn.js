import { defineType } from 'sanity'

export default defineType ({
    name: 'linkBtn',
    type: 'object',
    fields: [
      {
        name: 'label',
        type: 'string',
        title: 'Label',
        validation: Rule => [
          Rule.required(),
        ],
      },
      {
        name: 'url',
        type: 'url',
        title: 'URL',
        validation: Rule => [
            Rule.required(),
          ],
      }
    ]
  }) 

