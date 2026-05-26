import React from 'react';

export const LanSuitcaseRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M200 48h112c4.4 0 8 3.6 8 8v40H192V56c0-4.4 3.6-8 8-8m-56 8v40H64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64h-80V56c0-30.9-25.1-56-56-56H200c-30.9 0-56 25.1-56 56m24 88h184v288H160V144zm-56 0v288H64c-8.8 0-16-7.2-16-16V160c0-8.8 7.2-16 16-16zm288 288V144h48c8.8 0 16 7.2 16 16v256c0 8.8-7.2 16-16 16z"})
);

export default LanSuitcaseRegular;
