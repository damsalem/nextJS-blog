import sanityClient, { previewClient } from './sanity';
import imageUrlBuilder from '@sanity/image-url';

const blogFields = `
title,
subtitle,
'slug': slug.current,
coverImage,
date,
'author': authors->{name, 'profilePicture': profilePicture.asset->url},
`;

const builder = imageUrlBuilder(sanityClient);
const getClient = preview => preview ? previewClient : sanityClient;

export function urlFor(source) {
    /* This was replaced by the ternary in [slug].js */
    // if (!source.hasOwnProperty('asset') && !source.hasOwnProperty('_ref')) return
    return builder.image(source)
}

export async function getAllBlogs() {
    const results = await sanityClient
    .fetch(`*[_type == "blog"] | order(date desc) {${blogFields}}`);
    return results;
}

export async function getPaginatedBlogs({offset, date}) {
    const results = await sanityClient
    .fetch(`*[_type == "blog"] | order(date ${date}) {${blogFields}}[${offset}...${offset + 6}]`);
    return results;
}

export async function getBlogBySlug(slug, preview) {
    const currentClient = getClient(preview)
    const result = await currentClient
    .fetch(`*[_type == "blog" && slug.current == $slug] {
        ${blogFields}
        content
    }`,{slug})
    .then(res => preview && res.length > 1 ? res[1] : res[0])

    return result;
}