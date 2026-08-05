import React from 'react';

export function LanCircleVideo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m24-320c4.4 0 8 3.6 8 8v112c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8V200c0-4.4 3.6-8 8-8zm40 14.1V200c0-22.1-17.9-40-40-40H168c-22.1 0-40 17.9-40 40v112c0 22.1 17.9 40 40 40h112c22.1 0 40-17.9 40-40v-6.1l56.8 28.4c5 2.5 10.9 2.2 15.6-.7s7.6-8.1 7.6-13.6V192c0-5.5-2.9-10.7-7.6-13.6s-10.6-3.2-15.6-.7zm0 35.8 48-24v76.2l-48-24z"})
  );
}

export default LanCircleVideo;
