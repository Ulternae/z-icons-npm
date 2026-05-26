import React from 'react';

export const LanSendBackwardSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 0C28.7 0 0 28.7 0 64v224c0 35.3 28.7 64 64 64h48V224c0-61.9 50.1-112 112-112h128V64c0-35.3-28.7-64-64-64zm160 224h224v224H224zm-64 0v224c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64"})
);

export default LanSendBackwardSolid;
