import React from 'react';

export const LanUserAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M112 128a112 112 0 1 1 224 0 112 112 0 1 1-224 0m240 0a128 128 0 1 0-256 0 128 128 0 1 0 256 0M16 480c0-88.4 71.6-160 160-160h96c88.4 0 160 71.6 160 160v24c0 4.4 3.6 8 8 8s8-3.6 8-8v-24c0-97.2-78.8-176-176-176h-96C78.8 304 0 382.8 0 480v24c0 4.4 3.6 8 8 8s8-3.6 8-8z"})
);

export default LanUserAltThin;
