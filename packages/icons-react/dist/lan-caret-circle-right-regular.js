import React from 'react';

export const LanCaretCircleRightRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M464 256a208 208 0 1 1-416 0 208 208 0 1 1 416 0M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0m352 0c0-6.7-2.8-13-7.7-17.6l-112-104c-7-6.5-17.2-8.2-25.9-4.4S192 142.5 192 152v208c0 9.5 5.7 18.2 14.4 22s18.9 2.1 25.9-4.4l112-104c4.9-4.5 7.7-10.9 7.7-17.6"})
);

export default LanCaretCircleRightRegular;
