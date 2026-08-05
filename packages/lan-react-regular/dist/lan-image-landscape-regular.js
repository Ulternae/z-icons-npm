import React from 'react';

export function LanImageLandscapeRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M512 112c8.8 0 16 7.2 16 16v256c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V128c0-8.8 7.2-16 16-16zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm294.3 107.2c-4.5-6.4-11.8-10.2-19.6-10.2s-15.1 3.8-19.6 10.2l-64.5 91.3-28.8-34.4c-4.6-5.5-11.3-8.6-18.4-8.6s-13.9 3.2-18.4 8.6l-70.7 84.5c-6 7.1-7.3 17.1-3.3 25.6s12.5 13.8 21.8 13.8h302.8c9 0 17.2-5 21.3-13s3.5-17.6-1.7-24.9l-100.9-143zM128 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
  );
}

export default LanImageLandscapeRegular;
