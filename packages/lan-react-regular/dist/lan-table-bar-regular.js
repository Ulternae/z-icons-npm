import React from 'react';

export function LanTableBarRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M368 32c44.2 0 80 35.8 80 80v48c0 17.7-14.3 32-32 32H248v240h80c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h80V192H32c-17.7 0-32-14.3-32-32v-48c0-41.4 31.5-75.5 71.8-79.6L80 32zM80 80c-17.7 0-32 14.3-32 32v32h352v-32c0-17.7-14.3-32-32-32z"})
  );
}

export default LanTableBarRegular;
