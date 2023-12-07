import * as React from "react";
import { Container, Row, Col, Form, Button, Accordion } from "react-bootstrap";
import Markdown from 'markdown-to-jsx';
import Carousel from "./Carousel";
import HubSpotForm from "./HubSpotForm";

export interface InnerPageLayoutProps {
    description?: string;
    data: any;
}

const InnerPageLayout = ({ data }: InnerPageLayoutProps) => {
    if (data?.c_blogList) {
        return (<section className='our-service-section'>
            <Container>
                <Row gap={4} className="flex-column-reverse flex-lg-row">
                    {
                        data?.c_blogList?.map((blogArr: any) => (
                            <Col lg={3} className='mb-3'>
                                <div className='card-wrap bg-white rounded overflow-hidden shadow h-100'>
                                    <div className='card-image-wrap'>
                                        <img alt='Logo' src={`https://wmmedia.sgp1.cdn.digitaloceanspaces.com/blog.png`} className='w-100 img-fluid card-image'></img>
                                    </div>
                                    <div className='content-card text-center p-4 pb-5'>
                                        <h5 className='my-3'>{blogArr?.name}</h5>
                                        <p>{blogArr.description}</p>
                                        <a href={`/${blogArr?.slug}`} className='link_bold fw-bold'>Read More »</a>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>)
    }

    return (<>
        <section className='residential-section'>
            <Container>
                <Row gap={3} className="flex-column-reverse flex-lg-row">
                    <Col lg={7}>
                        <Carousel photoGallery={data.photoGallery} />
                        <div>
                            <Markdown>{data?.bodyV2?.markdown}</Markdown>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="bg-light p-4 p-md-5 shadow-sm rounded">
                            <HubSpotForm />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className='brand-we-section'>
            <Container>
                <Row className='mb-4'>
                    <Col>
                        <h2 className='text-center heading fw-bold'>Brands We offer.</h2>
                    </Col>
                </Row>
                {/* <Row className='mb-4'>
          <Col className='text-center'>
            <Carousel>
              <div className='mx-2'><img alt='Logo' src={`/src/assets/images/air-con.svg`} className='img-fluid'></img></div>
              <div className='mx-2'><img alt='Logo' src={`/src/assets/images/air-con.svg`} className='img-fluid'></img></div>
              <div className='mx-2'><img alt='Logo' src={`/src/assets/images/air-con.svg`} className='img-fluid'></img></div>
              <div className='mx-2'><img alt='Logo' src={`/src/assets/images/air-con.svg`} className='img-fluid'></img></div>
              <div className='mx-2'><img alt='Logo' src={`/src/assets/images/air-con.svg`} className='img-fluid'></img></div>
              <div className='mx-2'><img alt='Logo' src={`/src/assets/images/air-con.svg`} className='img-fluid'></img></div>
              <div className='mx-2'><img alt='Logo' src={`/src/assets/images/air-con.svg`} className='img-fluid'></img></div>
            </Carousel>
          </Col>
        </Row> */}
            </Container>
        </section>
        <section className='get-a-quote-section'>
            <Container>
                <Row className='mb-4'>
                    <Col>
                        <h2 className='text-center heading fw-bold'>GET A FREE QUOTE NOW</h2>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center'>
                        <Button className="rounded btn-lg fw-bold" variant="dark">GET A QUOTE</Button>
                        <div className='truck_image-wrap' data-aos="slide-left" data-aos-duration="4000"><img alt='truck' src={`/src/assets/images/Arctic-Air-CA.webp`} className='image_truck img-fluid'></img></div>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className='faq-section'>
            <Container>
                <Row className='mb-4'>
                    <Col>
                        <h2 className='text-center heading fw-bold'>FAQs</h2>
                    </Col>
                </Row>
                <Row className='mb-4'>
                    <Col>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What kind of services does Arctic Air offer?</Accordion.Header>
                                <Accordion.Body>
                                    We specialize in providing high-quality heating, ventilation, and air conditioning (HVAC) services to both residential and commercial customers. Our services include installation, repair, and maintenance of HVAC systems, as well as indoor air quality testing and improvement.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>How long has Arctic Air been in business?</Accordion.Header>
                                <Accordion.Body>
                                    Our company has been serving customers in the HVAC industry for over 20 years. We have built a strong reputation for providing reliable and efficient services, and we are committed to continuing to deliver top-notch HVAC solutions to our clients.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className='service-area-section'>
            <Row className=''>
                <Col lg={12}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48873.36734203019!2d-76.34154879880614!3d40.04003386764921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6248b917214b9%3A0xb46790d030dbd2d6!2sLancaster%2C%20PA%2C%20USA!5e0!3m2!1sen!2sin!4v1695631060701!5m2!1sen!2sin" width="100%" height="300" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </Col>
            </Row>
        </section>
    </>);
};

export default InnerPageLayout;
