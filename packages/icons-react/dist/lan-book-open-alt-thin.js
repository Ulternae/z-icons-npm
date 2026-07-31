import React from 'react';

export const LanBookOpenAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 533.008',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m296 86.1 46.7-16.7C382.5 55.3 424.3 48 466.5 48H528c17.7 0 32 14.3 32 32v288c0 17.7-14.3 32-32 32h-37.4c-62.1 0-123.3 14.5-178.9 42.2l-15.8 7.9v-364zm-16 364-15.8-7.9C208.7 414.5 147.4 400 85.3 400H48c-17.7 0-32-14.3-32-32V80c0-17.7 14.3-32 32-32h61.5c42.2 0 84 7.3 123.8 21.4L280 86.1zM288 72l-49.4-17.6C197.2 39.6 153.5 32 109.5 32H48C21.5 32 0 53.5 0 80v288c0 26.5 21.5 48 48 48h37.3c59.6 0 118.4 13.9 171.7 40.5l16.6 8.3c9 4.5 19.6 4.5 28.6 0l16.6-8.3C372.2 429.9 431 416 490.6 416H528c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-61.5c-44 0-87.7 7.6-129.2 22.4zM0 472c0 4.4 3.6 8 8 8h64c46.6 0 92.8 8.7 136.3 25.6l63.6 24.7c10.5 4.1 22.3 3.5 32.4-1.5l18.2-9.1c52.2-26.1 109.8-39.7 168.1-39.7H568c4.4 0 8-3.6 8-8s-3.6-8-8-8h-77.4c-60.9 0-120.9 14.2-175.3 41.4l-18.2 9.1c-6.1 3-13.1 3.4-19.4.9L214 490.7C168.7 473 120.6 464 72 464H8c-4.4 0-8 3.6-8 8"})
);

export default LanBookOpenAltThin;
