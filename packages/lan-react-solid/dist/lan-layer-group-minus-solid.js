import React from 'react';

export function LanLayerGroupMinusSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M376 24h112c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24m-143.5 77.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0l-218.6-101C5.4 241.8 0 233.3 0 224s5.4-17.9 13.9-21.8zM82.7 330.4l129.7 59.9c27.7 12.8 59.6 12.8 87.3 0l129.7-59.9 68.7 31.8c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0l-218.6-101C5.4 401.8 0 393.3 0 384s5.4-17.9 13.9-21.8l68.7-31.8z"})
  );
}

export default LanLayerGroupMinusSolid;
