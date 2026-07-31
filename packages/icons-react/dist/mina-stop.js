import React from 'react';

export const MinaStop = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M6 12.5c0-2.828 0-4.243.879-5.121C7.757 6.5 9.172 6.5 12 6.5s4.243 0 5.121.879C18 8.257 18 9.672 18 12.5s0 4.243-.879 5.121c-.878.879-2.293.879-5.121.879s-4.243 0-5.121-.879C6 16.743 6 15.328 6 12.5"})
);

export default MinaStop;
