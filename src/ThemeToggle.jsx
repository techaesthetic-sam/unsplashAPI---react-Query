import React from "react";
import { useGlobalContext } from "./context";

export default function ThemeToggle() {
  const { greeting } = useGlobalContext();
  return <div>{greeting}</div>;
}
