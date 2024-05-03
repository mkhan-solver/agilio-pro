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
            <div className="col-6 col-xl-6 col-sm-4 justify-content-md-start justify-content-center d-flex">
              <Navbar.Brand  href="#">
                <img width={"80%"} src={data.logo.image.url} className="img-fluid"></img>
              </Navbar.Brand>
            </div>
            <div className="col-6 col-xl-6 col-sm-8 justify-content-end d-flex">
              <div className='d-flex gap-3 me-3'>
                <Link href={`tel:${phone}`}>
                  <Button className="btn-lg btn-cus btn-call" variant="outline-dark">
                    Call {formatPhoneNumberIntl(phone)}
                  </Button>
                </Link>
                <Button onClick={() => toggleModal()} className="btn-lg btn-cus est-btn" variant="success">
                  Get A Free Estimate
                </Button>
              </div>
            </div>
          </Navbar>
        </Container>
      </div>
      <FormModal showModal={showModal} hideModal={() => toggleModal()} />
    </>
  );
};

export default Header;
