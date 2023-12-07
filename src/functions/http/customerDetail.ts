import { SitesHttpRequest, SitesHttpResponse } from "@yext/pages/*";

export default async function customerDetail(
  request: SitesHttpRequest
): Promise<SitesHttpResponse> {
  const { site } = request;
  
  return {
    body: JSON.stringify(site),
    headers: {},
    statusCode: 200,
  };
}