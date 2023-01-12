import { Fragment } from "react";
import classNames from "classnames";

// eslint-disable-next-line css-modules/no-unused-class
import styles from "content-ui/careers/components/careers.module.css";
import AboveTheFold from "content-ui/careers/components/aboveTheFold";
import ModularContent from "components/dato/modularContent/modularContent";
import type { CareersPageData } from "content-ui/careers/fetcher";

const innerContainerClasses = classNames(
  "mb-4xl lg:mb-4xl pt-20 md:pt-32 lg:w-5/6 lg:mx-auto",
  styles.container
);

const CareersView = ({ dato }: { dato: CareersPageData }) => {
  const { title, subtitle, cta, images } = dato;
  const aboveTheFoldProps = { title, subtitle, cta, images };
  return (
    <Fragment>
      <main>
        <div className="wrapper relative overflow-hidden">
          <div className={innerContainerClasses}>
            <AboveTheFold {...aboveTheFoldProps} />
            <ModularContent records={dato.pageContent} />
          </div>
        </div>
      </main>
    </Fragment>
  );
};
export default CareersView;
