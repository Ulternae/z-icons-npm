import React from 'react';

export const LanListTree = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 112a16 16 0 1 0 0-32 16 16 0 1 0 0 32M0 96c0-26.5 21.5-48 48-48s48 21.5 48 48c0 20.9-13.4 38.7-32 45.3V240h66.7c6.6-18.6 24.4-32 45.3-32 26.5 0 48 21.5 48 48s-21.5 48-48 48c-20.9 0-38.7-13.4-45.3-32H64v112c0 8.8 7.2 16 16 16h50.7c6.6-18.6 24.4-32 45.3-32 26.5 0 48 21.5 48 48s-21.5 48-48 48c-20.9 0-38.7-13.4-45.3-32H80c-26.5 0-48-21.5-48-48V141.3C13.4 134.7 0 116.9 0 96m160 0c0-8.8 7.2-16 16-16h320c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16m128 160c0-8.8 7.2-16 16-16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H304c-8.8 0-16-7.2-16-16m0 160c0-8.8 7.2-16 16-16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H304c-8.8 0-16-7.2-16-16M160 256a16 16 0 1 0 32 0 16 16 0 1 0-32 0m16 176a16 16 0 1 0 0-32 16 16 0 1 0 0 32"})
);

export default LanListTree;
