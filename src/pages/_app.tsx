import Image from "next/image";
import Link from "next/link";
import type { AppProps } from "next/app";
import { CartProvider } from "use-shopping-cart";
import { globalStyles } from "../styles/global";

import logoImg from "../assets/logo.svg";
import { Container, Header } from "../styles/pages/app";
import { IconShop } from "../components/IconShop";
import { Cart } from "../components/cart/Cart";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  return (
    <>
      <CartProvider
        mode="payment"
        cartMode="client-only"
        stripe={String(process.env.STRIPE_SECRET_KEY)}
        successUrl={successUrl}
        cancelUrl={cancelUrl}
        currency="BRL"
        allowedCountries={["US", "BR"]}
        billingAddressCollection={true}
        shouldPersist={true}
      >
        <Container>
          <Header>
            <Link href="/">
              <Image src={logoImg} alt="" />
            </Link>

            <Cart />
          </Header>
          <Component {...pageProps} />
        </Container>
      </CartProvider>
    </>
  );
}
