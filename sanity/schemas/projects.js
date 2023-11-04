// schema.js

const project = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
      validation: (Rule) => Rule.required().max(500),
    },
    {
      name: 'live',
      title: 'Live Url',
      type: 'string',
      validation: (Rule) => Rule.required().max(500),
    },
    {
      name: 'repo',
      title: 'Github Repository',
      type: 'string',
      validation: (Rule) => Rule.required().max(500),
    },
    {
      name: 'date',
      title: 'Built At',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          "E-commerce Website", "Landing Page", "Personal Portfolio", "Company Portfolio", "Blog"
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'tools',
      title: 'Tools & Technologies',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
};

export default project