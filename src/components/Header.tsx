import * as React from "react";
import { formatPhoneNumberIntl } from "react-phone-number-input";
import { BiCalendar, BiPhone } from "react-icons/bi";
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

export interface HeaderProps {
  data?: any;
}

const Header = ({ data }: HeaderProps) => {
  let phone = data?.mainPhone ? data.mainPhone : "+12-345678910";

  // if (navigationItem?.subItem?.length > 0) {
  //   return (
  //     <NavDropdown key={index} title={navigationItem.label} id="navbarScrollingDropdown">
  //       {
  //         navigationItem.subItem.map((child: any) => (<NavDropdown.Item key={child.slug} href={`/${child.slug}`}>{child.name}</NavDropdown.Item>))
  //       }
  //     </NavDropdown>
  //   )
  // }

  return (
    <div className='headerwrapper fixed-top pt-2 pt-md-4'>
      <Container>
        <Navbar expand="xl" className='bg-light rounded px-3 row' >
          <div className="col-0 col-xl-5">
            <Navbar.Collapse id="navbarScroll" role="" >
              <Nav navbarScroll >
                {data?.c_navigation?.map((navigationItem: any, index: number) => {
                  if(navigationItem?.label === "Home"){
                    return (<Nav.Link key={index} href={'/'}>{navigationItem.label}</Nav.Link>)
                  }
                  if(navigationItem?.label === "Services"){
                    return (<Nav.Link key={index} href={'#services'}>{navigationItem.label}</Nav.Link>)
                  }
                  if(navigationItem?.label === "Contact Us"){
                    return (<Nav.Link key={index} href={'#contact-us'}>{navigationItem.label}</Nav.Link>)
                  }
                  // if (navigationItem?.label != 'Blog') {
                  //   return (<Nav.Link key={index} href={`${navigationItem.uRL}`}>{navigationItem.label}</Nav.Link>)
                  // }
                })}
              </Nav>
            </Navbar.Collapse>
          </div>
          <div className="col-6 col-xl-2 justify-content-xl-center d-flex">
            <Navbar.Brand className="mx-lg-auto mx-0 my-2 my-lg-0 " href="#">
              <img alt='Logo' src={data?.logo ? data.logo.image.url : `/src/assets/images/Artic-Air-Logo.webp`}></img>
            </Navbar.Brand>
          </div>
          <div className="col-6 col-xl-5 justify-content-end d-flex">
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
              <a href={`tel:${phone}`}>
                <Button className="rounded btn-lg fw-bold" variant="dark">
                  <BiPhone size="25px" />
                  {formatPhoneNumberIntl(phone)}
                </Button>
              </a>
            </div>
            <Navbar.Toggle aria-controls="navbarScroll" />
          </div>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
