import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
export interface CHILDREN {
    children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactPortal | Iterable<ReactNode> | null | undefined;
}
export interface WATERFALL_PROPS extends CHILDREN {
    column?: number;
    gap?: number | string;
}
