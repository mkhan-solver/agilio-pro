import * as React from "react";
import {
  Facebook,
  GitHub,
  Instagram,
  Twitter,
  YouTube,
} from "../assets/svgs/SocialIcons";
import { Col, Container, Row } from "react-bootstrap";
import { formatPhoneNumberIntl } from "react-phone-number-input";

export interface FooterProps {
  _site?: any;
  logo?: string;
  paragraph?: string;
  data: any;
}

const currentTime = new Date();
const year = currentTime.getFullYear();
const apiKey = 'AIzaSyBLPQnC-DUKcZsfOSaZzoCFH8IhCFrNMBw'

const navigation = {
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (
        props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
      ) => <Facebook {...props} />,
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
      ) => <Instagram {...props} />,
    },
    {
      name: "Twitter",
      href: "#",
      icon: (
        props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
      ) => <Twitter {...props} />,
    },
    {
      name: "GitHub",
      href: "#",
      icon: (
        props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
      ) => <GitHub {...props} />,
    },
    {
      name: "YouTube",
      href: "#",
      icon: (
        props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
      ) => <YouTube {...props} />,
    },
  ],
};

const Footer = ({ data }: FooterProps) => {
  const { address, mainPhone, emails, description, c_frontPageServiceList, c_footerLogo, name, yextDisplayCoordinate } = data || {}
  const dynamicAddress = `${address.line1}, ${address.city}, ${address.region}, ${address.postalCode}`

  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col lg={3}>
              <div className='logo-wrap'>
                {c_footerLogo && <a href='#' className='d-block mb-3'>
                  <img alt='Logo' src={c_footerLogo?.image?.url} className='footer_logo'></img>
                </a>}
                <p>{description}</p>
              </div>
            </Col>
            <Col lg={3}>
              <div className='logo-wrap'>
                <div className='footer-wrap-col'>
                  <h3>Contact Info</h3>
                </div>
                <div className='content_info'>
                  <ul>
                    <li>
                      <i className="fa-solid fa-location-dot"></i>
                      <a href='https://maps.app.goo.gl/qhCKj5gNxMAFtqZx9'>
                        {`${address?.line1}, ${address?.city} ${address?.countryCode} ${address?.postalCode}`}
                      </a>
                    </li>
                    <li>
                      <i className="fa-solid fa-phone"></i>
                      <a href={`tel:${mainPhone}`}>
                        {formatPhoneNumberIntl(mainPhone)}
                      </a>
                    </li>
                    <li>
                      <i className="fa-solid fa-envelope"></i>
                      <a href='mailto:office@arcticairav.com'>
                        {emails?.[0] || '-'}
                      </a>
                    </li>
                    <li>
                      <i className="fa-solid fa-envelope"></i>
                      <p>License Number - 1002363</p>
                    </li>
                  </ul>
                </div>
                <div className='footer-wrap-col'>
                  <h3>Open Hours:</h3>
                </div>
                <div className='content_info'>
                  <ul>
                    <li>
                      <i className="fa-regular fa-clock"></i>
                      <p>Mon – Fri: 7am - 4pm</p>
                    </li>
                    <li>
                      <i className="fa-regular fa-clock"></i>
                      <p>Sat - Sun: Closed</p>
                    </li>
                  </ul>
                </div>
                <div className='footer-social-icons'>
                  <ul>
                    <li>
                      <a href='#'>
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className="fa-brands fa-google"></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className="fa-brands fa-yelp"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className='logo-wrap'>
                <div className='footer-wrap-col'>
                  <h3>Our Services</h3>
                </div>
                <div className='content_info'>
                  <ul>
                    {
                      c_frontPageServiceList?.map((serviceListArr: any) => (<li key={serviceListArr.slug}>
                        <a href={`/${serviceListArr.slug}`}>{serviceListArr.name}</a>
                      </li>))
                    }
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className='logo-wrap'>
                <div className='footer-wrap-col'>
                  <h3>Our Location</h3>
                </div>
                <div className='location_out'>
                  <iframe
                    src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q==${encodeURIComponent(dynamicAddress)}&center=${yextDisplayCoordinate?.latitude},${yextDisplayCoordinate?.longitude}`}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  >
                  </iframe>
                </div>
              </div>
            </Col>
          </Row>

        </Container>
      </footer>
      <Row className='text-center copyright'>
        <Col>
          <Container>
            <p><i aria-hidden="true" className="far fa-copyright"></i> {year}. All rights reserved by <a href='/' style={{ textTransform: 'uppercase' }}>{name}</a>.</p>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default Footer;
