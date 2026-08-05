import React from 'react';

export function LanEyeDropperHalfRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M233 202.9 191.1 161c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l8 8L338.2 29.9c19.1-19.1 45-29.8 72-29.8C466.4.1 512 45.7 512 101.9c0 27-10.7 52.9-29.8 72L377 279.1l8 8c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-41.9-41.9zm110 42.2 105.2-105.2c10.1-10.1 15.8-23.8 15.8-38.1 0-29.7-24.1-53.8-53.8-53.8-14.3 0-28 5.7-38.1 15.8L266.9 169zm-170.9-35.2 33.9 33.9-76.1 76.1H254l14.1-14.1 33.9 33.9-119 119a71.98 71.98 0 0 1-50.9 21.1H79.2l-42 28c-9.5 6.3-22.2 5.1-30.3-3s-9.3-20.8-3-30.3l28-42v-52.9c0-19.1 7.6-37.4 21.1-50.9l119-119z"})
  );
}

export default LanEyeDropperHalfRegular;
