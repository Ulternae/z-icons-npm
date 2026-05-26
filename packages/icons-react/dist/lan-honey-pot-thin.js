import React from 'react';

export const LanHoneyPotThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M376 48c13.3 0 24 10.7 24 24s-10.7 24-24 24H240v16h80c61.9 0 112 50.1 112 112 0 5.4-.1 10.8-.4 16H16.4c-.2-5.2-.4-10.6-.4-16 0-61.9 50.1-112 112-112V96H72c-13.3 0-24-10.7-24-24s10.7-24 24-24h80v92c0 15.5 12.5 28 28 28s28-12.5 28-28V48zm54.5 208c-2.9 30-9.7 56.6-18.7 80H36.3c-9-23.4-15.8-50-18.7-80h413zM405 352c-24.9 54.7-60.9 89-80.4 104.7-5.9 4.8-13.9 7.3-23 7.3H146.3c-9.1 0-17.1-2.5-23-7.3C103.8 441 67.9 406.6 42.9 352h362zM168 48h24v92c0 6.6-5.4 12-12 12s-12-5.4-12-12zM32 72c0 20.3 15.1 37 34.6 39.6C26.9 133.3 0 175.5 0 224c0 138.8 79.6 217.9 113.3 245.1 9.3 7.5 21.1 10.9 33.1 10.9h155.3c12 0 23.7-3.3 33.1-10.9 33.6-27.2 113.3-106.3 113.3-245.1 0-48.5-26.9-90.6-66.6-112.4 19.6-2.6 34.6-19.4 34.6-39.6 0-22.1-17.9-40-40-40H72c-22.1 0-40 17.9-40 40"})
);

export default LanHoneyPotThin;
