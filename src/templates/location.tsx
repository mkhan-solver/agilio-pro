import * as React from "react";
import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import { fetch } from "@yext/pages/util";
import "../index.css";
import Favicon from "../assets/images/yext-favicon.ico";
import Content from "../components/Content";
import Banner from "../components/Banner";
import PageLayout from "../components/PageLayout";
import Schema from "../components/Schema";

export const config: TemplateConfig = {
  stream: {
    $id: "Location",
    filter: {
      entityIds: [YEXT_PUBLIC_LOCATION_ENTITY_ID],
    },
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "description",
      "slug",
      "services",
      "c_serviceArea",
      "emails",
      "yextDisplayCoordinate",
      "c_backgroundColor",
      "c_heroSection",
      "c_coverPhoto",
      "c_coverPhotoHeading",
      "c_coverPhotoDescription",
      "instagramHandle",
      "twitterHandle",
      "c_review",
      "c_businessDescription",
      "c_serviceOfferings",
      "c_trade",
      "c_subServiceAreas",
    ],
    localization: {
      locales: [YEXT_PUBLIC_LOCATION_LOCALE_CODE],
    },
    transform: {
      replaceOptionValuesWithDisplayNames: [
        "c_backgroundColor"
      ],
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
  relativePrefixToRoot
}): HeadConfig => {
  const ogImage = document.photoGallery?.[0]?.image?.url ?? null;

  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      { type: "meta", attributes: { name: "description", content: document.description } },
      { type: "meta", attributes: { property: "og:image", content: ogImage } },
      { type: "link", attributes: { rel: "icon", type: "image/x-icon", href: `${relativePrefixToRoot}${Favicon}` } },
    ],
  };
};

const Location: Template<TemplateRenderProps> = ({
  __meta,
  relativePrefixToRoot,
  document,
}) => {
  const [faqDataProvider, setFaqData] = React.useState([])
  const getCustomerId = async () => {
    const localApiRequest = await fetch("/customerDetail?type=faq")
    const response = await localApiRequest.json()
   
    setFaqData(response?.response?.entities)
  }
  React.useEffect(() => {
    getCustomerId()
  }, []);

  const {
    name,
    c_coverPhoto,
    c_coverPhotoDescription,
    c_coverPhotoHeading,
    c_serviceArea,
    c_trade
  } = document;

  return (
    <>
      <Schema data={document} />
      <PageLayout data={document?._site} templateData={{ __meta, document }}>
        <Banner
          phoneNumber={document._site.mainPhone}
          name={name}
          coverPhotoHeading={c_coverPhotoHeading}
          coverPhoto={c_coverPhoto}
          description={c_coverPhotoDescription}
          serviceArea={c_serviceArea}
          trade={c_trade}
        />
        <Content data={document} faq={faqDataProvider} />
      </PageLayout>
    </>
  );
};

export default Location;
