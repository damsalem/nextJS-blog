export default function exitPreview(_, res) {
    res
        .clearPreviewData()
        .writeHead(307, {Location: '/'})
        .end()
}