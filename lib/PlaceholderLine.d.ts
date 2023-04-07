import React from "react";
import { ViewProps, ViewStyle } from "react-native";
export interface PlaceholderLineProps extends ViewProps {
    height?: number;
    color?: string;
    width?: ViewStyle["width"];
    noMargin?: boolean;
    style?: ViewProps["style"];
}
export declare const PlaceholderLine: React.FC<PlaceholderLineProps>;
