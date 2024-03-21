/* eslint-disable import/no-default-export */
/// <reference types="next-images" />

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  import { FC, SVGAttributes } from "react";
  const content: FC<SVGAttributes<SVGElement>>;
  export default content;
}
