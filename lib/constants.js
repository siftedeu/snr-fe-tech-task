import getConfig from "next/config";

// We set default values here because without them getConfig will be undefined in the test environment
// (i.e. Jest). This happens because the Next.js server is not running in that environment.
// See: https://github.com/vercel/next.js/issues/4024#issuecomment-377837421
// and its parent issue for more information.
const { serverRuntimeConfig = {}, publicRuntimeConfig = {} } =
  getConfig() || {};

export const DATOCMS_BASE = publicRuntimeConfig.datoCmsBase;

export const DATOCMS_READ_ONLY_API_TOKEN =
  serverRuntimeConfig.datoCmsReadOnlyApiToken;
