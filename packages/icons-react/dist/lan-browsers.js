import React from 'react';

export const LanBrowsers = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M224 64v64h-96V96c0-17.7 14.3-32 32-32zm32 0h256c17.7 0 32 14.3 32 32v32H256zm288 96v160c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160zM160 32c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h352c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zM16 160c-8.8 0-16 7.2-16 16v240c0 35.3 28.7 64 64 64h400c8.8 0 16-7.2 16-16s-7.2-16-16-16H64c-17.7 0-32-14.3-32-32V176c0-8.8-7.2-16-16-16"})
);

export default LanBrowsers;
