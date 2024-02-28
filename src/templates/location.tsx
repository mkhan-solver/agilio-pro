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
      "hours",
      "slug",
      "services",
      "paymentOptions",
      "emails",
      "yextDisplayCoordinate",
      "c_backgroundColor",
      "c_ourMission",
      "c_whyChooseUs",
      "c_whatToExpect",
      "c_heroSection",
      "c_frontPageServiceList.name",
      "c_frontPageServiceList.description",
      "c_frontPageServiceList.photoGallery",
      "c_frontPageServiceList.slug",
      "c_coverPhoto",
      "c_coverPhotoHeading",
      "c_coverPhotoDescription",
      "c_whySectionImage",
      "c_truckImage"
    ],
    localization: {
      locales: [YEXT_PUBLIC_LOCATION_LOCALE_CODE],
    },
    transform: {
      replaceOptionValuesWithDisplayNames: [
        "paymentOptions",
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
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: document.description,
        },
      },
      {
        type: "meta", // Meta Tag (og:image)
        attributes: {
          property: "og:image",
          content: (document.photoGallery ? document.photoGallery[0].image.url : null),
        },
      },
      {
        type: "link",
        attributes: {
          rel: "icon",
          type: "image/x-icon",
          href: relativePrefixToRoot + Favicon,
        },
      },
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
    description,
    c_coverPhoto,
    c_coverPhotoDescription
  } = document;

  return (
    <>
      <Schema data={document} />
      <PageLayout data={document?._site} templateData={{ __meta, document }}>
        <Banner name={name} coverPhoto={c_coverPhoto} description={c_coverPhotoDescription} />
        <Content description={description} data={document} faq={faqDataProvider} />
      </PageLayout>
    </>
  );
};

export default Location;
