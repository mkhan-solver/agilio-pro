import * as React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import FormModal from "./FormModal";

export interface AboutProps {
  data: any;
}

const Content = ({ data }: AboutProps) => {
  const { name, c_review, c_serviceOfferings, c_subServiceAreas, c_serviceArea, services, c_trade, c_businessExperience } = data

  const [showModal, setShowModal] = React.useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <section className='residential-section'>
        <Container>
          <Row gap={3} className="align-items-center flex-lg-row">
            <Col xs={12}>
              <p className="fw-bold mb-5 review-heading">What do our customers have to say?</p>
            </Col>
          </Row>
          <Row gap={3} className="align-items-top flex-lg-row justify-content-between">
            {c_review && c_review?.map((item: any, index: any) => {
              return (
                <Col xs={12} md={4} className="mb-4" key={index}>
                  <div>
                    <FaStar size="25px" />
                    <FaStar size="25px" />
                    <FaStar size="25px" />
                    <FaStar size="25px" />
                    <FaStar size="25px" />
                  </div>
                  <p className="fw-bold mt-4 mb-4 review-text">{item.comment}</p>
                  <img width={50} src={item.reviewerLogo.url}></img>
                  <h6 className="mt-4">{item.reviewerName}</h6>
                  <span>{item.city}, {item.state}</span>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
      <section className='why-section'>
        <Container>
          <h2 className="offer-heading">{services[0] || ''} Services {name} Offers</h2>
          <Row>
            <Col lg={6}>
              {c_serviceOfferings && c_serviceOfferings.map((item:any, index: any) => {
                return (
                  <div className="p-4 mb-5 service-card" key={index}>
                    <h3>{item.offerHeading}</h3>
                    <p>{item.offerDescription}</p>
                    <a onClick={() => toggleModal()}>
                      Get A Free Estimate 
                      <FaArrowRight/>
                    </a>
                  </div>
                );
              })}
            </Col>
            <Col lg={6}>
              <div className='img-why-section px-5'>
                <div className="p-4 mb-4 row align-items-center">
                  <div className="col-3 why-us-number-main">
                    <span className="why-us-number">1</span>
                  </div>
                  <div className="col-9">
                    <p className="steps-heading">Reach Out</p>
                    <p className="steps-disc mb-0">
                      <a href={`tel:${data?._site?.mainPhone}`} className="link-text">Call us</a> or fill out a <a href='javascript:void(0)' onClick={() => toggleModal()} className="link-text">form</a> here on our website detailing the issues you’re currently experiencing with your HVAC system.
                    </p>
                  </div>
                </div>
                <div className="p-4 mb-4 row align-items-center">
                  <div className="col-3 why-us-number-main">
                    <span className="why-us-number">2</span>
                  </div>
                  <div className="col-9">
                  <p className="steps-heading">Receive a Quote</p>
                  <p className="steps-disc mb-0">Our trained technician will come to your home and assess the situation. The technician will then present you a quote for the work that needs to be done.</p>
                  </div>
                </div>
                <div className="p-4 mb-4 row align-items-center">
                  <div className="col-3 why-us-number-main no-after">
                    <span className="why-us-number">3</span>
                  </div>
                  <div className="col-9">
                  <p className="steps-heading">Service Begins!</p>
                  <p className="steps-disc mb-0">At {name}, we pride ourselves in providing only top quality service to our customers. Reach out today to schedule your free quote!</p>
                  </div>
                </div>
               
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='our-service-section'>
        <Container>
          <Row className='mb-4'>
            <Col xs={12} sm={6} id="services">
              <h4 className='heading fw-bold special-heading'>{c_serviceArea}'s #1 Choice for {c_trade}</h4>
            </Col>
            <Col xs={12} sm={6} className='text-start'>
              <p className="special-text mb-4">For more than {c_businessExperience} years, {name} has served the {c_serviceArea} area. Our licensed, trained and insured technicians are backed by our 100% satisfaction guarantee.</p>
              <Button className="btn-lg mt-3 btn-cus" variant="success" onClick={() => toggleModal()}>
                Get A Free Estimate
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='service-area-section'>
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col lg={6} >
              <h5 className="service-heading mb-4">{c_trade} the {c_serviceArea} Area</h5>
              <ul className="area-list" >
                {c_subServiceAreas && c_subServiceAreas.map((item: any, index: any) => {
                  return (
                    <li className="col-3" key={index}>
                      <h6 className="service-area">{item}</h6>
                    </li>
                  );
                })}
              </ul>
            </Col>
            <Col lg={5}>
              <iframe
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                // src={`https://www.google.com/maps/embed/v1/place?key=${YEXT_PUBLIC_GOOGLE_MAP_API_KEY}&q==${encodeURIComponent(dynamicAddress)}&center=${data?.yextDisplayCoordinate?.latitude},${data?.yextDisplayCoordinate?.longitude}`}
                src={`https://www.google.com/maps/embed/v1/place?key=${YEXT_PUBLIC_GOOGLE_MAP_API_KEY}&q==${c_serviceArea}`}
              >
              </iframe>
            </Col>
          </Row>
        </Container>
      </section>
      <FormModal showModal={showModal} hideModal={() => toggleModal()} />
    </>
  );
};

export default Content;
