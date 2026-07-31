import React from 'react';

export const LanDressSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M158.4 21.9c-5.3-15.9-21.9-25-38.1-21S93.7 20.8 96.4 37.3L126.7 219 3.4 465.7c-5 9.9-4.4 21.7 1.4 31.1S20.9 512 32 512h448c11.1 0 21.4-5.7 27.2-15.2s6.4-21.2 1.4-31.1L385.3 219l30.3-181.7C418.3 20.8 407.9 5 391.7.9s-32.8 5.1-38.1 21l-2.8 8.5c-13 39.2-49.7 65.6-91.1 65.6h-7.5c-41.3 0-78-26.4-91.1-65.6l-2.8-8.5z"})
);

export default LanDressSolid;
