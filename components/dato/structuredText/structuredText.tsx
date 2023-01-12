import { StructuredText as DatoStructuredText } from "react-datocms";
import type { StructuredText as StructuredTextType } from "datocms-structured-text-utils";

import BlockRenderer from "components/dato/blockRenderer/blockRenderer";

/**
 *
 * This component is used to render DatoCMS’ Structured Text field:
 * https://www.datocms.com/docs/content-modelling/structured-text
 *
 * It does so by using DatoCMS’ very own StructuredText component but using
 * our BlockRenderer to render the data passed to it, i.e. it will match
 * and render blocks found in the data using components we have defined
 * to do so under: components/dato/blocks/[...]/[...]
 *
 */
const StructuredText = ({ data }: { data: StructuredTextType }) => {
  return (
    <DatoStructuredText
      data={data}
      renderBlock={({ record }) => <BlockRenderer record={record} />}
    />
  );
};

export default StructuredText;
