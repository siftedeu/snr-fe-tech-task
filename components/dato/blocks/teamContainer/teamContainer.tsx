import { useEffect, useState } from "react";
import classNames from "classnames";

// eslint-disable-next-line css-modules/no-unused-class
import pageStyles from "content-ui/careers/components/careers.module.css";
import UnderlinedText from "components/underlinedText/underlinedText";
import VideoPlayer from "components/videoPlayer/videoPlayer";
import type { TeamData } from "content-ui/careers/fetcher";

const buttonClasses = classNames(
  "inline-block px-2xl py-md rounded",
  "font-bold text-sm focus:outline-none bg-cerise text-white",
  "mt-3xl md:-mb-3xl hidden md:block"
);

const TeamContainer = ({ record }: { record: TeamData }) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;
  return (
    <>
      <section id="team" className="mb-24 pb-2xl md:pb-0">
        <div className="flex w-100 flex-col items-center">
          <UnderlinedText
            as="h2"
            className={"text-center text-2xl md:mb-3xl md:text-3xl"}
          >
            {record.title}
          </UnderlinedText>
          <div className="mt-2xl -mb-5xl flex w-11/12 flex-1 justify-center md:mt-0 md:mb-0 md:w-100">
            <div className={`flex-grow ${pageStyles["custom-shadow"]}`}>
              <VideoPlayer url={record.video.url} />
            </div>
          </div>
          <a className={buttonClasses} href={record.cta[0].url}>
            {record.cta[0].text}
          </a>
        </div>
      </section>
      <hr />
    </>
  );
};

export default TeamContainer;
