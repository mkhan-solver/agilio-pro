import * as React from "react";
import {
  Instagram,
  Twitter,
} from "../assets/svgs/SocialIcons";
import { Col, Container, Row } from "react-bootstrap";
import { formatPhoneNumberIntl } from "react-phone-number-input";

export interface FooterProps {
  _site?: any;
  logo?: string;
  paragraph?: string;
  data: any;
  templateData: any;
}

const currentTime = new Date();
const year = currentTime.getFullYear();

const Footer = ({ data, templateData }: FooterProps) => {
  const { address, mainPhone, emails, description, c_frontPageServiceList, c_footerLogo, name } = data || {}
  const dynamicAddress = `${address.line1}, ${address.city}, ${address.region}, ${address.postalCode}`
  // console.log('template data', templateData)
  function formatOpeningHours(hours: any) {
    const daysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  
    const convertTo3LetterDay = (day: string) => {
      return day.charAt(0).toUpperCase() + day.slice(1, 3).toLowerCase();
    };

    const convertTo12HourFormat = (time: any) => {
      const [hours, minutes] = time.split(":");
      const parsedHours = parseInt(hours, 10);
      const period = parsedHours >= 12 ? "PM" : "AM";
      const formattedHours = parsedHours % 12 || 12;
      return `${formattedHours}:${minutes} ${period}`;
    };
  
    const formattedHours = daysOfWeek.map((day) => {
      const dayInfo = hours[day];
      
      if (!dayInfo) {
        return { day: convertTo3LetterDay(day), openIntervals: "Closed" };
      }
  
      if (dayInfo.isClosed) {
        return { day: convertTo3LetterDay(day), openIntervals: "Closed" };
      }
  
      const openIntervals = dayInfo.openIntervals.map((interval:any) => {
        return {
          start: convertTo12HourFormat(interval.start),
          end: convertTo12HourFormat(interval.end),
        };
      });
  
      return { day: convertTo3LetterDay(day), openIntervals };
    });
  
    return formattedHours;
  }

  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col lg={3}>
              <div className='logo-wrap'>
                {c_footerLogo &&
                  <a href='#' className='d-block mb-3'>
                    <img alt='Logo' src={c_footerLogo?.image?.url} className='footer_logo'></img>
                  </a>
                }
                <p>{description}</p>
              </div>
              <div className='content_info'>
                <ul>
                  <li>
                    <a href={`tel:${mainPhone}`}>
                      {formatPhoneNumberIntl(mainPhone)}
                    </a>
                  </li>
                  <li>
                    <a href='mailto:office@arcticairav.com'>
                      {emails?.[0] || '-'}
                    </a>
                  </li>
                </ul>
              </div>
              <div className='footer-social-icons'>
                <ul>
                  <li>
                    <a href='#'>
                      <Twitter width={'20px'} height={'20px'}/>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <Instagram width={'20px'} height={'20px'} />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            {/* <Col lg={2}>
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
                <div className='footer-social-icons'>
                  <ul>
                    <li>
                      <a href='#'>
                        <Twitter width={'20px'} height={'20px'}/>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <Instagram width={'20px'} height={'20px'} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col> */}
            <Col lg={3}>
              <div className='footer-wrap-col'>
                <h3>Open Hours</h3>
              </div>
              <div className='content_info'>
                <ul>
                  {formatOpeningHours(templateData?.hours).map(item => (
                    <li>
                      <p>{item.day} : {item.openIntervals === 'Closed'? item.openIntervals: `${item.openIntervals[0].start} - ${item.openIntervals[0].end}`}</p>
                    </li>
                  ))}
                </ul>
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
                    src={`https://www.google.com/maps/embed/v1/place?key=${YEXT_PUBLIC_GOOGLE_MAP_API_KEY}&q==${encodeURIComponent(dynamicAddress)}`}
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
