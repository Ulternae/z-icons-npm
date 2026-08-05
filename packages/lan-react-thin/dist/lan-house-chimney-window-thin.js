import React from 'react';

export function LanHouseChimneyWindowThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M266.9 7.2c-6.1-5.7-15.7-5.7-21.8 0l-234.6 219c-3.2 3-3.4 8.1-.4 11.3s8.1 3.4 11.3.4L48 213.1V456c0 30.9 25.1 56 56 56h304c30.9 0 56-25.1 56-56V213.1l26.5 24.8c3.2 3 8.3 2.8 11.3-.4s2.8-8.3-.4-11.3l-37.4-35V64c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32v37.6L266.9 7.3zM448 198.1V456c0 22.1-17.9 40-40 40H104c-22.1 0-40-17.9-40-40V198.1L256 18.9zM448 64v112.3l-64-59.7V64.1c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM232 240h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24v-48c0-13.3 10.7-24 24-24m-40 24v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40v-48c0-22.1-17.9-40-40-40h-48c-22.1 0-40 17.9-40 40"})
  );
}

export default LanHouseChimneyWindowThin;
