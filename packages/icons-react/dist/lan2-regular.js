import React from 'react';

export const Lan2Regular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M48 64c0-13.3 10.7-24 24-24h186.9C314.8 40 360 85.3 360 141.1c0 40.5-24.1 77-61.3 93L143 300.8c-38.2 16.4-63 54-63 95.6V432h248c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-13.3 0-24-10.7-24-24v-59.6c0-60.8 36.2-115.8 92.1-139.7L279.8 190c19.5-8.4 32.2-27.6 32.2-48.8 0-29.3-23.8-53.1-53.1-53.1L72 88c-13.3 0-24-10.7-24-24"})
);

export default Lan2Regular;
