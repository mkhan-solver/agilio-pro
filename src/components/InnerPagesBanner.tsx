import * as React from "react";
import { Image } from "@yext/sites-components";
import { Container, Row, Col, Button } from "react-bootstrap";

export interface BannerProps {
  name?: string;
  description?: string;
  photoGallery?: any;
}

const InnerPagesBanner = ({ name,description, photoGallery }: BannerProps) => {


  return(<div className='hero-section bg-static_img' style={{ backgroundImage: `url(${photoGallery ? photoGallery[0].image?.url:`/src/assets/images/Cta-Banner-1.jpg` })` }}>
                    
  <section className='hero-content'>
      <Container className="inner-banner-content text-center">
          <Row className="mx-auto" xs={8} md={8}>
              <Col>
                  <div>
                    <div className="sub_title_banner"><h4 className="fw-bold">ARCTIC AIR</h4></div>
                    <h1 className='hero-heading'>{name || 'Arctic Air'}</h1>
                    <p className='hero-description'>{description}</p>
                  </div>
              </Col>
          </Row>
      </Container>
  </section>
</div>);
};

export default InnerPagesBanner;
