import React from 'react';

export function LanBottleDropletRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 320 576',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M96-32C78.3-32 64-17.7 64 0c0 11.8 6.4 22.2 16 27.7v121.7C32.2 177.1 0 228.7 0 288v168c0 48.6 39.4 88 88 88h144c48.6 0 88-39.4 88-88V288c0-59.3-32.2-110.9-80-138.6V27.7c9.6-5.5 16-15.9 16-27.7 0-17.7-14.3-32-32-32zm32 64h64v132c0 9.4 5.5 18 14.1 21.9C245 203.5 272 242.6 272 288v168c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V288c0-45.4 27-84.5 65.9-102.1 8.6-3.9 14.1-12.4 14.1-21.9zm96 320c0-21.2-28.9-64.5-47.9-90.6-8.1-11.1-24.2-11.1-32.3 0-19 26.1-47.9 69.4-47.9 90.6 0 31.6 28.7 64 64 64s64-32.4 64-64z"})
  );
}

export default LanBottleDropletRegular;
