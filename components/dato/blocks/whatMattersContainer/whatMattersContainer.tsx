import Markdown from "components/markdown/markdown";
import UnderlinedText from "components/underlinedText/underlinedText";
import type { WhatMattersData } from "content-ui/careers/fetcher";

type CustomMarkdownProps = {
  children: React.ReactNode;
  options: {};
};

const WhatMattersContainer = ({ record }: { record: WhatMattersData }) => {
  const CustomSpan = ({ children, ...props }: CustomMarkdownProps) => (
    <span {...props}>{children}</span>
  );
  const CustomParagraph = ({ children, ...props }: CustomMarkdownProps) => (
    <p {...props}>{children}</p>
  );

  return (
    <>
      <div id="what-matters" className="text-center md:text-left">
        <UnderlinedText as="h2" className="text-2xl md:text-3xl">
          {record.title}
        </UnderlinedText>
        <Markdown
          className="m-auto my-xl w-5/6 text-sm md:mx-0 md:w-3/5 lg:w-2/5 lg:text-base"
          text={record.body}
        />
        <Markdown
          options={{
            forceBlock: true,
            overrides: {
              p: {
                component: CustomParagraph,
                props: {
                  className:
                    "my-md mx-auto md:mx-0 px-sm md:px-0 text-sm md:text-xl font-bold md:leading-tight",
                },
              },
              code: {
                component: CustomSpan,
                props: {
                  className: "text-cerise whitespace-nowrap",
                },
              },
              span: {
                component: CustomSpan,
                props: {
                  className: "whitespace-nowrap",
                },
              },
              em: {
                component: CustomSpan,
                props: {
                  className:
                    "inline-block text-2xl md:text-3xl leading-3 translate-y-xs",
                },
              },
            },
          }}
          text={record.emojiText}
        />
      </div>
      <hr />
    </>
  );
};

export default WhatMattersContainer;
