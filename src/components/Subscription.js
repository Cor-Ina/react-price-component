import React from "react"
import Signuplink from './Signuplink'

export default function Subscription() {
    return (
        <section className="subscription">
            <h2>Monthly Subscription</h2>
            <div className="subscription--price">
                $29 <span>per month</span>
            </div>
            <p>Full access for less than $1 a day</p>
            <Signuplink />
        </section>
    )
}