import React from 'react';

export const LanCircleDongSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m16-376c0-13.3 10.7-24 24-24s24 10.7 24 24v8h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v152c0 13.3-10.7 24-24 24-7.6 0-14.4-3.6-18.8-9.1-11.1 5.8-23.7 9.1-37.2 9.1-44.2 0-80-35.8-80-80s35.8-80 80-80c11.4 0 22.2 2.4 32 6.7V176h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32zm-32 104a32 32 0 1 0 0 64 32 32 0 1 0 0-64m-96 152c0-8.8 7.2-16 16-16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16"})
);

export default LanCircleDongSolid;
