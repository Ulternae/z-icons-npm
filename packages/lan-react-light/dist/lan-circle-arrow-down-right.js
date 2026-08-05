import React from 'react';

export function LanCircleArrowDownRight({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 480a224 224 0 1 1 0-448 224 224 0 1 1 0 448m0-480a256 256 0 1 0 0 512 256 256 0 1 0 0-512m64 208v89.4L187.3 164.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L297.4 320H208c-8.8 0-16 7.2-16 16s7.2 16 16 16h128c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16s-16 7.2-16 16"})
  );
}

export default LanCircleArrowDownRight;
