import React from 'react';

export function CorePaperPlaneSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 512 576',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"m64 2 433.9 230.5c8.7 4.6 14.1 13.7 14.1 23.5s-5.4 18.9-14.1 23.5L64 510 0 544V432l69.1-152H248v-48H69.1L0 80V-32z"})
  );
}

export default CorePaperPlaneSolid;
