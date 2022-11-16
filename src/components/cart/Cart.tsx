import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import axios from "axios";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { IconShop } from "../IconShop";
import {
  Button,
  ButtonTrigger,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
  Flex,
  Footer,
  IconButton,
  ListItems,
} from "../../styles/components/cart/cart";
import { Item } from "./Item";

export function Cart() {
  const { cartCount, cartDetails, totalPrice, removeItem } = useShoppingCart();
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  const keysCartDetails = Object.keys(Object(cartDetails));

  async function handleBuyProduct() {
    const formatedToSend = keysCartDetails.map((item) => {
      return {
        price: String(cartDetails?.[item].price_id),
        quantity: Number(cartDetails?.[item].quantity),
      };
    });

    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post("/api/checkoutMany", {
        items: formatedToSend,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (error) {
      setIsCreatingCheckoutSession(false);

      // conectar com um aferramenta de observabilidade (Datadog / Sentry)
      alert("Falha ao redirecionar ao checkout!");
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ButtonTrigger>
          <IconShop count={Number(cartCount)} />
        </ButtonTrigger>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle>Sacola de compras</DialogTitle>
          <DialogDescription
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <ListItems>
              {cartCount === 0 ? "Sacola vazia" : null}
              {keysCartDetails.map((item) => (
                <Item
                  key={cartDetails?.[item].id}
                  product={{
                    name: String(cartDetails?.[item].name),
                    price: Number(cartDetails?.[item].price),
                    image: String(cartDetails?.[item].image),
                    quantity: Number(cartDetails?.[item].quantity),
                  }}
                  removeItem={() => removeItem(String(cartDetails?.[item].id))}
                />
              ))}
              {/* <div>teste</div> */}
            </ListItems>
            <Footer>
              <div>
                <span>Quantidade</span>
                <span>
                  {cartCount === 1 ? `${cartCount} item` : `${cartCount} itens`}
                </span>
              </div>
              <div>
                <strong>Valor total</strong>
                <strong>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(Number(totalPrice) / 100)}
                </strong>
              </div>
              <button
                onClick={handleBuyProduct}
                disabled={isCreatingCheckoutSession}
              >
                Finalizar Compra
              </button>
            </Footer>
          </DialogDescription>

          <Flex css={{ marginTop: 25, justifyContent: "flex-end" }}>
            <Dialog.Close asChild>
              {/* <Button variant="green">Save changes</Button> */}
            </Dialog.Close>
          </Flex>
          <Dialog.Close asChild>
            <IconButton aria-label="Close">
              <X size={24} weight="bold" />
            </IconButton>
          </Dialog.Close>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
