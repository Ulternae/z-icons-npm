import React from 'react';

export const LanShortsRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M88.4 32c-13.3 0-24 10.7-24 24v69.8L11.7 411.9c-4 21.8 10.4 42.6 32.2 46.6l144.9 26.3c21.3 3.9 41.8-9.9 46.3-31.1l21.3-101.2 21.3 101.2c4.5 21.2 25 35 46.3 31.1l144.9-26.3c21.8-4 36.2-24.8 32.2-46.6l-52.7-286.1V56c0-13.3-10.7-24-24-24zm24 80V80h288v32zm-5.5 48h299l46.5 252.7L323 436.2l-23.9-113.5c-4.2-20.2-22.1-34.7-42.7-34.7s-38.5 14.5-42.8 34.7l-23.9 113.5-129.4-23.5z"})
);

export default LanShortsRegular;
