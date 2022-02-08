import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'ql0vwm05',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skK1UaaIswS2O776sP9lRjgEPJIIFBhmHrTPscRtGvYkTl5r3xJORwtRssj6LfQsrh0XGhs0oCOJz5QepN7lvW0jnmHRCRKbPg92vvtOjjVsgI5Q2nhv230cnz7o9DJYhTcvBgw2mfv0kOxaQb5hzHhvOlujqomB9K4maPeoRssRZwApMfgd',
  useCdn: false,
})
