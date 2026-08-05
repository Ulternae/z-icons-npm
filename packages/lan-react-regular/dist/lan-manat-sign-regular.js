import React from 'react';

export function LanManatSignRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M192 32c-13.3 0-24 10.7-24 24v41.5C73.3 109.3 0 190.1 0 288v168c0 13.3 10.7 24 24 24s24-10.7 24-24V288c0-71.4 51.9-130.6 120-142v310c0 13.3 10.7 24 24 24s24-10.7 24-24V146c68.1 11.4 120 70.7 120 142v168c0 13.3 10.7 24 24 24s24-10.7 24-24V288c0-97.9-73.3-178.7-168-190.5V56c0-13.3-10.7-24-24-24"})
  );
}

export default LanManatSignRegular;
