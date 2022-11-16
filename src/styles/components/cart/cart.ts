import { styled, keyframes } from "../..";
import * as Dialog from "@radix-ui/react-dialog";

export const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

export const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: "rgba(0,0,0,0.6)",
  position: "fixed",
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

export const DialogContent = styled(Dialog.Content, {
  backgroundColor: "$gray800",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "0%",
  right: "0%",
  width: "480px",
  maxWidth: "480px",
  height: "100vh",
  padding: "3rem",
  // animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  "&:focus": { outline: "none" },
});

export const DialogTitle = styled(Dialog.Title, {
  margin: 0,
  color: "$green300",
  fontSize: "1.25rem",
  fontWeight: "bold",
  marginTop: "24px",
});

export const DialogDescription = styled(Dialog.Description, {
  margin: "10px 0 20px",
  color: "$gray300",
  fontSize: 15,
  lineHeight: 1.5,
});

export const Flex = styled("div", { display: "flex" });

export const ButtonTrigger = styled("div", {});

export const Button = styled("button", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 15px",
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,

  variants: {
    variant: {
      violet: {
        backgroundColor: "white",
        color: "$green300",
        boxShadow: `0 2px 10px ${"$green300"}`,
        "&:hover": { backgroundColor: "$gray800" },
        "&:focus": { boxShadow: `0 0 0 2px black` },
      },
      green: {
        backgroundColor: "$green500",
        color: "$green300",
        "&:hover": { backgroundColor: "$gray800" },
        "&:focus": { boxShadow: `0 0 0 2px ${"$gray300"}` },
      },
    },
  },

  defaultVariants: {
    variant: "violet",
  },
});

export const IconButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: "1.5rem",
  width: "1.5rem",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$gray300",
  position: "absolute",
  top: "1.5rem",
  right: "1.5rem",

  "&:hover": {
    color: "$green300",
    cursor: "pointer",
  },
  "&:focus": { boxShadow: `0 0 0 2px ${"$green500"}` },
});

export const ListItems = styled("div", {
  display: "flex",
  flexDirection: "column",
  flex: "1",

  margin: "2rem 0",
});

export const Footer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",

  gap: "3px",

  div: {
    display: "flex",
    justifyContent: "space-between",
    color: "$gray300",
    alignItems: "center",
  },

  span: {
    fontSize: "1.25rem",

    "&:first-child": {
      fontSize: "1rem",
    },
  },

  strong: {
    fontSize: "1.5rem",

    "&:first-child": {
      fontSize: "1.25rem",
    },
  },

  button: {
    marginTop: "35px",
    marginBottom: "48px",
    padding: "1.25rem",
    border: "none",
    borderRadius: 8,
    fontWeight: "bold",
    fontSize: "$md",
    cursor: "pointer",
    backgroundColor: "$green500",
    color: "$white",

    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },

    "&:not(:disabled):hover": {
      backgroundColor: "$green300",
    },
  },
});
