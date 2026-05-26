import React from 'react';

export const LanCircleLitecoin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-48-384c-8.8 0-16 7.2-16 16v84.5l-37.1 12.4c-8.4 2.8-12.9 11.9-10.1 20.2s11.9 12.9 20.2 10.1l26.9-9V368c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16h-112V251.5l85.1-28.4c8.4-2.8 12.9-11.9 10.1-20.2s-11.9-12.9-20.2-10.1l-74.9 25V144c0-8.8-7.2-16-16-16"})
);

export default LanCircleLitecoin;
