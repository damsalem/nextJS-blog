import { Col } from 'react-bootstrap';
import CardListItem from 'components/CardListItem';
import CardItem from 'components/CardItem';
import moment from 'moment'

export default function BlogList({data, filter}) {
    return data.map(page => page.map(blog =>
      filter.view.list ?
        <Col key={`${blog.slug}-list`} md="10">
          <CardListItem 
            title={blog.title} 
            subtitle={blog.subtitle}
            image={blog.coverImage}
            date={moment(blog.date).format('LL')}
            author={blog.author}
            link={{
              href: '/blogs/[slug]',
              as: `/blogs/${blog.slug}`
            }}
          />
        </Col>
        :
        <Col key={`${blog.slug}-card`} md="4">
          <CardItem 
          title={blog.title} 
          subtitle={blog.subtitle}
          image={blog.coverImage}
          date={moment(blog.date).format('LL')}
          author={blog.author}
          link={{
            href: '/blogs/[slug]',
            as: `/blogs/${blog.slug}`
          }}
          />
        </Col>
    ))
  };