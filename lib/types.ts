import { customColors } from "lib/colors";

export type SiftedColorType = keyof typeof customColors;

export type DatoImageType = {
  url: string;
  blurUpThumb: string;
  width: number;
  height: number;
};
