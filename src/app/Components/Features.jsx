import React from 'react'
import getFeatures from '../../../lib/getFeatures'

export default async function Features() {
    const features = await getFeatures("feature")
    console.log(features)
    return (
        <div>Features</div>
    )
}