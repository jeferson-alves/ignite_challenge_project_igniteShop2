import { useEffect } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { useShoppingCart } from "use-shopping-cart";

import {
  ImageAvatar,
  ImageContainer,
  SuccessContainer,
} from "../styles/pages/success";

interface SuccessProps {
  customerName: string;
  products: {
    id: string;
    name: string | null;
    imageUrl: string;
    quantity: number;
  }[];
}

export default function Success({ customerName, products }: SuccessProps) {
  const { cartCount, clearCart } = useShoppingCart();

  let totalQuantity = products.reduce(
    (prev, current) => prev + current.quantity,
    0
  );

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <>
      <Head>
        <title>Compra efetuada! | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Compra efetuada!</h1>

        <ImageAvatar>
          {products.map((item) => {
            return (
              <ImageContainer key={item.id}>
                <Image src={item.imageUrl} width={130} height={130} alt="" />
              </ImageContainer>
            );
          })}
        </ImageAvatar>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de{" "}
          <strong>{totalQuantity}</strong> cammiseta
          {totalQuantity > 1 ? "s" : ""} já está a caminho de sua casa.
        </p>

        <Link href="/">Voltar ao catálogo.</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details?.name;
  // const product = session.line_items.data[1].price.product as Stripe.Product;

  const listProducts = session.line_items?.data as any[];

  let products: any = [];

  if (listProducts) {
    products = listProducts.map((item) => {
      return {
        id: item.id,
        name: item?.price?.product?.name,
        imageUrl: item?.price?.product.images[0],
        quantity: item.quantity,
      };
    });
  }

  return {
    props: {
      customerName,
      products,
    },
  };
};
