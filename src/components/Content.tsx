import * as React from "react";
import { Container, Row, Col, Form, Button, Accordion, Carousel } from "react-bootstrap";
import Markdown from 'markdown-to-jsx';
import HubspotForm from "./HubSpotForm";

export interface AboutProps {
  description?: string;
  data: any;
  faq: any;
}

// const apiKey = 'AIzaSyBLPQnC-DUKcZsfOSaZzoCFH8IhCFrNMBw'
const apiKey = 'AIzaSyANR1FGyPAwq23wsi5G2YN0Ro_mF79HrOc'

const Content = ({ description, data, faq }: AboutProps) => {
  const { c_frontPageServiceList,address } = data
  const dynamicAddress = `${address.line1}, ${address.city}, ${address.region}, ${address.postalCode}`

  const hubSpotFormSubmit = async () => {
    var url = `https://api.hsforms.com/submissions/v3/integration/submit/${YEXT_PUBLIC_HUBSPOT_PORTAL_ID}/${YEXT_PUBLIC_HUBSPOT_FORM_ID}`

    // Example request JSON:
    var data = {
      "submittedAt": `${Date.now()}`,
      "fields": [
        {
          "objectTypeId": "0-1",
          "name": "email",
          "value": "example@example.com"
        },
        {
          "objectTypeId": "0-1",
          "name": "firstname",
          "value": "Jeff"
        }
      ],
    }

    const request = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    const response = await request.json()
    console.log(response)

  }
  return (<>
    <section className='residential-section'>
      <Container>
        <Row gap={3} className="align-items-center flex-column-reverse flex-lg-row">
          <Col lg={7}>
            <div>
              <Markdown>{data?.c_heroSection?.markdown}</Markdown>
              {/* <h2 className='heading'>Residential & Commercial HVAC Services</h2>
              <p className='graph-head'>Welcome to Arctic Air, where we are committed to providing our customers with high-quality heating and air conditioning services. We pride ourselves on our commitment to exceptional customer service, expert knowledge, and cutting-edge technology. Our team of skilled professionals ensures that your home or business stays comfortable and relaxed all year round.</p>
              <p className='graph-head'>We believe that our success is built on the trust and satisfaction of our customers. That’s why we are committed to providing reliable, affordable, and timely service whenever you call us. Thank you for choosing Arctic Air av for all your HVAC needs.</p>
              <a href='#' className='link_bold fw-bold'>MORE ABOUT US</a> */}
            </div>
          </Col>
          <Col lg={5} className='mb-lg-0 mb-4'>
            <div className='right-form-hero'>
              <div className="form_img-top">
                <img alt="van image" src={data?.c_truckImage?.url} className="w-100 img-fluid" />
              </div>
              <div className='bg-white p-4 p-md-5 rounded shadow'>
                <h2 className='mb-4'>Request a Free Quote</h2>
                <HubspotForm />
                {/* <Row className='mt-3'>
                  <Col className='contact_wrap-form d-flex gap-3 col align-items-center'>
                    <div>
                      <i className="fa-solid fa-phone-volume"></i>
                    </div>
                    <div className='contact_wrap'>
                      <p className='mb-0'>Hotline</p>
                      <a className='fw-bold underline-0' href='tel:1-661-550-1364'>1-661-550-1364</a>
                    </div>
                  </Col>
                  <Col className='contact_wrap-form d-flex gap-3 col align-items-center'>
                    <div>
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className='contact_wrap'>
                      <p className='mb-0'>Email</p>
                      <a className='fw-bold underline-0' href='mailto:office@arcticairav.com'>office@arcticairav.com</a>
                    </div>
                  </Col>
                </Row> */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section className='why-section'>
      <Container>
        <Row gap={4} className="align-items-center flex-column-reverse flex-lg-row">
          <Col lg={6}>
            <div>
              <h2 className='sub-heading' data-aos="fade-left">Why Choose Us?</h2>
              <p><Markdown>{data?.c_whyChooseUs?.markdown}</Markdown></p>
            </div>
          </Col>
          <Col lg={6}>
            <div>
              <h2 className='sub-heading'>Our Mission</h2>
              <p><Markdown>{data?.c_ourMission?.markdown}</Markdown></p>
            </div>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col lg={6}>
            <div>
              <h2 className='sub-heading'>What to Expect?</h2>
              <p><Markdown>{data?.c_whatToExpect?.markdown}</Markdown></p>
            </div>
          </Col>
          <Col lg={6}>
            <div className='img-why-section'>
              <img alt='Logo' src={data?.c_whySectionImage?.url} className='w-100 img-fluid'></img>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    {c_frontPageServiceList && <section className='our-service-section'>
      <Container>
        <Row className='mb-4'>
          <Col>
            <h2 className='heading fw-bold'>Our Services</h2>
          </Col>
          <Col className='text-end'>
            <Button className="rounded btn-lg fw-bold" variant="primary">MORE ABOUT US</Button>
          </Col>
        </Row>
        <Row gap={4} className="flex-column-reverse flex-lg-row">
          {
            c_frontPageServiceList?.map((serviceList: any) => (
              <Col lg={3} key={serviceList?.name} className='mb-3'>
                <div className='card-wrap bg-white rounded overflow-hidden shadow h-100'>
                  <div className='card-image-wrap'>
                    <img alt='Logo' src={serviceList?.photoGallery?.[0]?.image.url || `/src/assets/images/Heating-Repair-Replacement.jpg`} className='w-100 img-fluid card-image'></img>
                  </div>
                  <div className='content-card text-center p-4 pb-5'>
{/*                     <img alt='Logo' src={`/src/assets/images/air-con.svg`} className='img-fluid'></img> */}
                    <h5 className='my-3'>{serviceList?.name}</h5>
                    <p>{serviceList.description}</p>
                    <a href={`/${serviceList?.slug}`} className='link_bold fw-bold'>VIEW SERVICE »</a>
                  </div>
                </div>
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>}
{/*     <section className='brand-we-section'>
      <Container>
        <Row className='mb-4'>
          <Col>
            <h2 className='text-center heading fw-bold'>Brands We offer.</h2>
          </Col>
        </Row>
        <Row className='mb-4'>
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
        </Row>
      </Container>
    </section> */}
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
            <div className='truck_image-wrap' data-aos="slide-left" data-aos-duration="4000">
              <img alt='truck' src={data?.c_truckImage?.url} className='image_truck img-fluid'></img></div>
          </Col>
        </Row>
      </Container>
    </section>
{/*     <section className='faq-section'>
      <Container>
        <Row className='mb-4'>
          <Col>
            <h2 className='text-center heading fw-bold'>FAQs</h2>
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col>
            <Accordion defaultActiveKey="0">
              {
                faq?.map((value: any, index: number) => {
                  return (<Accordion.Item key={value.question} eventKey={`${index}`}>
                    <Accordion.Header>{value.question}</Accordion.Header>
                    <Accordion.Body dangerouslySetInnerHTML={{ __html: value?.answerV2?.html }}></Accordion.Body>
                  </Accordion.Item>)
                })
              }

            </Accordion>
          </Col>
        </Row>
      </Container>
    </section> */}
    <section className='service-area-section'>
      <Row className=''>
        <Col lg={12}>
          <iframe
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q==${encodeURIComponent(dynamicAddress)}&center=${data?.yextDisplayCoordinate?.latitude},${data?.yextDisplayCoordinate?.longitude}`}
            // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48873.36734203019!2d-76.34154879880614!3d40.04003386764921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6248b917214b9%3A0xb46790d030dbd2d6!2sLancaster%2C%20PA%2C%20USA!5e0!3m2!1sen!2sin!4v1695631060701!5m2!1sen!2sin"
            >
          </iframe>
        </Col>
      </Row>
    </section>
  </>);
};

export default Content;
