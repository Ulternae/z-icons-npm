import React from 'react';

export const LanBarProgressQuarter = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 128c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H160V128zm-384 0h64v57.4l-96 96V160c0-17.7 14.3-32 32-32M32 326.6l96-96V384H64c-17.7 0-32-14.3-32-32zM64 96c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64z"})
);

export default LanBarProgressQuarter;
