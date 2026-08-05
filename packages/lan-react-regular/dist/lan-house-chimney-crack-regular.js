import React from 'react';

export function LanHouseChimneyCrackRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M272 6.1c-9.1-8.2-22.9-8.2-32 0L8 214.1c-9.9 8.8-10.7 24-1.8 33.9s24 10.7 33.9 1.8l8-7.2v205.3c0 35.3 28.7 64 64 64h288c35.3 0 64-28.7 64-64V242.6l8 7.2c9.9 8.8 25 8 33.9-1.8s8-25-1.8-33.9l-40-35.9V88c0-13.3-10.7-24-24-24s-24 10.7-24 24v47.2L272.2 6.1zm144 193.6V448c0 8.8-7.2 16-16 16H293.9L256 403.8l79.7-63.3c8.2-6.5 8-19.1-.4-25.3L220.2 229c-14.9-11.1-33.6 7.8-22.3 22.5l58.1 76.1-84.8 67.3c-6.4 5.1-7.9 14.2-3.6 21.1l30.3 48.1H112c-8.8 0-16-7.2-16-16V199.7L256 56.2z"})
  );
}

export default LanHouseChimneyCrackRegular;
