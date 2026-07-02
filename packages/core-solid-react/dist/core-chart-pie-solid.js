import React from 'react';

export function CoreChartPieSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M160 89.7c-57.4 33.2-96 95.2-96 166.3 0 106 86 192 192 192 71.1 0 133.1-38.6 166.3-96h71.1c-38 93.8-130 160-237.4 160C114.6 512 0 397.4 0 256 0 148.6 66.2 56.6 160 18.6zM256 0c141.4 0 256 114.6 256 256 0 17.7-14.3 32-32 32H224V32l.2-3.3C225.8 12.6 239.4 0 256 0"})
  );
}

export default CoreChartPieSolid;
