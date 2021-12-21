import PageLayout from 'components/PageLayout';
import BlogHeader from 'components/BlogHeader';
import BlogContent from 'components/BlogContent';
import PreviewAlert from 'components/PreviewAlert';
import ErrorPage from 'next/error';
import { getBlogBySlug, getPaginatedBlogs } from 'lib/api';
import { Row, Col } from 'react-bootstrap';
import { urlFor } from 'lib/api';
import moment from 'moment'

import { useRouter } from 'next/dist/client/router';

const BlogDetail = ({blog, preview}) => {

    const router = useRouter();

    if (!router.isFallback && !blog?.slug) {
        return <ErrorPage statusCode="404"/>
    }

    if (router.isFallback) {
        return (
            <PageLayout className="blog-detail-page">
                Loading...
            </PageLayout>
        )
    }

    return (
        <PageLayout className="blog-detail-page">
        <Row>
            <Col md={{ span: 10, offset: 1 }}>
                { preview && <PreviewAlert/> }
                <BlogHeader
                    author={blog.author}
                    date={moment(blog.date).format('LL')}
                    title={blog.title}
                    subtitle={blog.subtitle}
                    coverImage={blog.coverImage?.asset ? urlFor(blog.coverImage).height(500).url() : undefined}
                />
            <hr/>
            { blog.content && <BlogContent content={blog.content}/> }
          </Col>
        </Row>
      </PageLayout>
    )
}

export async function getStaticProps({params, preview = false, previewData}) {
    const blog = await getBlogBySlug(params.slug, preview);
    return {
        props: {blog, preview},
        revalidate: 1
    }
}

export async function getStaticPaths() {
    const blogs = await getPaginatedBlogs({offset: 0, date: 'desc'});
    const paths = blogs?.map(blog => ({params: {slug: blog.slug}}))
    return {
        paths,
        fallback: true
    }
}

export default BlogDetail