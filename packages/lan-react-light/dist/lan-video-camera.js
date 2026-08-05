import React from 'react';

export function LanVideoCamera({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M96 96c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32zm-64 32c0-35.3 28.7-64 64-64h256c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64zm432 84v-40l73.6-55.2c4.2-3.1 9.2-4.8 14.4-4.8 13.3 0 24 10.7 24 24v240c0 13.3-10.7 24-24 24-5.2 0-10.2-1.7-14.4-4.8L464 340v-40l80 60V152z"})
  );
}

export default LanVideoCamera;
