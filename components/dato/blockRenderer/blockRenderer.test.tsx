import { render } from "@testing-library/react";
import BlockRenderer, { getBlockName } from "./blockRenderer";

describe("BlockRenderer", () => {
  it.each([
    ["SideBySideRecord", "SideBySide"],
    ["anotherBlockRecord", "AnotherBlock"],
  ])(
    "should correctly determine the block name given the typename: '%s'",
    (typename, expected) => {
      expect(getBlockName({ typename })).toBe(expected);
    }
  );

  it("should render the appropriate block correctly", () => {
    const resolver = ({ blockName }) => {
      switch (blockName) {
        case "SideBySide":
          return () => <h1>SideBySide Rendered</h1>;
        case "AnotherBlock":
          return () => <h2>Another Rendered</h2>;
        default:
          return () => null;
      }
    };

    const { container } = render(
      <>
        <BlockRenderer record={mockObject.pageContent[1]} resolver={resolver} />
        <BlockRenderer record={mockObject.pageContent[0]} resolver={resolver} />
      </>
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <h2>
          Another Rendered
        </h2>
        <h1>
          SideBySide Rendered
        </h1>
      </div>
    `);
  });

  it("should be able to render a default block when one cannot be matched", () => {
    const resolver = ({ blockName }) => {
      switch (blockName) {
        case "SideBySide":
          return () => <h1>SideBySide Rendered</h1>;
        default:
          return () => <p>Default Rendered</p>;
      }
    };

    const { container } = render(
      <BlockRenderer record={mockObject.pageContent[1]} resolver={resolver} />
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <p>
          Default Rendered
        </p>
      </div>
    `);
  });
});

const mockObject = {
  ctaText: "See our open roles",
  ctaLink: "http://google.com",
  title: "Careers at Sifted",
  subtitle:
    "If you had the chance to build/create the go to platform for all things startup in Europe, would you take it?",
  pageContent: [
    {
      __typename: "SideBySideRecord",
      id: "89857836",
      cta: [],
      reverseLayout: false,
      body:
        "Sifted is the home for Europe’s startup community. Our reporting covers the topics and trends that matter most to founders, operators and investors through articles, newsletters and events.\n\n\nIn 2021, we launched membership and over the coming months we’ll be working hard to make it the best it can be, including developing data and community-based products to complement our journalism.",
      title: "What we do",
      media: [
        {
          id: "89894212",
          image: {
            url:
              "https://www.datocms-assets.com/60124/1640021463-af1qipnojgvcfavvgfhchaathol11bfr3qac1icpokhts1024-2x-1024x684.png",
          },
        },
      ],
    },
    {
      __typename: "AnotherBlockRecord",
      id: "89857837",
      cta: [],
      reverseLayout: false,
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      title: "Sifted's vision",
      media: [
        {
          id: "89894214",
          video: {
            url: "https://vimeo.com/638846086",
          },
        },
      ],
    },
  ],
};
