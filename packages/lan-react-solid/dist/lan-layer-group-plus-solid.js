import React from 'react';

export function LanLayerGroupPlusSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 512 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M456-8c0-13.3-10.7-24-24-24s-24 10.7-24 24v32h-32c-13.3 0-24 10.7-24 24s10.7 24 24 24h32v32c0 13.3 10.7 24 24 24s24-10.7 24-24V72h32c13.3 0 24-10.7 24-24s-10.7-24-24-24h-32zM279.5 101.2c-14.9-6.9-32.1-6.9-47 0l-218.6 101C5.4 206.1 0 214.6 0 224s5.4 17.9 13.9 21.8l218.6 101c14.9 6.9 32.1 6.9 47 0l218.6-101c8.5-3.9 13.9-12.4 13.9-21.8s-5.4-17.9-13.9-21.8zm-265.6 261C5.4 366.1 0 374.6 0 384s5.4 17.9 13.9 21.8l218.6 101c14.9 6.9 32.1 6.9 47 0l218.6-101c8.5-3.9 13.9-12.4 13.9-21.8s-5.4-17.9-13.9-21.8l-68.7-31.8-129.7 59.9c-27.7 12.8-59.6 12.8-87.3 0L82.7 330.4z"})
  );
}

export default LanLayerGroupPlusSolid;
