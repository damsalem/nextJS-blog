import BlockContent from '@sanity/block-content-to-react';
import HighlightCode from './HighlightCode';
import { urlFor } from 'lib/api';

const serializers = {
    types: {
        code: ({node: {language, code, filename}}) => {
            return (
                <HighlightCode language={language}>
                    {code}
                    <div className='code-filename'>{filename}</div>
                </HighlightCode>
            )
        },
        image: ({node: {asset, alt, position}}) => {
            const extraImageClass = position ? ` blog-image-${position}` : '';

            return (
                <div className={`blog-image${extraImageClass}`}>
                    <img src={urlFor(asset).height(400).fit('max').url()} alt={alt} />
                    <div className='image-alt'>{alt}</div>
                </div>
            )
        }
    }
}

const BlogContent = ({content} = {}) => {
    return (
        <BlockContent
            imageOptions={{w: 320, h: 280, fit: 'max'}}
            blocks={content}
            serializers={serializers}
        />
    )
}

export default BlogContent;