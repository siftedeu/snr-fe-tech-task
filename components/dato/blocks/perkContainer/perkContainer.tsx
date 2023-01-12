import Markdown from "components/markdown/markdown";
// eslint-disable-next-line css-modules/no-unused-class
import pageStyles from "content-ui/careers/components/careers.module.css";
import type { PerkContainerData, Perk } from "content-ui/careers/fetcher";

import UnderlinedText from "components/underlinedText/underlinedText";

const PerkContainer = ({ record }: { record: PerkContainerData }) => {
  return (
    <>
      <section id="perks-and-benefits" className="">
        <div className="flex justify-center">
          <UnderlinedText
            as="h2"
            className={"mb-2xl text-2xl md:mb-3xl md:text-3xl lg:mb-4xl"}
          >
            {record.title}
          </UnderlinedText>
        </div>
        <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:gap-10">
          {record.perk.map((perk: Perk, i) => {
            return (
              <div className="mx-auto w-100 md:mx-0" key={i}>
                <div
                  className={`${pageStyles["custom-shadow"]} rounded-lg px-lg pt-xs pb-lg md:px-xl lg:px-2xl`}
                >
                  <h3 className="mb-lg text-lg font-bold text-cerise md:mb-xl md:text-xl lg:text-2xl">
                    <span
                      role="img"
                      aria-label={perk.iconDescription}
                      className="mr-xs inline-block translate-y-sm text-4xl md:mr-sm md:text-5xl lg:text-6xl"
                    >
                      {perk.icon}
                    </span>
                    {perk.heading}
                  </h3>
                  <Markdown
                    className="mb-lg text-xs lg:text-sm"
                    text={perk.text}
                  />
                  <p className="mt-xl text-sm font-bold text-[#b5bbc3] md:mt-2xl md:text-lg">
                    {perk.attribution}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <hr />
    </>
  );
};

export default PerkContainer;
