import React from 'react';

export function LanShieldCheckRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256.1 0c4.6 0 9.2 1 13.3 2.9l188.4 79.9c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.3 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256.1 0m-183 127c-5.9 2.5-9.1 7.7-9 12.7.5 91.4 38.4 249.3 186.4 320.1 3.6 1.7 7.8 1.7 11.3 0 148-70.8 185.9-228.7 186.3-320.1 0-5-3.1-10.2-9-12.7l-183-77.6zm240.3 34.9c7.8-10.7 22.8-13.1 33.5-5.3s13.1 22.8 5.3 33.5L249.8 330.9c-4.2 5.7-10.7 9.3-17.8 9.8s-14-2.2-18.9-7.3l-46.4-48c-9.2-9.5-9-24.7.6-33.9 9.5-9.2 24.7-8.9 33.9.6l26.5 27.4 85.6-117.7z"})
  );
}

export default LanShieldCheckRegular;
