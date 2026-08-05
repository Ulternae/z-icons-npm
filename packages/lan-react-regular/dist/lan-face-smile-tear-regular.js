import React from 'react';

export function LanFaceSmileTearRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 464c-114.9 0-208-93.1-208-208S141.1 48 256 48s208 93.1 208 208c0 41.8-12.3 80.7-33.6 113.3-8.2 44.7-47.3 78.6-94.3 78.7-24.7 10.3-51.7 16-80.1 16M142.7 352.6c21.6 22.5 58.5 46.4 110.1 47.4-8.2-14.1-12.8-30.5-12.8-48v-1.1c-29.1-3.9-49.9-18.2-62.7-31.6-9.2-9.6-24.4-9.9-33.9-.7s-9.9 24.4-.7 33.9zM256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-80-272a32 32 0 1 0 0-64 32 32 0 1 0 0 64m192-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-22.6 68.8c-2.4-2.9-5.7-4.8-9.4-4.8s-7 1.9-9.4 4.8c-6.5 7.8-12.6 16.1-18.3 24.6-9 13.4-20.3 30.2-20.3 47.4 0 28.3 21.5 51.2 48 51.2s48-22.9 48-51.2c0-17.2-11.2-34-20.3-47.4q-8.55-12.75-18.3-24.6"})
  );
}

export default LanFaceSmileTearRegular;
