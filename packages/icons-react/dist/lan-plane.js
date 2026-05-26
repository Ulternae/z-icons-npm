import React from 'react';

export const LanPlane = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M544 192c35.3 0 64 28.7 64 64s-28.7 64-64 64H439L267.8 506.8c-3 3.3-7.3 5.2-11.8 5.2h-80c-5.1 0-10-2.5-13-6.6s-3.8-9.5-2.2-14.4l57-170.9h-58.1l-59.2 74c-3 3.8-7.6 6-12.5 6H40c-4.9 0-9.6-2.3-12.6-6.2s-4.1-8.9-2.9-13.7l31-124.1-31-124.1c-1.2-4.8-.1-9.8 2.9-13.7S35.1 112 40 112h48c4.9 0 9.5 2.2 12.5 6l59.2 74h58.1l-57-170.9c-1.6-4.9-.8-10.2 2.2-14.4S170.9 0 176 0h80c4.5 0 8.8 1.9 11.8 5.2L439 192zm32 64c0-17.7-14.3-32-32-32H152c-4.9 0-9.5-2.2-12.5-6l-59.2-74H60.5l27 108.1c.6 2.5.6 5.2 0 7.8L60.5 368h19.8l59.2-74c3-3.8 7.6-6 12.5-6h392c17.7 0 32-14.3 32-32m-180.4 64H251.5l-53.3 160H249l146.7-160zM249 32h-50.8l53.3 160h144.1L248.9 32z"})
);

export default LanPlane;
