import React from 'react';

export const LanH3 = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v352c0 8.8 7.2 16 16 16s16-7.2 16-16V272h160v160c0 8.8 7.2 16 16 16s16-7.2 16-16V80c0-8.8-7.2-16-16-16s-16 7.2-16 16v160H64zm288 176c0 8.8 7.2 16 16 16h80c39.8 0 72 32.2 72 72s-32.2 72-72 72H336c-8.8 0-16 7.2-16 16s7.2 16 16 16h112c57.4 0 104-46.6 104-104 0-37.1-19.4-69.6-48.6-88 29.2-18.4 48.6-50.9 48.6-88 0-57.4-46.6-104-104-104H336c-8.8 0-16 7.2-16 16s7.2 16 16 16h112c39.8 0 72 32.2 72 72s-32.2 72-72 72h-80c-8.8 0-16 7.2-16 16"})
);

export default LanH3;
