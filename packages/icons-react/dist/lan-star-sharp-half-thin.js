import React from 'react';

export const LanStarSharpHalfThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M254.8 16c-.5 0-1 .4-1.2.9l-54 169.6c-1.1 3.3-4.1 5.6-7.6 5.6L18.9 192c-1.6 0-2.9 1.3-2.9 2.9 0 .9.4 1.7 1 2.2l140.1 116.8c2.5 2.1 3.5 5.4 2.5 8.5l-52.2 171.7c-.3.9.4 1.9 1.4 1.9q.45 0 .9-.3L256 381.9V17.2c0-.7-.6-1.2-1.2-1.2m-16.4-4c2.3-7.2 8.9-12 16.4-12 9.5 0 17.2 7.7 17.2 17.2v368.5c0 2.5-1.1 4.8-3.1 6.3L119.5 508.3c-3.1 2.4-6.8 3.7-10.7 3.7-11.7 0-20.1-11.3-16.7-22.5l50.7-166.7-136-113.3c-4.3-3.7-6.8-9-6.8-14.6C0 184.5 8.5 176 18.9 176h167.3z"})
);

export default LanStarSharpHalfThin;
