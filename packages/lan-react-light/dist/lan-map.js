import React from 'react';

export function LanMap({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M512 26.7c0-5.6-2.9-10.7-7.6-13.6s-10.6-3.2-15.6-.7L352.9 80.7 178.6 22.6c-11.5-3.8-24-3.2-35 1.8L9.4 85.3C3.7 87.9 0 93.6 0 99.9v385.4c0 5.6 2.9 10.7 7.6 13.7s10.6 3.2 15.6.7l135.9-68.4 174.3 58.1c11.5 3.8 24 3.2 35-1.8l134.2-60.9c5.7-2.6 9.4-8.3 9.4-14.6zM368 109l112-56.4v349.2l-112 50.8zm-32-.2v347.7l-160-53.3V55.5zM144 403 32 459.4V110.2l112-50.8z"})
  );
}

export default LanMap;
