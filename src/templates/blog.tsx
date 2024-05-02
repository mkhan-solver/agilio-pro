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
import { Col, Container, Row } from "react-bootstrap";
import Markdown from "markdown-to-jsx";

export const config: TemplateConfig = {
  stream: {
    $id: "blog",
    fields: [
      "id",
      "name",
      "slug",
      "datePosted",
      "c_coverPhoto",
      "bodyV2",
      "description",
      "keywords",
    ],
    filter: {
      entityTypes: ["ce_blog"],
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
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
        },
      },
      {
        type: "meta",
        attributes: {
          name: "keywords",
          content: document.keywords,
        },
      },
    ],
  };
};

const Blog = ({__meta, document }: TemplateRenderProps) => {
  const { name, datePosted, bodyV2, c_coverPhoto } = document;
  return (<PageLayout data={document?._site} templateData={{__meta, document}}>
    <div className="mb-5 blog_image_service">
        <Container>
            <Row>
                <Col lg={12}>
                    <img alt='Logo' src={c_coverPhoto?.image?.url} className='w-100 img-fluid blog_image_set'></img>
                    <Markdown>{bodyV2?.markdown}</Markdown>
                </Col>
            </Row>
        </Container>
    </div>
  </PageLayout>);
};

export default Blog;