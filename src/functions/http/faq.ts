import { SitesHttpRequest, SitesHttpResponse } from "@yext/pages/*";

export default async function faq(
  request: SitesHttpRequest
): Promise<SitesHttpResponse> {
  const { pathParams, queryParams, site } = request;
  const req = await fetch(`https://api.yextapis.com/v2/accounts/me/entities?api_key=4672dd030386425521d3a41c20df4e4b&v=20231019&entityTypes=faq&convertRichTextToHTML=true`)
  const res= await req.json()
  return {
    body: JSON.stringify(res),
    headers: {},
    statusCode: 200,
  };
}