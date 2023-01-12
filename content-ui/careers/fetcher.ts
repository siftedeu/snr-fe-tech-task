import fetchFromDatoCms from "lib/cms/dato";

import type {
  Cta,
  FocalPoint,
  SeoData,
  SideBySideData,
} from "lib/types/datoBlocks";
export interface CareersPageData extends SeoData, AboveTheFoldData {
  pageContent:Array<SideBySideData | WhatMattersData | TeamData | PerkContainerData>;
}

export interface AboveTheFoldData {
  title: string;
  subtitle: string;
  cta: Cta;
  images: {
    url: string;
    alt: string;
    width: number;
    height: number;
    focalPoint: FocalPoint;
    customData: {
      width?: string;
      height?: string;
    };
    blurUpThumb: string;
  }[];
}

export type WhatMattersData = {
  id: string;
  __typename: string;
  title: string;
  body: string;
  emojiText: string;
};

export type TeamData = {
  id: string;
  __typename: string;
  title: string;
  video: {
    url: string;
  };
  cta?: Cta;
};

export type Perk = {
  icon: string;
  iconDescription: string;
  text: string;
  attribution: string;
  heading: string;
};

export type PerkContainerData = {
  id: string;
  __typename: string;
  title: string;
  perk: Perk[];
};

export const fetchCareersPageData = async (): Promise<CareersPageData> => {
  const data = await fetchFromDatoCms();

  return data.careersPage;
};
