import { Handbag } from "phosphor-react";
import { CountDiv, IconShopContainer } from "../styles/components/iconShop";

interface IconShopProps {
  count: number;
}

export function IconShop({ count }: IconShopProps) {
  return (
    <IconShopContainer>
      <Handbag size={24} weight="bold" />
      {count ? <CountDiv>{count}</CountDiv> : null}
    </IconShopContainer>
  );
}
