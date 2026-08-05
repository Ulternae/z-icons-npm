import React from 'react';

export function NeoPalette({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 560 560',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M112 266a42 42 0 1 1 84 0 42 42 0 1 1-84 0m98 182a42 42 0 1 0 0-84 42 42 0 1 0 0 84m14-294a42 42 0 1 1 84 0 42 42 0 1 1-84 0m182 98a42 42 0 1 0 0-84 42 42 0 1 0 0 84M280 560c-83 0-153.6-26.5-203.5-76.5S0 363 0 280 26.5 126.4 76.5 76.5 197 0 280 0s153.6 26.5 203.5 76.5S560 197 560 280c0 46.4-37.6 84-84 84h-56c-19.6 0-33 6.1-41.5 14.5S364 400.4 364 420v56c0 46.4-37.6 84-84 84M56 280c0 71 22.5 126.4 60 164s93 60 164 60c15.5 0 28-12.5 28-28v-56c0-31.7 10.2-60.3 31-81s49.4-31 81-31h56c15.5 0 28-12.5 28-28 0-71-22.5-126.4-60-164s-93-60-164-60-126.4 22.5-164 60-60 93-60 164"})
  );
}

export default NeoPalette;
