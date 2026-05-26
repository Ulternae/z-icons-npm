import React from 'react';

export const LanArrowUpToBracket = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m379.3 308.7-144-144c-6.2-6.2-16.4-6.2-22.6 0l-144 144c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L208 214.6V496c0 8.8 7.2 16 16 16s16-7.2 16-16V214.6l116.7 116.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6M32 176V96c0-35.3 28.7-64 64-64h256c35.3 0 64 28.7 64 64v80c0 8.8 7.2 16 16 16s16-7.2 16-16V96c0-53-43-96-96-96H96C43 0 0 43 0 96v80c0 8.8 7.2 16 16 16s16-7.2 16-16"})
);

export default LanArrowUpToBracket;
