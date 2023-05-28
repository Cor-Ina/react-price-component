import React from "react"
import Signuplink from './Signuplink'

export default function Subscription() {
    return (
        <section class="subscription">
            <h2>Monthly Subscription</h2>
            <div class="subscription--price">
                &dollar;29 <span>per month</span>
            </div>
            <p>Full access for less than &dollar;1 a day</p>
            <Signuplink />
        </section>
    )
}