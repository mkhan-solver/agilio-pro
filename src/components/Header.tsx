import * as React from "react";
import { formatPhoneNumberIntl } from "react-phone-number-input";
import { Container, Navbar, Button } from "react-bootstrap";
import FormModal from "./FormModal";
import { Link } from "@yext/sites-components";

export interface HeaderProps {
  data?: any;
}

const Header = ({ data }: HeaderProps) => {
  let phone = data?.mainPhone ? data.mainPhone : "+123-456-78910";
  const [showModal, setShowModal] = React.useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className='headerwrapper py-1'>
        <Container>
          <Navbar expand="xl" className='bg rounded px-3 row' >
            <div className="col-6 col-xl-6 justify-content-start d-flex">
              <Navbar.Brand  href="#">
                <img width={80} height={80} src={data?.logo?.image?.url}></img>
                {/* <img src={`/src/assets/images/smart_hvac.png`}></img> */}
              </Navbar.Brand>
            </div>
            <div className="col-6 col-xl-6 justify-content-end d-flex">
              <div className='d-md-flex d-none gap-3 me-3'>
                {/* <a>
                  <Button className="rounded btn-lg fw-bold" variant="outline-dark">
                    <BiCalendar style={{ marginRight: '3px' }} size="25px" />
                    Schedule Now
                  </Button>
                </a> */}
                {/* <a href='#'>
                  <img alt='Logo' src={data?.c_googleReview ? data?.c_googleReview.image.url: `/src/assets/images/5Stars.webp`} width={100}></img>
                </a> */}
                <Link href={`tel:${phone}`}>
                  <Button className="btn-lg btn-cus" variant="outline-dark">
                    Call or Text {formatPhoneNumberIntl(phone)}
                  </Button>
                </Link>
                <Button onClick={() => toggleModal()} className="btn-lg btn-cus" variant="success">
                  Get A Free Estimate
                </Button>
              </div>
              <Navbar.Toggle aria-controls="navbarScroll" />
            </div>
          </Navbar>
        </Container>
      </div>
      <FormModal showModal={showModal} hideModal={() => toggleModal()} />
    </>
  );
};

export default Header;
