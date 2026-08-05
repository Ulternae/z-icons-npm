import React from 'react';

export function LanUniversalAccess({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-16-384a16 16 0 1 1 32 0 16 16 0 1 1-32 0m64 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-174.3 56.8c-4 7.9-.7 17.5 7.2 21.5l21.1 10.5c16 8 32.8 14 50.1 17.8v75.3L184.6 404c-2.1 8.6 3.1 17.3 11.6 19.4s17.3-3.1 19.4-11.6l21-83.9h39l21 83.9c2.1 8.6 10.8 13.8 19.4 11.6s13.8-10.8 11.6-19.4L304 310v-75.3c17.3-3.9 34.1-9.9 50.1-17.8l21.1-10.5c7.9-4 11.1-13.6 7.2-21.5s-13.6-11.1-21.5-7.2l-21.1 10.5c-26 13-54.7 19.8-83.8 19.8s-57.8-6.8-83.8-19.8l-21.1-10.5c-7.9-4-17.5-.7-21.5 7.2zM240 239.4c10.6.8 21.4.8 32 0V296h-32z"})
  );
}

export default LanUniversalAccess;
