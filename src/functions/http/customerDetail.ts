import { SitesHttpRequest, SitesHttpResponse } from "@yext/pages/*";
import { fetch } from "@yext/pages/util";
const api_key = '4672dd030386425521d3a41c20df4e4b'

export default async function customerDetail(
  request: SitesHttpRequest
): Promise<SitesHttpResponse> {
  const { site, queryParams } = request;
  
  const userDetailRequest = await fetch(`https://api.yextapis.com/v2/accounts?api_key=${api_key}&v=20231128&name=${site?.businessName}`)
  const { response } = await userDetailRequest.json()
  const { accountId } = response?.accounts[0] || {}

  if (queryParams.type === 'faq') {
    const requestFaq = await fetch(`https://api.yextapis.com/v2/accounts/${accountId}/entities?api_key=${api_key}&v=20231019&entityTypes=faq&convertRichTextToHTML=true`)
    const responseFaq = await requestFaq.json()
    return {
      body: JSON.stringify(responseFaq),
      headers: {},
      statusCode: 200,
    };
  }

  return {
    body: JSON.stringify(accountId),
    headers: {},
    statusCode: 200,
  };
}