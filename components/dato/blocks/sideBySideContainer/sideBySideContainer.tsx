import { useEffect, useState } from "react";
import classNames from "classnames";

import Markdown from "components/markdown/markdown";
import { DatoImage } from "components/image/datoImage";
// eslint-disable-next-line css-modules/no-unused-class
import pageStyles from "./sideBySideContainer.module.css";
import UnderlinedText from "components/underlinedText/underlinedText";
import TwoColumn from "components/layout/twoColumn/twoColumn";
import VideoPlayer from "components/videoPlayer/videoPlayer";

import type { SideBySideData } from "lib/types/datoBlocks";

const paragraphClasses = classNames(
  "md:pr-5xl w-11/12 mx-auto md:w-100 text-sm lg:text-base leading-relaxed"
);
const buttonClasses = classNames(
  "inline-block px-2xl py-md rounded border border-cerise",
  "font-bold text-2xs focus:outline-none bg-transparent text-cerise",
  "mt-xl mb-lg md:mb-0"
);
const SideBySideContainer = ({ record }: { record: SideBySideData }) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  const { title, body, media, cta, reverseLayout, removeHr } = record;
  const sectionId = title.toLowerCase().replace(/[^A-Z0-9']/gi, "-");

  const { x, y } = media[0]?.image?.focalPoint || {};
  const focalPoint = `${x * 100}% ${y * 100}%`;

  if (!hasMounted) return null;
  return (
    <>
      <section
        id={sectionId}
        className={`mb-5xl md:mb-0 ${removeHr ? "lg:mb-16" : ""}`}
      >
        <TwoColumn
          reverseLayout={reverseLayout}
          col1={
            <div
              className={`mb-2xl ${
                reverseLayout ? "md:ml-20" : ""
              } order-1 flex-1 self-center text-center md:order-none md:my-0 md:text-left`}
            >
              <UnderlinedText
                as="h2"
                className={"mb-xl text-2xl md:mb-2xl md:text-3xl"}
              >
                {title}
              </UnderlinedText>
              <Markdown className={paragraphClasses} text={body} />
              {cta[0] ? (
                <a
                  className={buttonClasses}
                  href={cta[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {cta[0].text}
                </a>
              ) : null}
            </div>
          }
          col2={
            <div className="order-2 flex flex-1 md:order-none">
              <div className="flex-grow self-center">
                <div
                  className={`mx-auto w-11/12 md:w-100 ${pageStyles["custom-shadow"]}`}
                >
                  {media[0].image ? (
                    <DatoImage
                      className="mx-auto rounded-md object-cover object-center md:mx-0"
                      src={media[0].image.url}
                      width={500}
                      height={350}
                      objectFit="cover"
                      objectPosition={focalPoint}
                      layout="responsive"
                      sizes="500px"
                      alt={media[0].image.alt || ""}
                      quality={75}
                      placeholder="blur"
                      blurDataURL={media[0].image.blurUpThumb}
                    />
                  ) : (
                    <VideoPlayer url={media[0].video.url} />
                  )}
                </div>
              </div>
            </div>
          }
        />
      </section>
      <hr
        style={{
          display: `${removeHr ? "none" : ""}`,
        }}
      />
    </>
  );
};

export default SideBySideContainer;
