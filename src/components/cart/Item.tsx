import Image from "next/image";
import {
  ItemContainer,
  ImageContainer,
  ContentInfo,
  Button,
} from "../../styles/components/cart/item";

interface ItemProps {
  product: {
    name: string;
    price: number;
    image: string;
    quantity: number;
  };
  removeItem(): void;
}

export function Item({ product, removeItem }: ItemProps) {
  return (
    <ItemContainer>
      <ImageContainer>
        <Image src={product.image} width={102} height={93} alt="" />
      </ImageContainer>
      <ContentInfo>
        <span>{product.name}</span>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(Number(product.price) / 100)}

          <span>
            {product.quantity === 1
              ? `( ${product.quantity} item )`
              : `( ${product.quantity} itens )`}
          </span>
        </strong>
        <Button onClick={() => removeItem()}>Remover</Button>
      </ContentInfo>
    </ItemContainer>
  );
}
