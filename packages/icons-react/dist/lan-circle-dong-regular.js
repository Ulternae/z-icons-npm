import React from 'react';

export const LanCircleDongRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m16-376v8h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32v22.7c-9.8-4.3-20.6-6.7-32-6.7-44.2 0-80 35.8-80 80s35.8 80 80 80c13.4 0 26.1-3.3 37.2-9.1 4.4 5.6 11.2 9.1 18.8 9.1 13.3 0 24-10.7 24-24V176h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-8c0-13.3-10.7-24-24-24s-24 10.7-24 24m-32 168a32 32 0 1 1 0-64 32 32 0 1 1 0 64m-96 88c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16"})
);

export default LanCircleDongRegular;
