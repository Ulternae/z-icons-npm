import React from 'react';

export const LanScrollRibbonSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M80 384c-44.2 0-80-71.6-80-160S35.8 64 80 64h480c44.2 0 80 71.6 80 160s-35.8 160-80 160h-83.2c12.3-24 19.2-51.2 19.2-80 0-97.2-78.8-176-176-176s-176 78.8-176 176c0 28.8 6.9 56 19.2 80zm368-80c0 32.5-12.1 62.1-32 84.7v103.5c0 10.9-8.9 19.8-19.8 19.8-2.8 0-5.5-.6-8-1.7L320 480l-68.2 30.3c-2.5 1.1-5.3 1.7-8 1.7-10.9 0-19.8-8.9-19.8-19.8V388.7c-19.9-22.6-32-52.2-32-84.7 0-70.7 57.3-128 128-128s128 57.3 128 128m-128 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96"})
);

export default LanScrollRibbonSolid;
