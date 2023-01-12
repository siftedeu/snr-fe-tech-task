export type SeoData = {
  seo: {
    title: string;
    description: string;
    image: {
      url: string;
    };
  };
};

export type SideBySideData = {
  id: string;
  __typename: string;
  title: string;
  body: string;
  reverseLayout: boolean;
  removeHr: boolean;
  media: {
    id: string;
    image?: {
      alt: string;
      url: string;
      blurUpThumb: string;
      focalPoint: FocalPoint;
    };
    video?: {
      url: string;
    };
  }[];
  cta?: Cta;
};

export type FocalPoint = {
  x: number;
  y: number;
};

export type Cta = Array<
  {
    text: string;
    url: string;
  }
>;
