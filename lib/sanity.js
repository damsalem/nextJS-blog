import sanityClient from '@sanity/client';

const options = {
    dataset: process.env.SANITY_DATASET_NAME,
    projectId: process.env.SANITY_PROJECT_ID,
    apiVersion: '2021-12-06',
    useCdn: process.env.NODE_ENV === 'production'
    // useCdn === true gives you faster response, it will also be cached
    // useCdn === false gives you a slower response, it will be latest data
}

export const previewClient = sanityClient({
    ...options,
    useCdn: false,
    token: process.env.SANITY_API_TOKEN
})

export default sanityClient(options);