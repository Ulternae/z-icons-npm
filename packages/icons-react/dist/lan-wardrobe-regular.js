import React from 'react';

export const LanWardrobeRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M488 0c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v440c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8H80v8c0 13.3-10.7 24-24 24s-24-10.7-24-24V48h-8C10.7 48 0 37.3 0 24S10.7 0 24 0zM80 432h152V48H80zm200 0h152V48H280zM168 192c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24s-24-10.7-24-24v-48c0-13.3 10.7-24 24-24m176 0c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24s-24-10.7-24-24v-48c0-13.3 10.7-24 24-24"})
);

export default LanWardrobeRegular;
