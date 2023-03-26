import React from "react";
import { ViewProps } from "react-native";
import { Raw } from "./animations/Raw";

export interface PlaceholderProps {
  /* An optional component that animates the placeholder */
  Animation?: React.ComponentType;
  children: ViewProps["children"];
}

export const Placeholder: React.FC<PlaceholderProps> = ({
  children,
  Animation,
}) => {
  const AnimationProvider = Animation || Raw;

  return <AnimationProvider>{children}</AnimationProvider>;
};
