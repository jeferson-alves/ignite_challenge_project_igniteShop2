import { styled } from "..";

export const IconShopContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$gray800",
  padding: "0.75rem",
  borderRadius: 6,
  cursor: "pointer",
  position: "relative",
  color: "$gray300",

  "&:hover": {
    backgroundColor: "$green500",
    color: "$gray100",
  },
});

export const CountDiv = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$green300",
  position: "absolute",
  width: "1.5rem",
  height: "1.5rem",
  borderRadius: 999,
  top: "-15%",
  right: "-15%",
  border: "3px solid #121214",
  fontSize: "0.875rem",
  fontWeight: "bold",
  color: "$gray100",
});
