import * as React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import HubSpotForm from "./HubSpotForm";
import FormModal from "./FormModal";
import { Link } from "@yext/sites-components";

export interface BannerProps {
  name?: string;
  coverPhotoHeading?: string;
  paragraph?: string;
  phoneNumber? : string;
  coverPhoto?: any;
  description:string;
  serviceArea:string;
  trade:string;
}

const Banner = ({ coverPhotoHeading, phoneNumber, coverPhoto, serviceArea, trade }: BannerProps) => {

  const [showModal, setShowModal] = React.useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return(
    <>
      <div id="home" className='hero-section' style={{ backgroundImage: `url(${coverPhoto?.url})` }}>
        <section className='hero-content'>
          <Container>
            <Row>
              <Col xs={12} md={12} lg={6}>
                <div className="me-lg-5 mb-5 me-sm-5" >
                  <p className='hero-heading'>{coverPhotoHeading}</p>
                  {/* <h1 className='hero-description'>{description}</h1> */}
                  <h1 className='hero-description'>{trade} Service in the {serviceArea} Area</h1>
                  <Button className="btn-lg me-4 btn-cus" onClick={() => toggleModal()} variant="success">
                    Get A Free Estimate
                  </Button>
                  <Link href={`tel:${phoneNumber}`}>
                    <Button className="btn-lg btn-cus" variant="outline-light">
                      Call Us Now
                    </Button>
                  </Link>
                </div>
              </Col>
              <Col lg={1}></Col>
              <Col xs={12} md={12} lg={5}>
                <div className="banner-form">
                  <h2 className="banner-form-heading mb-3">Get A Free Estimate</h2>
                  <HubSpotForm />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
      <FormModal showModal={showModal} hideModal={() => toggleModal()} />
    </>
  )
};

export default Banner;
