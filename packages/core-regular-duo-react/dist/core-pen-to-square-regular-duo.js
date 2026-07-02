import React from 'react';

export function CorePenToSquareRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -35.85 516.25 547.85',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M192.4 237.3V288h50.7L441.7 89.4c14-14 14-36.7 0-50.7s-36.7-14-50.7 0z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M391 38.6 192.4 237.2v50.7h50.7L441.7 89.3c14-14 14-36.7 0-50.7s-36.7-14-50.7 0m96-45.2c39 39 39 102.2 0 141.3l-208 208-9.4 9.4H128.3V210.8l9.4-9.4 208-208c39-39 102.2-39 141.3 0M64.4 32h152.2l-64 64H64.4v320h320v-88.2l64-64V416c0 35.3-28.7 64-64 64h-320c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64"})
  );
}

export default CorePenToSquareRegularDuo;
