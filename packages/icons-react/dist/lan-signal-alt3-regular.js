import React from 'react';

export const LanSignalAlt3Regular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M312 152c0-13.3-10.7-24-24-24s-24 10.7-24 24v304c0 13.3 10.7 24 24 24s24-10.7 24-24zM160 256c-13.3 0-24 10.7-24 24v176c0 13.3 10.7 24 24 24s24-10.7 24-24V280c0-13.3-10.7-24-24-24M32 384c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24s24-10.7 24-24v-48c0-13.3-10.7-24-24-24"})
);

export default LanSignalAlt3Regular;
