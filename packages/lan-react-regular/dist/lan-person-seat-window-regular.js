import React from 'react';

export function LanPersonSeatWindowRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M160 128a56 56 0 1 0 0-112 56 56 0 1 0 0 112M48 184c0-13.3-10.7-24-24-24S0 170.7 0 184v176c0 66.3 53.7 120 120 120h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80c-39.8 0-72-32.2-72-72zm112 24c8.8 0 16 7.2 16 16v112h-8c-13.3 0-24-10.7-24-24v-88c0-8.8 7.2-16 16-16m64 128V224c0-35.3-28.7-64-64-64s-64 28.7-64 64v88c0 39.8 32.2 72 72 72h80c13.3 0 24 10.7 24 24v80c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24h-24v-56c0-39.8-32.2-72-72-72zM352 80h32c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16m-64 16v96c0 35.3 28.7 64 64 64h32c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64h-32c-35.3 0-64 28.7-64 64"})
  );
}

export default LanPersonSeatWindowRegular;
