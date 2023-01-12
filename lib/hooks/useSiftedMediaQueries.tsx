import { useMediaQuery } from "react-responsive";

import BREAKPOINTS from "lib/breakpoints";

function useSiftedMediaQueries() {
  const mobile = useMediaQuery({
    maxWidth: BREAKPOINTS.MD,
  });

  const tablet = useMediaQuery({
    minWidth: BREAKPOINTS.MD,
    maxWidth: BREAKPOINTS.LG,
  });

  const tabletAndAbove = useMediaQuery({
    minWidth: BREAKPOINTS.MD,
  });

  const desktop = useMediaQuery({
    minWidth: BREAKPOINTS.LG,
  });

  return { mobile, tablet, tabletAndAbove, desktop, useMediaQuery };
}

export default useSiftedMediaQueries;
