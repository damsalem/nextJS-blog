import { useState } from 'react';
import { Row, Button, Col } from 'react-bootstrap';

import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import BlogList from 'components/BlogList';
import CardItemBlank from 'components/CardItemBlank';
import CardListItemBlank from 'components/CardListItemBlank';
import FilteringMenu from 'components/FilteringMenu';
import PreviewAlert from 'components/PreviewAlert';

import { useGetBlogPages } from 'actions/pagination'
import { getPaginatedBlogs } from 'lib/api';

export default function Home({blogs: initialData, preview}) {
  const [filter, setFilter] = useState({
    view: { list: false },
    date: { asc: false }
  });

  const {
    data, 
    size, 
    setSize, 
    hitEnd,
    isValidating
  } = useGetBlogPages({filter}, initialData)

  return (
    <PageLayout>
      { preview && <PreviewAlert/> }
      <AuthorIntro />
      <FilteringMenu 
        filter={filter}
        onChange={(option, value) => {
          setFilter({...filter, [option]: value})
        }
      }
      />
      <hr/>
      <Row className="mb-5">
        <BlogList 
        data={data || [initialData]}
        filter={filter}
        />
        { isValidating && 
          Array(3)
            .fill(0)
            .map((_, i) =>
              filter.view.list ?
              <Col key={`${i}-list-item`} md="9">
                <CardListItemBlank />
              </Col>
              :
              <Col key={`${i}-item`} md="4">
                <CardItemBlank />
              </Col>
            )
        }
      </Row>
      <div style={{textAlign: 'center'}}>
        <Button
          onClick={() => setSize(size + 1)}
          disabled={hitEnd}
          size="lg"
          variant="outline-secondary">
          Load More
        </Button>
      </div>
    </PageLayout>
  )
}

// This function is called during the build (built time)
// This is called on the server, not on the client, it will create a static page
// Provides props to your page
export async function getStaticProps({preview = false}) {
  const blogs = await getPaginatedBlogs({offset: 0, date: 'desc'});
  return {
    props: {blogs, preview},
    revalidate: 1
  }
}