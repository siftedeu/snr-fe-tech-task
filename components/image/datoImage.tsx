import NextImage from "next/legacy/image";
import type { ImageProps } from "next/legacy/image";

import styles from "./datoImage.module.css";
import type { Modify } from "lib/types/common";

type BlurUpImageProps = Modify<
  ImageProps,
  {
    containerClassName?: string;
    blurDataURL: string;
    placeholder: "blur";
  }
>;

/**
 * This is a wrapper of the Next Image component that first shows a
 * blurred version of the image, then on load of the full-quality
 * image it will smoothly fade it in.
 */
export const DatoImage = ({
  containerClassName = "",
  ...props
}: BlurUpImageProps) => {
  return (
    <div className={`${styles.container} ${containerClassName}`}>
      <NextImage {...props} />
    </div>
  );
};
