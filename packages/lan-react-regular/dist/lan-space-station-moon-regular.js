import React from 'react';

export function LanSpaceStationMoonRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 48C141.1 48 48 141.1 48 256c0 12.8 1.1 25.2 3.3 37.4.5.2 1 .4 1.5.5C87.7 306.5 147.6 328 256 328s168.3-21.5 203.2-34.1c.5-.2 1-.4 1.5-.5 2.2-12.1 3.3-24.6 3.3-37.4 0-114.9-93.1-208-208-208m185.3 302.7C402.1 362.7 343 376 256 376s-146.1-13.3-185.3-25.3C105.2 417.9 175.2 464 256 464s150.8-46.1 185.3-113.3M512 256a256 256 0 1 1-512 0 256 256 0 1 1 512 0m-304-32a48 48 0 1 0 0-96 48 48 0 1 0 0 96m0-144a96 96 0 1 1 0 192 96 96 0 1 1 0-192"})
  );
}

export default LanSpaceStationMoonRegular;
