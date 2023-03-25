import React from "react";
import { ViewProps } from "react-native";
export interface PlaceholderProps {
    Animation?: React.ComponentType;
    children: ViewProps['children'];
}
export declare const Placeholder: React.FC<PlaceholderProps>;
