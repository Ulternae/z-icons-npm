import React from 'react';

export const LanTextSize = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M32 72c0-4.4 3.6-8 8-8h104v384H80c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64V64h104c4.4 0 8 3.6 8 8v72c0 8.8 7.2 16 16 16s16-7.2 16-16V72c0-22.1-17.9-40-40-40H40C17.9 32 0 49.9 0 72v72c0 8.8 7.2 16 16 16s16-7.2 16-16zm256 192c0-4.4 3.6-8 8-8h104v192h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64V256h104c4.4 0 8 3.6 8 8v72c0 8.8 7.2 16 16 16s16-7.2 16-16v-72c0-22.1-17.9-40-40-40H296c-22.1 0-40 17.9-40 40v72c0 8.8 7.2 16 16 16s16-7.2 16-16z"})
);

export default LanTextSize;
