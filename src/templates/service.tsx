import * as React from "react";
import "../index.css";
import {
  GetPath,
  TemplateProps,
  TemplateConfig,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";
import PageLayout from "../components/PageLayout";
import InnerPagesBanner from "../components/InnerPagesBanner";
import InnerPageLayout from "../components/InnerPageLayout";


export const config: TemplateConfig = {
  stream: {
    $id: "services",
    fields: [
      "id",
      "name",
      "slug",
      "datePosted",
      "photoGallery",
      "bodyV2",
      "description"
    ],
    filter: {
      entityTypes: ["ce_services"],
    },
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    // tags: [
    //   {
    //     type: "meta",
    //     attributes: {
    //       name: "description",
    //       content: description,
    //     },
    //   },
    // ],
  };
};

const Services = ({ __meta,document }: TemplateRenderProps) => {
  const { name,photoGallery} = document;
return (
  <>
    <PageLayout data={document?._site} templateData={{__meta, document}}>
      <InnerPagesBanner name={name} photoGallery={photoGallery} description={document?.description}/>
      <InnerPageLayout data={document}/>
    </PageLayout>
  </>
);
};

export default Services;