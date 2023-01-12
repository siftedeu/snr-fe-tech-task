import type { Record } from "datocms-structured-text-utils";
import BlockRenderer from "components/dato/blockRenderer/blockRenderer";

/**
 *
 * This component is used to render DatoCMS’ Modular Content field:
 * https://www.datocms.com/docs/content-modelling/modular-content
 *
 * It does so by using our BlockRenderer component to render the records passed
 * to it, i.e. it will match and render blocks found in the Modular Content
 * field with components we have defined to do so under:
 * components/dato/blocks/[...]/[...]
 *
 */
const ModularContent = ({ records }: { records: Record[] }) => {
  return (
    <>
      {records.map((record, index) => (
        <BlockRenderer key={record.id || index} record={record} />
      ))}
    </>
  );
};

export default ModularContent;
