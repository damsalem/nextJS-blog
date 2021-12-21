import { getBlogBySlug } from 'lib/api'

export default async function enablePreview (req, res) {
    if (req.query.secret != process.env.SANITY_PREVIEW_SECRET || !req.query.slug) {
        return res.status(401).json({message: "Invalid request"})
    }

    const blog = await getBlogBySlug(req.query.slug, true);

    if (!blog) {
        return res.status(401).json({message: "Invalid slug"})
    }

    res
        .setPreviewData({})
        .writeHead(307, { Location: `/blogs/${blog.slug}` })
        .end();
}