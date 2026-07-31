import React from 'react';

export const LanEraserThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M28.3 333.7C20.4 325.8 16 315.1 16 304s4.4-21.8 12.3-29.7L169.7 133 411 374.3l-75.6 75.6c-9 9-21.2 14.1-33.9 14.1h-123c-12.7 0-24.9-5.1-33.9-14.1zm152.7-212 93.4-93.4C282.2 20.4 292.9 16 304 16s21.8 4.4 29.7 12.3l182 182c7.9 7.9 12.3 18.5 12.3 29.7s-4.4 21.8-12.3 29.7L422.3 363zM178.5 480H536c4.4 0 8-3.6 8-8s-3.6-8-8-8H343.8c1-.9 2-1.8 2.9-2.7L527 281c10.9-10.9 17-25.6 17-41s-6.1-30.1-17-41L345 17C334.1 6.1 319.4 0 304 0s-30.1 6.1-41 17L17 263C6.1 273.9 0 288.6 0 304s6.1 30.1 17 41l116.3 116.3c12 12 28.3 18.7 45.3 18.7z"})
);

export default LanEraserThin;
