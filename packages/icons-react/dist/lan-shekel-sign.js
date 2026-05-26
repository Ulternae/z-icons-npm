import React from 'react';

export const LanShekelSign = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 32C21.5 32 0 53.5 0 80v384c0 8.8 7.2 16 16 16s16-7.2 16-16V80c0-8.8 7.2-16 16-16h112c44.2 0 80 35.8 80 80v192c0 8.8 7.2 16 16 16s16-7.2 16-16V144c0-61.9-50.1-112-112-112zm224 448c61.9 0 112-50.1 112-112V48c0-8.8-7.2-16-16-16s-16 7.2-16 16v320c0 44.2-35.8 80-80 80H160c-8.8 0-16-7.2-16-16V176c0-8.8-7.2-16-16-16s-16 7.2-16 16v256c0 26.5 21.5 48 48 48z"})
);

export default LanShekelSign;
