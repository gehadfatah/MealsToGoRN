import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51QQbjmHVPhhAQmXwkDV0FwjN1UifTJwruWcFIHhj2K1Ger3TcYRzvqypC9h7emUfCO8P5BTETinprzmQcApazDml00ti2zxjoB"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });
