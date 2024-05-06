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
import Schema from "../components/Schema";
import InnerPagesBanner from "../components/InnerPagesBanner";
import InnerPageLayout from "../components/InnerPageLayout";

export const config: TemplateConfig = {
    stream: {
        $id: "pages",
        fields: [
            "id",
            "name",
            "slug",
            "photoGallery",
            "bodyV2",
            "description",
        ],
        filter: {
            entityTypes: ["ce_pages"],
        },
        localization: {
            locales: ["en"],
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
              content: 'description',
            },
          },
        ],
    };
};

const Pages = ({ __meta, document }: TemplateRenderProps) => {
    const { name, photoGallery,slug } = document;

    return (
        <>
            <PageLayout data={document?._site} templateData={{ __meta, document }}>
                {slug !== 'blog' && <InnerPagesBanner name={name} photoGallery={photoGallery} description={document?.description} />}
                <InnerPageLayout data={document} />
            </PageLayout>
        </>
    );
};

export default Pages;