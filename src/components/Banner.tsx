import { Link } from "@yext/sites-components";
import * as React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export interface BannerProps {
  name?: string;
  paragraph?: string;
  coverPhoto?: any;
  description:string;
}

const Banner = ({ name, description, coverPhoto }: BannerProps) => {

  return(
    <div id="home" className='hero-section' style={{ backgroundImage: `url(${coverPhoto?.url})` }}>
      <section className='hero-content'>
          <Container>
              <Row>
                  <Col xs={12} md={12} lg={7}>
                      <div>
                          <h1 className='hero-heading'>{name || 'Arctic Air'}</h1>
                          <p className='hero-description'>{description}</p>
                          <Link href="/contact-us">
                            <Button className="rounded btn-lg fw-bold" variant="primary">
                              CONTACT US
                            </Button>
                          </Link>
                      </div>
                  </Col>
              </Row>
          </Container>
      </section>
    </div>
  )
};

export default Banner;
