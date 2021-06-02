import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CardDetailsForm from "../CardDetailsForm/CardDetailsForm";

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

// style
import c from '../../styles/common'

const BillingPage = ({
    planName
}) => {
    return (
        <div style={c.pageContainer}>
            <div style={c.imageContainer}>
                <img style={c.logoImage} src={`${process.env.REACT_APP_AWS_S3_IMAGES_URL}/img/udroppy-logo_white.png`} />
            </div>
            <div style={c.descriptionContainer}>
                <span>
                    <b>Welcome to the {planName} plan trial!</b>
                    <br />
                    We need to verify your payment data. You will be billed only after the end of the trial period.
                </span>
            </div>
            <div style={c.centerContainer}>
                <Elements stripe={stripePromise}>
                    <CardDetailsForm />
                </Elements>
            </div>
        </div>
    )
}

export default BillingPage;