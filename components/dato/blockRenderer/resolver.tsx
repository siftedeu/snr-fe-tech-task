import type { Record } from "datocms-structured-text-utils";

import * as Blocks from "../blocks";

const __allBlocks = { ...Blocks };

export type BlockNames = keyof typeof __allBlocks;

const AlertIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-redy-900"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const NotFound = ({ blockName }: { blockName: BlockNames }) => {
  return process.env.NODE_ENV !== "production" ? (
    <div className="mt-md flex h-64 flex-col items-center justify-center rounded-xl border-2 border-red-300 bg-red-100 pb-sm text-center leading-tight">
      <AlertIcon />
      <h2 className="mt-sm text-xl font-bold text-red-700">
        “{blockName}”<br />
        component not found
      </h2>
      <div className="mt-sm max-w-sm">
        <p className="text-red-700">To generate a matching component, run:</p>
        <pre className="mt-md rounded-md bg-gray-900 p-sm text-teal-100">
          <span className="select-none">$ </span>yarn scaffold
        </pre>
      </div>
    </div>
  ) : null;
};

export type Block = ({ record }: { record: Record }) => JSX.Element;

export default function BlockResolver({
  blockName,
}: {
  blockName: BlockNames;
}): Block | JSX.Element {
  return __allBlocks[blockName]
    ? __allBlocks[blockName]
    : () => <NotFound blockName={blockName} />;
}
