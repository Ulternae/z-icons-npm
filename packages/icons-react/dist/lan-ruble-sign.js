import React from 'react';

export const LanRubleSign = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M80 32c-8.8 0-16 7.2-16 16v240H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v64H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h160c8.8 0 16-7.2 16-16s-7.2-16-16-16H96v-64h112c79.5 0 144-64.5 144-144S287.5 32 208 32zm128 256H96V64h112c61.9 0 112 50.1 112 112s-50.1 112-112 112"})
);

export default LanRubleSign;
