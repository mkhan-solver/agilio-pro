import { Link } from "@yext/sites-components";
import * as React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export interface BannerProps {
  name?: string;
  paragraph?: string;
  coverPhoto?: any;
  description:string;
}

const Banner = ({ name, description, coverPhoto }: BannerProps) => {

  return(<div className='hero-section' style={{ backgroundImage: `url(${coverPhoto?.url})` }}>
                    
  <section className='hero-content'>
      <Container>
          <Row>
              <Col xs={12} md={12} lg={7}>
                  <div>
                      <h1 className='hero-heading'>{name || 'Arctic Air'}</h1>
                      <p className='hero-description'>{description}</p>
                      <Link href="/contact-us">
                        <Button className="rounded btn-lg fw-bold" variant="primary">
                          CONTACT US
                        </Button>
                      </Link>
                  </div>
              </Col>
          </Row>
      </Container>
  </section>
</div>)
// Our mission at Arctic Air is to provide superior air conditioning and heating services to our customers with a commitment to quality, innovation, and sustainability. As a team, we strive to create comfortable and energy-efficient indoor environments for homes and businesses across the region. We are dedicated to staying ahead of the curve in our industry, utilizing cutting-edge technology and methods to exceed our client’s expectations.
  // return (
  //   <>

  //     {photoGallery ?
  //       // If a photo is present, use it as background overlay
  //       <div className="relative bg-gray-800 h-96">
  //         <Image image={photoGallery[0]} className="absolute inset-0 w-full h-full object-cover" />
  //         <div className="absolute inset-0 bg-black opacity-60"></div>
  //         <div className="absolute inset-0 flex flex-col items-center justify-center mx-auto max-w-2xl text-center">
  //           <h1 className="text-4xl font-bold tracking-normal text-white sm:text-6xl">{name}</h1>
  //           <p className="mt-6 text-lg leading-8 text-gray-100 tracking-wide">
  //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  //           </p>
  //         </div>
  //       </div>
  //       :
  //       // Otherwise, use a colored background overlay
  //       <div className="bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
  //         <div className="mx-auto max-w-2xl text-center">
  //           <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">{name}</h2>
  //           <p className="mt-6 text-lg leading-8 text-gray-300">
  //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  //           </p>
  //         </div>
  //       </div>
  //     }
  //   </>
  // );
};

export default Banner;
