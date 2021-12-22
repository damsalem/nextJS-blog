import { Row, Col, Media, Image } from 'react-bootstrap';

const AuthorIntro = () =>
    <Row>
        <Col md="8">
            <Media className="mb-4 admin-intro">
            <Image
                roundedCircle
                width={64}
                height={64}
                className="mr-3"
                src="https://avatars.githubusercontent.com/u/43794460?v=4"
                alt="Generic placeholder"
            />
            <Media.Body>
                <h5 className="font-weight-bold mb-0">Hello Friends,</h5>
                <p className="welcome-text">
                My name is Dani Amsalem, I&apos;m a web developer and this is my first NextJS and Sanity CMS project.
                </p>
            </Media.Body>
            </Media>
        </Col>
    </Row>

export default AuthorIntro;