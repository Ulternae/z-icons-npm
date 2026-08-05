import React from 'react';

export function LanTally5Thin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M96 32c4.4 0 8 3.6 8 8v265.4l112-35.2V40c0-4.4 3.6-8 8-8s8 3.6 8 8v225.2L344 230V40c0-4.4 3.6-8 8-8s8 3.6 8 8v185l112-35.2V40c0-4.4 3.6-8 8-8s8 3.6 8 8v144.8l77.6-24.4c4.2-1.3 8.7 1 10 5.2s-1 8.7-5.2 10L488 201.5V472c0 4.4-3.6 8-8 8s-8-3.6-8-8V206.6l-112 35.2V472c0 4.4-3.6 8-8 8s-8-3.6-8-8V246.8L232 282v190c0 4.4-3.6 8-8 8s-8-3.6-8-8V287l-112 35.2V472c0 4.4-3.6 8-8 8s-8-3.6-8-8V327.2l-77.6 24.4c-4.2 1.3-8.7-1-10-5.2s1-8.7 5.2-10L88 310.5V40c0-4.4 3.6-8 8-8"})
  );
}

export default LanTally5Thin;
