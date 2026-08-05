import React from 'react';

export function LanCircleS({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-17.4-352c-30.1 0-54.6 24.4-54.6 54.6 0 27.2 20 50.2 46.8 54l45.8 6.5c11.1 1.6 19.4 11.1 19.4 22.3 0 12.5-10.1 22.6-22.6 22.6H208c-8.8 0-16 7.2-16 16s7.2 16 16 16h65.4c30.1 0 54.6-24.4 54.6-54.6 0-27.1-20-50.2-46.8-54l-45.8-6.5c-11.1-1.6-19.4-11.1-19.4-22.3 0-12.5 10.1-22.6 22.6-22.6H296c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
  );
}

export default LanCircleS;
