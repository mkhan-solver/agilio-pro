import React from 'react'
import HubspotForm from 'react-hubspot-form'
const HubSpotForm = () => {
    return (
        <HubspotForm
            portalId='42269009'
            formId='bf3d5ec5-ea34-4d75-b38b-4ac52418081d'
            onSubmit={() => console.log('Submit!')}
            onReady={(form: any) => {
                setTimeout(async () => {
                    const localApiRequest = await fetch("/customerDetail")
                    const consumerID = await localApiRequest.json()
                    
                    const x = form.contentWindow.document
                    const style = `<style>
                            .hs-button{
                                width: 100%;
                            }
                            </style>`
                    x.head.insertAdjacentHTML("beforeend", style)
                    x.querySelector(`[name*="company_consumer_id"]`).value = consumerID
                }, 500)
            }}
            loading={<div>Loading...</div>}
        />)
}

export default HubSpotForm