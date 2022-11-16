import { styled } from "../..";

export const ItemContainer = styled("div", {
  display: "flex",
  gap: "20px",
  marginBottom: "1.5rem",
});

export const ImageContainer = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  maxWidth: "102px",
  maxHeight: "98px",
  borderRadius: 8,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const ContentInfo = styled("div", {
  display: "flex",
  flex: 1,
  flexDirection: "column",

  span: {
    fontSize: "1.125rem",
    color: "$gray300",
  },

  strong: {
    fontSize: "1.125rem",
    fontWeight: "bold",
    color: "$gray100",
    marginTop: "2px",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    span: {
      fontWeight: "normal",
      fontSize: "1rem",
    },
  },
});

export const Button = styled("div", {
  color: "$green500",
  fontSize: "1rem",
  fontWeight: "bold",
  marginTop: "8px",

  "&:hover": {
    cursor: "pointer",
    color: "$green300",
  },
});
