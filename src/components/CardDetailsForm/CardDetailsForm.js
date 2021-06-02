import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

// style
import s from './style';
import c from '../../styles/common';
import PersonalDetailsForm from "../PersonalDetailsForm/PersonalDetailsForm";

const useOptions = () => {
    const options = {
        style: {
            base: {
                fontSize: "14px",
                color: "#424770",
                letterSpacing: "0.025em",
                fontFamily: "Source Code Pro, monospace",
                "::placeholder": {
                    color: "#aab7c4"
                }
            },
            invalid: {
                color: "#9e2146"
            }
        }
    };

    return options;
};

const CardDetailsForm = () => {
    const [showPersonalDetailsForm, setShowPersonalDetailsForm] = useState(false);

    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();

    const handleSubmit = async event => {
        event.preventDefault();
        const { name, address, city, state, country, zip } = event.target

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        if(!showPersonalDetailsForm) {
            const payload = await stripe.createPaymentMethod({
                type: "card",
                card: elements.getElement(CardElement)
            });
    
            if(payload) setShowPersonalDetailsForm(true)
            console.log("[PaymentMethod]", payload);
        } else {
            console.log(name.value, address.value, city.value, state.value, country.value, zip.value);
        }
    };

    return (
        <form
            style={s.form}
            onSubmit={handleSubmit}
        >
            <label style={s.cardContainer}>
                Enter your payment details
                <CardElement
                    options={options}
                    onReady={() => {
                        console.log("CardElement [ready]");
                    }}
                    onChange={event => {
                        console.log("CardElement [change]", event);
                    }}
                    onBlur={() => {
                        console.log("CardElement [blur]");
                    }}
                    onFocus={() => {
                        console.log("CardElement [focus]");
                    }}
                />
            </label>
            {
                showPersonalDetailsForm &&
                <PersonalDetailsForm />
            }
            <div style={c.centerContainer}>
                <button
                    style={{...c.button, ...c.green}}
                    type="submit"
                    disabled={!stripe}
                >
                    Get started
            </button>
            </div>
        </form>
    )
}

export default CardDetailsForm;