import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51NuawHG5wvpFmSoHgMXMjf63qE2AfzP8guF5jxu8zu4qrGky8A6cCmjLFy0hrz0wTBRuWREIaC08GOL8Zh3tpiUU00xc6mZgdM"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}