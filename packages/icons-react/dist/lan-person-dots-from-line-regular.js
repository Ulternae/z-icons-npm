import React from 'react';

export const LanPersonDotsFromLineRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M224 80a32 32 0 1 1 64 0 32 32 0 1 1-64 0m112 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0M120 376c0-37.6 15.3-71.7 40-96.3V416h48V248.7c14.9-5.6 31.1-8.7 48-8.7s33.1 3.1 48 8.7V416h48V279.7c24.7 24.6 40 58.7 40 96.3v40h48v-40c0-101.6-82.4-184-184-184S72 274.4 72 376v40h48zm144-8a24 24 0 1 0-48 0 24 24 0 1 0 48 0M24 464c-13.3 0-24 10.7-24 24s10.7 24 24 24h464c13.3 0 24-10.7 24-24s-10.7-24-24-24zm96-272a24 24 0 1 0-48 0 24 24 0 1 0 48 0m360 88a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
);

export default LanPersonDotsFromLineRegular;
