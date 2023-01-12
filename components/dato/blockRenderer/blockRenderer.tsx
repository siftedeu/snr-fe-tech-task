import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

import type { Record } from "datocms-structured-text-utils";
import type { BlockNames } from "./resolver";

import defaultResolver from "./resolver";

const pascalCase = (word: string) => upperFirst(camelCase(word));

export const getBlockName = ({ typename }: { typename: string }) => {
  return pascalCase(typename.replace("Record", "")) as BlockNames;
};

/**
 * This component helps match a DatoCMS block record to a component best suited
 * to render it
 *
 * @param record - A DatoCMS record
 * @param [resolver=defaultResolver] - An optional function that takes in a block name and resolves it to a component
 * @returns A single React component that matches the record's typename as specified by
 * the resolver
 *
 */
const BlockRenderer = ({
  record,
  resolver = defaultResolver,
}: {
  record: Record;
  // TODO: Improve return type.
  resolver?: ({ blockName }: { blockName: BlockNames }) => any;
}) => {
  const blockName = getBlockName({ typename: record.__typename });
  const Block = resolver({ blockName });
  return <Block record={record} />;
};

export default BlockRenderer;
