import React from 'react';

export const LanArrowLeftFromArc = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M480 256c0-123.7-100.3-224-224-224-8.8 0-16-7.2-16-16s7.2-16 16-16c141.4 0 256 114.6 256 256S397.4 512 256 512c-8.8 0-16-7.2-16-16s7.2-16 16-16c123.7 0 224-100.3 224-224M116.7 132.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L54.6 240H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H54.6l84.7 84.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-112-112c-6.2-6.2-6.2-16.4 0-22.6z"})
);

export default LanArrowLeftFromArc;
