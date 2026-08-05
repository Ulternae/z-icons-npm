import React from 'react';

export function LanShovelSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -31.975 576.075 575.975',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M425.4-22.6c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3l-44.1 44.1c-18.7 18.7-44.1 29.3-70.6 29.3-15.9 0-30.9-3.7-44.3-10.3l-129 129 39.4 39.4c18.7 18.7 18.7 49.1 0 67.9l-84.8 84.8C206.8 529.2 171 544 133.7 544 59.9 544 0 484.1 0 410.3c0-37.3 14.8-73.1 41.2-99.5L126 226c18.7-18.7 49.1-18.7 67.9 0l39.4 39.4 129-129C355.7 123.1 352 108 352 92.1c0-26.5 10.5-51.9 29.3-70.6zM448 45.3l-21.5 21.4c-6.7 6.7-10.5 15.9-10.5 25.4 0 19.8 16.1 35.9 35.9 35.9 9.5 0 18.6-3.8 25.4-10.5L498.7 96z"})
  );
}

export default LanShovelSolid;
