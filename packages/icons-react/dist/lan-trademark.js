import React from 'react';

export const LanTrademark = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 112c0 8.8 7.2 16 16 16h96v272c0 8.8 7.2 16 16 16s16-7.2 16-16V128h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H16c-8.8 0-16 7.2-16 16m317.5-8.7c-3.8-6-11.2-8.7-18-6.7S288 104.9 288 112v288c0 8.8 7.2 16 16 16s16-7.2 16-16V166.5l114.5 178.2c2.9 4.6 8 7.3 13.5 7.3s10.5-2.8 13.5-7.3L576 166.5V400c0 8.8 7.2 16 16 16s16-7.2 16-16V112c0-7.1-4.7-13.4-11.5-15.4s-14.1.7-18 6.7L448 306.4z"})
);

export default LanTrademark;
