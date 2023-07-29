import {defineField} from 'sanity'

export default {
    title: 'Staff',
    name: 'staff',
    type: 'document',
    fields: [

        {
            name: 'headshot',
            title: 'Headshot',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: 'name',
            type: 'string',
            title: 'Name',
            validation: Rule => [
              Rule.required(),
            ],
        },
        {
            name: 'role',
            type: 'string',
            title: 'Job Title',
            validation: Rule => [
              Rule.required(),
            ],
        },
        {
            title: 'Email',
            name: 'email',
            type: 'string',
        },
      ],
}