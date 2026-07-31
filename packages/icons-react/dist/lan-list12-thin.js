import React from 'react';

export const LanList12Thin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 56c0 4.4 3.6 8 8 8h48v144H24c-4.4 0-8 3.6-8 8s3.6 8 8 8h112c4.4 0 8-3.6 8-8s-3.6-8-8-8H88V56c0-4.4-3.6-8-8-8H24c-4.4 0-8 3.6-8 8m184 32c0 4.4 3.6 8 8 8h288c4.4 0 8-3.6 8-8s-3.6-8-8-8H208c-4.4 0-8 3.6-8 8m0 168c0 4.4 3.6 8 8 8h288c4.4 0 8-3.6 8-8s-3.6-8-8-8H208c-4.4 0-8 3.6-8 8m0 168c0 4.4 3.6 8 8 8h288c4.4 0 8-3.6 8-8s-3.6-8-8-8H208c-4.4 0-8 3.6-8 8M79.4 288c-17.2 0-33.5 7.8-44.2 21.3L17.8 331c-2.8 3.4-2.2 8.5 1.2 11.2s8.5 2.2 11.2-1.2l17.4-21.8C55.3 309.6 67 304 79.3 304c22.4 0 40.6 18.5 40.6 41 0 12.1-5.4 23.8-14.6 31.6l-86.5 73.3c-2.6 2.2-3.5 5.7-2.3 8.9s4.1 5.2 7.5 5.2h112c4.4 0 8-3.6 8-8s-3.6-8-8-8H45.8l69.9-59.2c12.9-10.9 20.2-27 20.2-43.8 0-31.2-25.3-57-56.6-57z"})
);

export default LanList12Thin;
