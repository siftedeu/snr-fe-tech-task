import { useState, useEffect } from "react";
import classNames from "classnames";

import { DatoImage } from "components/image/datoImage";
// eslint-disable-next-line css-modules/no-unused-class
import pageStyles from "./careers.module.css";
// eslint-disable-next-line css-modules/no-unused-class
import styles from "./aboveTheFold.module.css";
import UnderlinedText from "components/underlinedText/underlinedText";
import useSiftedMediaQueries from "lib/hooks/useSiftedMediaQueries";
import type { AboveTheFoldData } from "content-ui/careers/fetcher";

const paragraphClasses = classNames(
  "my-xl lg:my-2xl text-sm md:text-lg lg:text-xl leading-tight font-bold",
  "inline-block w-5/6 sm:w-4/5 md:w-2/3 max-w-xs md:max-w-sm lg:max-w-2xl"
);

const buttonClasses = classNames(
  "inline-block px-lg py-sm rounded font-bold text-sm border border-cerise",
  "focus:outline-none bg-cerise text-white"
);
const containerClasses = classNames(
  "my-2xl md:my-3xl lg:my-4xl",
  styles.container
);

const AboveTheFold = ({ title, subtitle, cta, images }: AboveTheFoldData) => {
  const [imagesShown, setImagesShown] = useState([]);
  const { tabletAndAbove, desktop, useMediaQuery } = useSiftedMediaQueries();

  const customRange = useMediaQuery({
    minWidth: 476,
    maxWidth: 846,
  });

  const fallbackDimensions = [
    {
      width: 350,
      height: 252,
    },
    {
      width: 190,
      height: 240,
    },
    {
      width: 214,
      height: 234,
    },
    {
      width: 350,
      height: 230,
    },
    {
      width: 193,
      height: 230,
    },
  ];

  useEffect(() => {
    if (customRange) {
      // Manually selecting the images shown
      setImagesShown([images[0], images[1], images[2], images[4]]);
    } else if (tabletAndAbove) {
      setImagesShown(images);
    } else {
      setImagesShown([images[1], images[2], images[4]]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [desktop, tabletAndAbove, customRange]);

  return (
    <>
      <section id="intro" className="text text-center">
        <div className="mb-4xl flex flex-col items-center">
          <UnderlinedText as="h1" className={styles.heading}>
            {title}
          </UnderlinedText>
          <p className={paragraphClasses}>{subtitle}</p>
          <a
            data-testid="openroles"
            className={buttonClasses}
            href={cta[0].url}
          >
            {cta[0].text}
          </a>
        </div>
        <div className={containerClasses}>
          {imagesShown
            ? imagesShown.map((image, i) => {
                const width =
                  image.customData.width || fallbackDimensions[i].width;
                const height =
                  image.customData.height || fallbackDimensions[i].height;

                const { x, y } = image.focalPoint;
                const focalPoint = `${x * 100}% ${y * 100}%`;

                return (
                  <div
                    key={i}
                    className="relative flex-grow"
                    style={{ flexGrow: width / height }}
                  >
                    <div
                      className={`${pageStyles["custom-shadow"]} ${
                        (i + 1) % 2 === 0 ? "rotate-6" : "-rotate-6"
                      }`}
                    >
                      <DatoImage
                        className="max-h-12 w-100 rounded-md object-cover"
                        src={image.url}
                        width={width}
                        height={height}
                        layout="responsive"
                        objectFit="cover"
                        objectPosition={focalPoint}
                        alt={image.alt}
                        priority={true}
                        sizes={`calc(max(${width}px, ${height}px) * 2)`}
                        blurDataURL={image.blurUpThumb}
                        placeholder="blur"
                      />
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </section>
      <hr />
    </>
  );
};

export default AboveTheFold;
